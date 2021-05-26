import { connect } from "react-redux";
import Modal from "../dumb/Modal";

const mapStateToProps = (state) => {
  return {
    bookModal: state.bookModal
  };
}

export default connect(mapStateToProps, null)(Modal);