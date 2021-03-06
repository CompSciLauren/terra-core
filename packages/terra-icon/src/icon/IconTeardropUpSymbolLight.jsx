/* eslint-disable */
import React from 'react';
import IconBase from '../IconBase';

const SvgIcon = (customProps) => {
  const attributes = Object.assign({}, customProps);

  return (
    <IconBase {...attributes}>
      <path d="M24.1 45.6c-2-2.4-6.4-7.8-13.3-16.2C4.8 22 6 11.2 13.4 5.2 20.7-.6 31.3.5 37.1 7.8c0 .1.1.1.1.2 5 6.3 5 15.2 0 21.5-6.7 8.3-11.2 13.7-13.1 16.1z" fill="#fff" ></path><path d="M24 0v3c4.7 0 9.2 2.2 12.1 5.9 4.6 5.8 4.6 13.9 0 19.7-5.7 6.9-9.7 11.8-12.1 14.6-2.3-2.8-6.4-7.8-12.2-14.7-5.4-6.8-4.3-16.6 2.4-22.1C17.1 4.2 20.5 3 24 3V0m0 0c-4.2 0-8.2 1.4-11.5 4.1-8 6.5-9.3 18.2-2.9 26.3C19.3 42.1 24.1 48 24.1 48s4.8-5.9 14.4-17.5c5.4-6.9 5.4-16.5 0-23.4C35 2.6 29.6 0 24 0z" ></path>
    </IconBase>
  );
};

SvgIcon.displayName = "IconTeardropUpSymbolLight";
SvgIcon.defaultProps = {"viewBox":"0 0 48 48","xmlns":"http://www.w3.org/2000/svg"};

export default SvgIcon;
/* eslint-enable */
