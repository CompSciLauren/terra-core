/* eslint-disable import/no-webpack-loader-syntax, import/first */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import UpgradeGuide from '../../../../docs/UPGRADEGUIDE.md';

const DocPage = () => (
  <DocTemplate
    packageName="terra-demographics-banner"
    srcPath="https://github.com/cerner/terra-core/tree/master/packages/terra-demographics-banner"
    readme={UpgradeGuide}
  />
);

export default DocPage;
