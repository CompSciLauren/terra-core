import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames/bind';
import styles from './HeaderCell.module.scss';
import {
  styleFromWidth,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
} from './TableUtils';

const cx = classNames.bind(styles);

const ariaSortMap = {
  asc: 'ascending',
  desc: 'descending',
  none: 'none',
};

const propTypes = {
  /**
   * Content to be displayed for the column header.
   */
  children: PropTypes.node,
  /**
   * Whether or not the cell should adhere to the tables paddingStyle.
   */
  isPadded: PropTypes.bool,
  /**
   * Whether or not header cell should appear as a selectable element.
   */
  isSelectable: PropTypes.bool,
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
   * Function callback for the ref of the th.
   */
  refCallback: PropTypes.func,
  /**
   * Whether or not data in table is sorted (none, asc, desc)
   */
  sort: PropTypes.oneOf(['none', 'asc', 'desc']),
  /**
   * String-formatted width that the HeaderCell should be rendered as. Any valid css width value is supported (i.e. 200px, 3rem).
   */
  width: PropTypes.shape({
    static: PropTypes.shape({
      value: PropTypes.number.isRequired,
      unit: PropTypes.string.isRequired,
    }),
    percentage: PropTypes.number,
    scalar: PropTypes.number,
  }),
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
  children: [],
  isSelectable: false,
  sort: 'none',
};

const HeaderCell = ({
  children,
  isPadded,
  isSelectable,
  metaData,
  onBlur,
  onClick,
  onKeyDown,
  onMouseDown,
  onSelect,
  refCallback,
  sort,
  width,
  ...customProps
}) => {
  let sortIndicator;
  if (sort !== 'none') {
    sortIndicator = <div className={cx(`sort-indicator-${sort}`)} key="sort" />;
  }

  const attrSpread = { 'aria-sort': ariaSortMap[sort] };
  if (isSelectable) {
    attrSpread.onClick = wrappedOnClickForItem(onClick, onSelect, metaData);
    attrSpread.onKeyDown = wrappedOnKeyDownForItem(onKeyDown, onSelect, metaData);
    attrSpread.tabIndex = '0';
    attrSpread['data-header-show-focus'] = 'true';
    attrSpread.onBlur = wrappedEventCallback(onBlur, event => event.currentTarget.setAttribute('data-header-show-focus', 'true'));
    attrSpread.onMouseDown = wrappedEventCallback(onMouseDown, event => event.currentTarget.setAttribute('data-header-show-focus', 'false'));
    attrSpread['aria-selected'] = false;
  }

  let content = [
    <div className={cx('cell-content')} key="content">
      {children}
    </div>,
    sortIndicator,
  ];

  if (isPadded) {
    content = (
      <div className={cx('container')}>
        {content}
      </div>
    );
  }

  const headerCellClasses = cx(
    'header-cell',
    { 'is-selectable': isSelectable },
    { 'is-sortable': sort === 'asc' || sort === 'desc' },
  );

  return (
    <div
      {...customProps}
      {...attrSpread}
      style={styleFromWidth(width)} // eslint-disable-line react/forbid-dom-props
      className={customProps.className ? `${headerCellClasses} ${customProps.className}` : headerCellClasses}
      ref={refCallback}
      role="columnheader"
    >
      {content}
    </div>
  );
};

HeaderCell.propTypes = propTypes;
HeaderCell.defaultProps = defaultProps;

export default HeaderCell;
