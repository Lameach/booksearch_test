import { connect } from "react-redux";
import SnippetList from "./SnippetList";

const mapStateToProps = (state) => {
  return {
    books: state.books
  };
}

export default connect(mapStateToProps, null)(SnippetList);