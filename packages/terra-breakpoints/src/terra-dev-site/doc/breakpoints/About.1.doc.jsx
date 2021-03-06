/* eslint-disable import/no-webpack-loader-syntax, import/first, import/no-duplicates */
import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Example Files
import ActiveBreakpointProviderExample from '../example/ActiveBreakpointProviderExample';
import ActiveBreakpointProviderExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ActiveBreakpointProviderExample.jsx';
import MixinsExample from '../example/MixinsExample';
import MixinsExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/MixinsExample.jsx';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'ActiveBreakpointProvider Example',
        example: <ActiveBreakpointProviderExample />,
        source: ActiveBreakpointProviderExampleSrc,
      },
      {
        title: 'Mixin Example',
        example: <MixinsExample />,
        source: MixinsExampleSrc,
      },
    ]}
  />
);

export default DocPage;
