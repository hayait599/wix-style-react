import React, { PropTypes } from 'react';
import WixComponent from '../BaseComponents/WixComponent';
import { findDOMNode } from 'react-dom';
import shallowCompare from 'react-addons-shallow-compare';
import shallowEqual from 'shallowequal';
import compose from 'recompose/compose';
import getContext from 'recompose/getContext';
import { DragSource, DropTarget } from 'react-dnd';
import { getEmptyImage } from 'react-dnd-html5-backend';
import itemTypes from './itemTypes';
import { getValuesByKey } from './utils';

// keep track of horizontal mouse movement
const mouse = {
  lastX: 0,
};

function increaseHorizontalLevel(prevPosition, prevIndex) {
  const nextPosition = prevPosition.slice(0, -1);
  // append to prevSibling's children
  nextPosition.push(prevIndex - 1, -1);
  return nextPosition;
}

function decreaseHorizontalLevel(prevPosition) {
  const nextPosition = prevPosition.slice(0, -1);
  nextPosition[nextPosition.length - 1] += 1;
  return nextPosition;
}

function calculateHandleOffset(handleRect, containerRect) {
  return {
    x: handleRect.x - containerRect.x,
    y: handleRect.y - containerRect.y,
  };
}

const cardSource = {
  isDragging(props, monitor) {
    const ids = getValuesByKey(monitor.getItem().data, 'id', 'children');
    return ids.indexOf(props.id) > -1;
  },
  beginDrag(props, monitor, component) {
    const node = findDOMNode(component);

    const clientRect = node.getBoundingClientRect();
    let handleOffset = { x: 0, y: 0 };
    // needed to fix dnd drag offset data
    if (component.handleNode) {
      handleOffset = calculateHandleOffset(
        component.handleNode.getBoundingClientRect(),
        clientRect,
      );
    }
    return {
      id: props.id,
      index: props.index,
      position: props.position,
      data: props.item,
      depth: props.depth,
      // rect for entire component including children
      clientRect,
      handleOffset,
    };
  },
};

const cardTarget = {
  drop(props, monitor) {
    // clear mouse position
    mouse.lastX = 0;
    if (!monitor.didDrop()) {
      props.dropItem();
    }
  },
  hover(props, monitor, component) {
    if (!component) {
      return;
    }

    const item = monitor.getItem();

    // the item being dragged
    const {
      position: prevPosition,
      data: dragItem,
      depth: dragDepth,
      index: prevIndex,
    } = item;

    // props for component underneath drag
    const {
      position: hoverPosition,
      siblings: hoverSiblings,
      maxDepth,
      threshold,
    } = props;

    const hoverDepth = hoverPosition.length - 1;
    const totalDepth = hoverDepth + dragDepth;

    // don't exceed max depth
    if (totalDepth > maxDepth) {
      return;
    }

    // determine mouse position
    const clientOffset = monitor.getClientOffset() || { x: 0, y: 0 };
    const initialClientOffset = monitor.getInitialClientOffset() || {
      x: 0,
      y: 0,
    };

    const hoverNode = findDOMNode(component);
    // rect for entire component including children
    const hoverClientRect = hoverNode.getBoundingClientRect();

    // rect for item without children
    const hoverItemClientRect = hoverNode.children[0].getBoundingClientRect();

    const isOverSelf = shallowEqual(prevPosition, hoverPosition);

    // set mouse.lastX if it isn't set yet (first hover event)
    mouse.lastX = mouse.lastX || initialClientOffset.x;

    const currMouseX = clientOffset.x;
    const mouseDistanceX = currMouseX - mouse.lastX;
    const nearLeftEdge = currMouseX < hoverClientRect.left + 10;

    // nextPosition will be overwritten when moving horizontally
    let nextPosition = hoverPosition;

    // moving horizontally
    if (isOverSelf && (nearLeftEdge || Math.abs(mouseDistanceX) >= threshold)) {
      // reset lastX for new phase
      mouse.lastX = currMouseX;

      // increase horizontal level
      if (
        mouseDistanceX > 0 &&
        // has previous sibling
        prevIndex - 1 >= 0 &&
        // isn't at max depth
        prevPosition.length + dragDepth - 1 !== maxDepth
      ) {
        nextPosition = increaseHorizontalLevel(prevPosition, prevIndex);
      }

      // decrease horizontal level
      if (
        mouseDistanceX < 0 &&
        // is nested
        prevPosition.length > 1 &&
        // is last item in array
        prevIndex === hoverSiblings.length - 1
      ) {
        nextPosition = decreaseHorizontalLevel(prevPosition);
      }
    }

    // don't replace items with themselves
    if (shallowEqual(prevPosition, nextPosition)) {
      return;
    }

    // get vertical middle
    const hoverMiddleY = (hoverClientRect.bottom - hoverClientRect.top) / 2;

    // get pixels to the top
    const hoverClientY = clientOffset.y - hoverClientRect.top;

    // dragging child item to another position with same parent
    if (nextPosition.length === prevPosition.length) {
      const last = nextPosition.length - 1;
      const previousIndex = prevPosition[last];
      const nextIndex = nextPosition[last];

      // only perform the move when the mouse has crossed half of the items height
      // when dragging downwards, only move when the cursor is below 50%
      // when dragging upwards, only move when the cursor is above 50%

      // dragging downwards
      if (previousIndex < nextIndex && hoverClientY < hoverMiddleY) {
        return;
      }

      // dragging upwards
      if (previousIndex > nextIndex && hoverClientY > hoverMiddleY) {
        return;
      }
    } else if (
      // dragging child item over parent item
      nextPosition.length < prevPosition.length &&
      nextPosition[nextPosition.length - 1] ===
        prevPosition[prevPosition.length - 2]
    ) {
      const hoverItemMiddleY =
        (hoverItemClientRect.bottom - hoverItemClientRect.top) / 2;

      // cancel if hovering in lower half of parent item
      if (hoverClientY > hoverItemMiddleY) {
        return;
      }
    } else if (!isOverSelf && clientOffset.y > hoverItemClientRect.bottom) {
      // cancel if over a nested target that isn't its own child
      return;
    }

    // this is where the actual move happens
    const nextPos = props.moveItem({
      dragItem,
      prevPosition,
      nextPosition,
    });
    // note: we're mutating the monitor item here!
    // generally it's better to avoid mutations,
    // but it's good here for the sake of performance
    // to avoid expensive index searches
    item.position = nextPos;
    item.index = nextPos[nextPos.length - 1];
  },
};

