import UPDATE_SEARCH_RESULTS from "../actions/update_results"

function update_results(value){
  return {
    type: UPDATE_SEARCH_RESULTS,
    list: value
  };
}

export default update_results;