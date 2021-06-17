import React from 'react';
import cx from 'classnames';
import { connect } from 'react-redux';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { VISIBILITY_FILTERS } from '../constants';
import { setFilter } from '../redux/actions';

export const VisibilityFilters = ({ activeFilter, setFilter }) => (
  <Paper square>
    <Tabs indicatorColor="primary" textColor="primary">
      {Object.keys(VISIBILITY_FILTERS).map((filterKey) => {
        const currentFilter = VISIBILITY_FILTERS[filterKey];
        return (
          <Tab
            label={filterKey}
            key={`visibility-filter-${currentFilter}`}
            onClick={() => {
              setFilter(currentFilter);
            }}
          />
        );
      })}
    </Tabs>
  </Paper>
);

const mapStateToProps = (state) => ({ activeFilter: state.visibilityFilter });
// export default VisibilityFilters;
export default connect(mapStateToProps, { setFilter })(VisibilityFilters);
