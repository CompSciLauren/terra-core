import React from 'react';
import DocTemplate from 'terra-doc-template';
import ReadMe from '../../../../docs/README.md';

import { name, version } from '../../../../package.json';

// Example Files
import SearchFieldPropsTable from '!terra-props-table-loader!../../../../src/SearchField';
import SearchFieldSrc from '!raw-loader!../../../../src/SearchField';
import SearchFieldBasic from '../example/SearchFieldBasic';
import SearchFieldBasicSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldBasic';
import SearchFieldPlaceholder from '../example/SearchFieldPlaceholder';
import SearchFieldPlaceholderSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldPlaceholder';
import SearchFieldMinimumLength from '../example/SearchFieldMinimumLength';
import SearchFieldMinimumLengthSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldMinimumLength';
import SearchFieldDelayed from '../example/SearchFieldDelayed';
import SearchFieldDelayedSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDelayed';
import SearchFieldDefaultValue from '../example/SearchFieldDefaultValue';
import SearchFieldDefaultValueSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDefaultValue';
import SearchFieldDisabled from '../example/SearchFieldDisabled';
import SearchFieldDisabledSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDisabled';
import SearchFieldDisabledAutoFormatting from '../example/SearchFieldDisableAutoFormatAttrs';
import SearchFieldDisabledAutoFormattingSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDisableAutoFormatAttrs';
import SearchFieldBlock from '../example/SearchFieldBlock';
import SearchFieldBlockSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldBlock';
import SearchFieldDisableAutoSearch from '../example/SearchFieldDisableAutoSearch';
import SearchFieldDisableAutoSearchSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldDisableAutoSearch';
import SearchFieldFilterNumeric from '../example/SearchFieldFilterNumeric';
import SearchFieldFilterNumericSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldFilterNumeric';
import SearchFieldFocus from '../example/SearchFieldFocus';
import SearchFieldFocusSrc from '!raw-loader!../../../../src/terra-dev-site/doc/example/SearchFieldFocus';

const DocPage = () => (
  <DocTemplate
    packageName={name}
    packageVersion={version}
    readme={ReadMe}
    srcPath={`https://github.com/cerner/terra-core/tree/master/packages/${name}`}
    examples={[
      {
        title: 'Search Field',
        example: <SearchFieldBasic />,
        source: SearchFieldBasicSrc,
      },
      {
        title: 'Search Field with Placeholder Text',
        example: <SearchFieldPlaceholder />,
        source: SearchFieldPlaceholderSrc,
      },
      {
        title: 'Search Field with Minimum Search Text Length of 5 Characters',
        example: <SearchFieldMinimumLength />,
        source: SearchFieldMinimumLengthSrc,
      },
      {
        title: 'Search Field with Delay of 2000ms',
        example: <SearchFieldDelayed />,
        source: SearchFieldDelayedSrc,
      },
      {
        title: 'Search Field with a Default Value',
        example: <SearchFieldDefaultValue />,
        source: SearchFieldDefaultValueSrc,
      },
      {
        title: 'Search Field that is Disabled',
        example: <SearchFieldDisabled />,
        source: SearchFieldDisabledSrc,
      },
      {
        title: 'Search Field that has Autocomplete, Autocorrect, Autocapitalize, and Spellcheck disabled',
        example: <SearchFieldDisabledAutoFormatting />,
        source: SearchFieldDisabledAutoFormattingSrc,
      },
      {
        title: 'Search Field that Displays as Block Style to Fill Container',
        example: <SearchFieldBlock />,
        source: SearchFieldBlockSrc,
      },
      {
        title: 'Search Field with Auto-search Turned Off',
        example: <SearchFieldDisableAutoSearch />,
        source: SearchFieldDisableAutoSearchSrc,
      },
      {
        title: 'Search Field with onChange Event Filtering Numbers',
        example: <SearchFieldFilterNumeric />,
        source: SearchFieldFilterNumericSrc,
      },
      {
        title: 'Search Field with Focus',
        example: <SearchFieldFocus />,
        source: SearchFieldFocusSrc,
      },
    ]}
    propsTables={[
      {
        componentName: 'Search Field',
        componentSrc: SearchFieldSrc,
        componentProps: SearchFieldPropsTable,
      },
    ]}
  />
);

export default DocPage;
