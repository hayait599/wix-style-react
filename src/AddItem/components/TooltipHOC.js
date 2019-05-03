import React, { Component } from 'react';
import Tooltip from '../../Tooltip/TooltipNext';

import style from './TooltipHOC.st.css';

class TooltipHOC extends Component {
  render() {
    const { tooltipProps, tooltipContent, children, enabled } = this.props;
    return enabled ? (
      <Tooltip
        placement="top"
        appendTo="window"
        {...tooltipProps}
        {...style('tooltip', {}, this.props)}
        upgrade
        content={tooltipContent}
        dataHook="additem-tooltip"
      >
        {children}
      </Tooltip>
    ) : (
      children
    );
  }
}
export default TooltipHOC;
