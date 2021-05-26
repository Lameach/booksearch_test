import BOOK_INFO from './actions/bookInfo';
import SEARCH from './actions/search'

function reducer (state, action) {
  switch (action.type) {
    case SEARCH: return {
      books: action.books,
      bookModal: state.bookModal
    }
    case BOOK_INFO: return {
      books: state.books,
      bookModal: action.bookModal
    }
    default: return state;
  }
}

export default reducer;