class Item extends WixComponent {
  componentDidMount() {
    // use empty image as a drag preview so browsers don't draw it
    // and we can draw whatever we want on the custom drag layer instead.
    this.props.connectDragPreview(getEmptyImage(), {
      // IE fallback: specify that we'd rather screenshot the node
      // when it already knows it's being dragged so we can hide it with CSS.
      captureDraggingState: true,
    });
  }

  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return shallowCompare(this, nextProps, nextState, nextContext);
  }

  render() {
    const {
      item,
      position,
      children,
      isPlaceholder,
      connectDragSource,
      connectDropTarget,
      isRenderDraggingChildren,
      useDragHandle,
      renderItem,
    } = this.props;

    const renderChildren = !isPlaceholder || isRenderDraggingChildren;

    // params passed to renderItem callback
    const renderParams = {
      item,
      isPlaceholder,
      isPreview: false,
      depth: position.length,
    };

    if (useDragHandle) {
      renderParams.connectDragSource = handle => {
        const handleWithRef = React.cloneElement(handle, {
          ref: node => (this.handleNode = findDOMNode(node)),
        });
        return connectDragSource(handleWithRef);
      };

      return connectDropTarget(
        <div data-hook="nestable-item" ref={this._setRootNode}>
          {renderItem(renderParams)}
          {renderChildren && children}
        </div>,
      );
    }

    return compose(
      connectDropTarget,
      connectDragSource,
    )(
      <div data-hook="nestable-item">
        {renderItem(renderParams)}
        {renderChildren && children}
      </div>,
    );
  }
}

export const DragItemSource = DragSource(
  itemTypes.nestedItem,
  cardSource,
  (connect, monitor) => ({
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isPlaceholder: monitor.isDragging(),
  }),
)(Item);

export const DropItemTarget = DropTarget(
  itemTypes.nestedItem,
  cardTarget,
  connect => ({
    connectDropTarget: connect.dropTarget(),
  }),
)(DragItemSource);

export const ItemContext = getContext({
  useDragHandle: PropTypes.bool.isRequired,
  maxDepth: PropTypes.number.isRequired,
  threshold: PropTypes.number.isRequired,
  renderItem: PropTypes.func.isRequired,
  moveItem: PropTypes.func.isRequired,
  dropItem: PropTypes.func.isRequired,
})(DropItemTarget);

export default ItemContext;
