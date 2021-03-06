import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/BlockActionFooter.md';
import { name, version } from '../../../../package.json';

// Example Files
import BlockActionFooterPropsTable from '!terra-props-table-loader!../../../../src/BlockActionFooter';
import BlockActionFooterSrc from '!raw-loader!../../../../src/BlockActionFooter';
import EmptyExample from '../example/block/Empty';
import EmptyExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/block/Empty';
import SingleActionExample from '../example/block/SingleAction';
import SingleActionExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/block/SingleAction';
import MultipleActionsExample from '../example/block/MultipleActions';
import MultipleActionsExampleSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/block/MultipleActions';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Empty',
        example: <EmptyExample />,
        source: EmptyExampleSrc,
      },
      {
        title: 'Single Action',
        example: <SingleActionExample />,
        source: SingleActionExampleSrc,
      },
      {
        title: 'Multiple Actions',
        example: <MultipleActionsExample />,
        source: MultipleActionsExampleSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Block Action Footer',
        componentSrc: BlockActionFooterSrc,
        componentProps: BlockActionFooterPropsTable,
      },
    ]}
  />
);

export default DocPage;
