import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import bookInfoAsync from "../store/actionCreators/bookInfo";
import SnippetList from "./SnippetList";

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    setBookModal: bindActionCreators(bookInfoAsync, dispatch)
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(SnippetList);