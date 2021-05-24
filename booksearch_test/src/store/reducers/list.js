import UPDATE_SEARCH_RESULTS from "../actions/update_results"

function list(state, action){
  switch(action.type){
    case UPDATE_SEARCH_RESULTS: return action.list
    default: return state;
  }
}

export default list;