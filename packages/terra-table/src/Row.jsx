import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './Row.module.scss';
import {
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './TableUtils';
import CheckMarkCell from './CheckMarkCell';
import ChevronCell from './ChevronCell';

const cx = classNames.bind(styles);

const propTypes = {
  /**
   * The children passed to the component
   */
  children: PropTypes.node.isRequired,
  /**
   * Indicates the desired divider styles to apply to a row and its children.
   * One of `'none'`, `'vertical'`, `'horizontal'`, `'both'`.
   */
  dividerStyle: PropTypes.oneOf(['none', 'vertical', 'horizontal', 'both']),
  /**
   * Whether or not the cell display as disabled.
   */
  isDisabled: PropTypes.bool,
  /**
   * Whether or not row is selected
   */
  isSelected: PropTypes.bool,
  /**
   * Whether or not row is selectable
   */
  isSelectable: PropTypes.bool,
  /**
   * Whether or not row should display as a striped row.
   */
  isStriped: PropTypes.bool,
  /**
   * The associated metaData to be provided in the onSelect callback.
   */
  // eslint-disable-next-line react/forbid-prop-types
  metaData: PropTypes.object,
  /**
   * Function callback for when the appropriate click or key action is performed.
   * Callback contains the javascript event and prop metadata, e.g. onSelect(event, metaData)
   */
  onSelect: PropTypes.func,
  /**
   * Function callback for the ref of the tr.
   */
  refCallback: PropTypes.func,
  /**
   * Style of selection for the row.
   * One of `default`, `checkmark`, `chevron`.
   */
  selectionStyle: PropTypes.oneOf(['default', 'checkmark', 'chevron']),
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onBlur: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onClick: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onKeyDown: PropTypes.func,
  /**
   * @private Callback function not intended for use with this API, but if set pass it through to the element regardless.
   */
  onMouseDown: PropTypes.func,
};

const defaultProps = {
  dividerStyle: 'none',
  isDisabled: false,
  isSelected: false,
  isSelectable: false,
  isStriped: false,
  selectionStyle: 'default',
};

const Row = ({
  children,
  dividerStyle,
  isDisabled,
  isSelected,
  isSelectable,
  isStriped,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  selectionStyle,
  ...customProps
}) => {
  const attrSpread = {};
  if (isSelectable) {
    if (isDisabled) {
      attrSpread['aria-disabled'] = true;
    } else {
      attrSpread.onClick = wrappedOnClickForItem(onClick, onSelect, metaData);
      attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
      attrSpread.tabIndex = '0';
      attrSpread['data-row-show-focus'] = 'true';
      attrSpread.onBlur = wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-row-show-focus', 'true'));
      attrSpread.onMouseDown = wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-row-show-focus', 'false'));
    }
    attrSpread['aria-selected'] = isSelected;
  }

  let check;
  let chevron;
  if (selectionStyle === 'checkmark') {
    check = (
      <CheckMarkCell isPadded isSelected={isSelected} />
    );
  } else if (selectionStyle === 'chevron') {
    chevron = (
      <ChevronCell isPadded isVisible={isSelectable} />
    );
  }

  const headerCellClasses = cx(
    { 'is-selected': selectionStyle === 'default' && isSelected && isSelectable },
    { 'is-selectable': !isDisabled && isSelectable },
    { 'is-striped': isStriped },
    `divider-${dividerStyle}`,
    'row',
  );

  return (
    <div
      {...customProps}
      {...attrSpread}
      className={customProps.className ? `${headerCellClasses} ${customProps.className}` : headerCellClasses}
      ref={refCallback}
      role="row"
    >
      {check}
      {children}
      {chevron}
    </div>
  );
};

Row.propTypes = propTypes;
Row.defaultProps = defaultProps;

export default Row;
