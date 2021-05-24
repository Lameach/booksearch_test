import UPDATE_QUERY from "../actions/update_results"

function query(state, action){
  switch(action.type){
    case UPDATE_QUERY: return action.query
    default: return state;
  }
}

export default query;