import React from 'react';
import classNames from 'classnames/bind';
import Select from '../../../Select';
import styles from './common/Select.test.module.scss';

const cx = classNames.bind(styles);

const DefaultValueZero = () => (
  <div className={cx('content-wrapper')}>
    <iframe title="frmselect" src="/#/raw/tests/terra-form-select/form-select/many-options" height="600" width="800" />
    <Select defaultValue={0} id="defaultValueZero">
      <Select.Option value={0} display="0" />
      <Select.Option value={1} display="1" />
      <Select.Option value={2} display="2" />
    </Select>
  </div>
);

export default DefaultValueZero;
