import { bindActionCreators } from 'redux'
import UPDATE_SEARCH_RESULTS from '../actions/update_results';

function update_results(dispatch) {
  return {
      changeValue_1: bindActionCreators(UPDATE_SEARCH_RESULTS, dispatch)
  };
};

export default update_results;