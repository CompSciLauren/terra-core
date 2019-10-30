import { KEY_RETURN, KEY_SPACE } from 'keycode-js';

const shouldBeMultiSelectable = (maxSelectionCount, selectedKeys, key) => (maxSelectionCount < 0 || selectedKeys.indexOf(key) >= 0 || selectedKeys.length < maxSelectionCount);

/**
 * Returns a new array, updated with the newKey being added or removed from the existing.
 */
const updatedMultiSelectedKeys = (currentKeys, newKey) => {
  if (currentKeys.length) {
    if (currentKeys.indexOf(newKey) >= 0) {
      const newKeys = currentKeys.slice();
      newKeys.splice(newKeys.indexOf(newKey), 1);
      return newKeys;
    }
    return currentKeys.concat([newKey]);
  }
  return [newKey];
};

/**
 * Returns a wrapped onClick callback function. If the onSelect method isn't passed, we return the initial onClick.
 */
const wrappedOnClickForItem = (onClick, onSelect, metaData) => {
  if (!onSelect) {
    return onClick;
  }
  return (event) => {
    onSelect(event, metaData);

    if (onClick) {
      onClick(event);
    }
  };
};

/**
 * Returns a wrapped onKeyDown callback function with enter and space keys triggering onSelect. If the onSelect method isn't passed, we return the initial onClick.
 */
const wrappedOnKeyDownForItem = (onKeyDown, onSelect, metaData) => {
  if (!onSelect) {
    return onKeyDown;
  }
  return (event) => {
    if (event.nativeEvent.keyCode === KEY_RETURN || event.nativeEvent.keyCode === KEY_SPACE) {
      onSelect(event, metaData);
    }

    if (onKeyDown) {
      onKeyDown(event);
    }
  };
};

/**
 * Returns a function that wraps both the old and new callback.
 */
const wrappedEventCallback = (callback, newCallback) => {
  if (!callback) {
    return newCallback;
  }
  return (event) => {
    newCallback(event);

    if (callback) {
      callback(event);
    }
  };
};

const staticStyle = width => (
  {
    msFlex: '0 0 0px',
    flex: '0 0 0px',
    maxWidth: width,
    minWidth: width,
  }
);

const scalarStyle = width => (
  {
    msFlex: `${width} ${width} 0px`,
    flex: `${width} ${width} 0px`,
  }
);

const styleFromWidth = (width) => {
  if (!width) {
    return null;
  }
  if (width.static) {
    return staticStyle(`${width.static.value}${width.static.unit}`);
  }
  if (width.percentage) {
    return staticStyle(`${width.percentage}%`);
  }
  if (width.scalar) {
    return scalarStyle(width.scalar);
  }
  return null;
};

const TableUtils = {
  updatedMultiSelectedKeys,
  shouldBeMultiSelectable,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
  styleFromWidth,
};

export default TableUtils;
export {
  updatedMultiSelectedKeys,
  shouldBeMultiSelectable,
  wrappedOnClickForItem,
  wrappedOnKeyDownForItem,
  wrappedEventCallback,
  styleFromWidth,
};
