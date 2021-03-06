import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';
import { name, version } from '../../../../package.json';

// Examples
import ButtonGroupPropsTable from '!terra-props-table-loader!../../../../src/ButtonGroup';
import ButtonGroupSrc from '!raw-loader!../../../../src/ButtonGroup';
import ButtonGroupButtonPropsTable from '!terra-props-table-loader!../../../../src/ButtonGroup';
import ButtonGroupButtonSrc from '!raw-loader!../../../../src/ButtonGroup';
import ButtonGroupWithIcons from '../example/ButtonGroupWithIcons';
import ButtonGroupWithIconsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupWithIcons';
import ButtonGroupDisabledButtons from '../example/ButtonGroupDisabledButtons';
import ButtonGroupDisabledButtonsSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupDisabledButtons';
import ButtonGroupSingleSelect from '../example/ButtonGroupSingleSelect';
import ButtonGroupSingleSelectSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupSingleSelect';
import ButtonGroupMultiSelect from '../example/ButtonGroupMultiSelect';
import ButtonGroupMultiSelectSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupMultiSelect';
import ButtonGroupIsBlock from '../example/ButtonGroupIsBlock';
import ButtonGroupIsBlockSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/ButtonGroupIsBlock';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Text and Icon - Default, no selected state',
        example: <ButtonGroupWithIcons />,
        source: ButtonGroupWithIconsSrc,
      },
      {
        title: 'Single Select - Manage single button selection',
        example: <ButtonGroupSingleSelect />,
        source: ButtonGroupSingleSelectSrc,
      },
      {
        title: 'Multi Select - Manage multiple button selections',
        example: <ButtonGroupMultiSelect />,
        source: ButtonGroupMultiSelectSrc,
      },
      {
        title: 'Disabled Buttons - Default, no selected state',
        example: <ButtonGroupDisabledButtons />,
        source: ButtonGroupDisabledButtonsSrc,
      },
      {
        title: 'ButtonGroup Is Block - width stretches to fill container',
        example: <ButtonGroupIsBlock />,
        source: ButtonGroupIsBlockSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Button Group',
        componentSrc: ButtonGroupSrc,
        componentProps: ButtonGroupPropsTable,
      },
      {
        componentName: 'Button Group Button',
        componentSrc: ButtonGroupButtonSrc,
        componentProps: ButtonGroupButtonPropsTable,
      },
    ]}
  />
);

export default DocPage;
