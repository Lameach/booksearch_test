import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import searchAsync from "../store/actionCreators/search";
import SearchField from "./SearchField";

const mapDispatchToProps = (dispatch) => {
  return {
    searchByQuery: bindActionCreators(searchAsync, dispatch)
  }
}

const SearchFieldWrapped = connect(null, mapDispatchToProps)(SearchField)

export default SearchFieldWrapped;