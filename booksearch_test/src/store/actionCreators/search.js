import axios from "axios";
import SEARCH from "../actions/search";

function search(value) {
  return {
    type: SEARCH,
    books: value
  }
}

function searchAsync(query) {
  return (dispatch) => {
    setTimeout(() => {
      axios.get("http://openlibrary.org/search.json?title=" + query).then(res => {
        dispatch(search(res.data.docs))
      })
    }, 1000);
  }
}

export default searchAsync;