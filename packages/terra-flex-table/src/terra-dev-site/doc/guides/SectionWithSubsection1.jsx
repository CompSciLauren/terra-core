import React from 'react';
import Table, {
  Row,
  Cell,
  Section,
  Subsection,
  HeaderCell,
  Utils,
} from 'terra-flex-table/lib/index'; // eslint-disable-line import/no-extraneous-dependencies, import/no-unresolved, import/extensions

import Placeholder from 'terra-doc-template/lib/Placeholder';
import mockData from './mock-data/mock-section-sub';

const createCell = cell => (
  <Cell key={cell.key}>
    <Placeholder title={cell.title} style={{ height: '50px', padding: '0' }} />
  </Cell>
);

const createCellsForRow = cells => cells.map(cell => createCell(cell));

const createRow = itemData => (
  <Row key={itemData.key}>
    {createCellsForRow(itemData.cells)}
  </Row>
);

const createSubsection = subsectionData => (
  <Subsection
    key={subsectionData.key}
    title={subsectionData.title}
    colSpan={3}
  >
    {subsectionData.childItems.map(childItem => createRow(childItem))}
  </Subsection>
);

class SectionWithSubsection1 extends React.Component {
  constructor(props) {
    super(props);
    this.createSection = this.createSection.bind(this);
    this.createSections = this.createSections.bind(this);
    this.handleSectionSelection = this.handleSectionSelection.bind(this);
    this.state = { collapsedKeys: [] };
  }

  handleSectionSelection(event, metaData) {
    event.preventDefault();
    this.setState(state => ({ collapsedKeys: Utils.updatedMultiSelectedKeys(state.collapsedKeys, metaData.key) }));
  }

  createSection(sectionData) {
    return (
      <Section
        key={sectionData.key}
        title={sectionData.title}
        isCollapsed={this.state.collapsedKeys.indexOf(sectionData.key) >= 0}
        isCollapsible
        metaData={{ key: sectionData.key }}
        onSelect={this.handleSectionSelection}
        colSpan={3}
      >
        {sectionData.childItems.map(childItem => createSubsection(childItem))}
      </Section>
    );
  }

  createSections(data) {
    return data.map(section => this.createSection(section));
  }

  render() {
    return (
      <Table
        style={{ height: '200px' }}
        fill
        paddingStyle="standard"
        headerCells={[
          <HeaderCell key="cell-1">Column 0Column 0Column 0Column 0Column 0</HeaderCell>,
          <HeaderCell key="cell-2">Column 1Column 1Column 1Column 1Column 1</HeaderCell>,
          <HeaderCell key="cell-3">Column 2Column 2Column 2Column 2Column 2</HeaderCell>,
        ]}
      >
        {this.createSections(mockData)}
      </Table>
    );
  }
}

export default SectionWithSubsection1;
