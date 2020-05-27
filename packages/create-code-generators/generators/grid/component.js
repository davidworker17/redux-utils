import React, { Component } from "react";
import PropTypes from "prop-types";

import { createGridConfig } from './createGridConfig';

import Grid from "******/grid";

class Grid extends Component {

  constructor(props) {
    super();

    this.gridConfig = createGridConfig(props);
  }

  componentDidMount() {
    this.props.refreshData();
  }

  getData = config => {
    const { mainTabsParams: { warehouse, assignedUser } } = this.props;
    const { filtering = {} } = config;

    this.props.{{requestName}}({
      ...config,
      filtering: {
        ...filtering,
        ...(warehouse !== "" && { "fulfillFrom.label": warehouse }),
        ...(assignedUser !== "" && { "assignedUser.label": assignedUser }),
      }
    });
  }

  render() {
    const { getData, refreshToken } = this.props;

    return (
      <Grid
        refreshToken={refreshToken}
        getData={this.getData}
        data={this.gridConfig}
      />
    );
  }
}

Grid.propTypes = {
  data: PropTypes.array.isRequired,
  {{requestName}}: PropTypes.func.isRequired,
  refreshData: PropTypes.func.isRequired,
  isLoading: PropTypes.bool,
  totalSize: PropTypes.number,
  refreshToken: PropTypes.number,
  refreshData: PropTypes.func.isRequired,
  history: PropTypes.object.isRequired,
}

export default Grid;
