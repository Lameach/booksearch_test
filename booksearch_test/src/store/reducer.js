import SEARCH from './actions/search'

function reducer (state, action) {
  switch (action.type) {
    case SEARCH: return {
      books: action.books
    }
    default: return state;
  }
}

export default reducer;