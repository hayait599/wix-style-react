import React, { Component } from 'react';
import PropTypes from 'prop-types';

import { withFocusable } from 'wix-ui-core/dist/src/hocs/Focusable/FocusableHOC';

import AddItemLarge from 'wix-ui-icons-common/system/AddItemLarge';
import AddItemMedium from 'wix-ui-icons-common/system/AddItemMedium';
import AddItemSmall from 'wix-ui-icons-common/system/AddItemSmall';
import Add from '../new-icons/Add';
import ActionText from './components/ActionText';
import Tooltip from '../Tooltip';
import TooltipHOC from './components/TooltipHOC';
import AddMedia from 'wix-ui-icons-common/system/AddMedia';

import style from './AddItem.st.css';

const ICONS = {
  large: <AddItemLarge />,
  medium: <AddItemMedium />,
  small: <AddItemSmall />,
  tiny: <Add width="26" height="26" style={{ flexShrink: 0 }} />,
  custom: <AddMedia width="31" height="31" />,
};

class AddItem extends Component {
  static displayName = 'AddItem';
  static propTypes = {
    /** Any component or string */
    children: PropTypes.node,

    /** Apply disabled styles */
    disabled: PropTypes.bool,

    /** The theme of component */
    theme: PropTypes.oneOf(['dashes', 'plain', 'filled', 'image']),

    /** Switching content alignment  */
    alignItems: PropTypes.oneOf(['center', 'right', 'left']),

    /** Size to control icon and spacing  */
    size: PropTypes.oneOf(['large', 'medium', 'small', 'tiny']),

    /** Click event handler  */
    onClick: PropTypes.func,

    /** used for testing */
    dataHook: PropTypes.string,

    /** Tooltip props, leave undefined for no tooltip */
    tooltipProps: PropTypes.shape(Tooltip.propTypes),

    /** Content of the tooltip, leave undefined for no tooltip */
    tooltipContent: PropTypes.string,
  };

  static defaultProps = {
    theme: 'dashes',
    size: 'tiny',
    alignItems: 'center',
  };

  _renderIcon = () => {
    const { size, theme } = this.props;
    const image = theme === 'image';
    return ICONS[image ? 'custom' : size];
  };

  _renderText = () => {
    const { children, disabled, theme, size } = this.props;
    if (!children || theme === 'image') {
      return null;
    }
    return (
      <ActionText disabled={disabled} size={size}>
        {children}
      </ActionText>
    );
  };

  _renderContent = () => {
    const { theme, alignItems, size } = this.props;

    const container = (
      <div {...style('content', { theme, size, alignItems })}>
        {this._renderIcon()}
        {this._renderText()}
      </div>
    );
    return (
      <TooltipHOC enabled={theme === 'image'} {...this.props}>
        {container}
      </TooltipHOC>
    );
  };

  render() {
    const {
      dataHook,
      onClick,
      disabled,
      theme,
      focusableOnFocus,
      focusableOnBlur,
    } = this.props;
    return (
      <button
        {...style('root', { theme }, this.props)}
        data-hook={dataHook}
        disabled={disabled}
        onClick={onClick}
        onFocus={focusableOnFocus}
        onBlur={focusableOnBlur}
      >
        {this._renderContent()}
      </button>
    );
  }
}
export default withFocusable(AddItem);
