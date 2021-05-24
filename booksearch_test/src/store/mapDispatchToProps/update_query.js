import { bindActionCreators } from 'redux'
import UPDATE_QUERY from '../actions/update_results';

function update_query(dispatch) {
  return {
      changeValue_1: bindActionCreators(UPDATEQUERY, dispatch)
  };
};

export default update_query;