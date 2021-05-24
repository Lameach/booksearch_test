import UPDATE_QUERY from "../actions/update_query"

function update_query(value){
  return {
    type: UPDATE_QUERY,
    query: value
  };
}

export default update_query;