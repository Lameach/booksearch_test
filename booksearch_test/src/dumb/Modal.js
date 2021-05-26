import "./Modal.css"

function Modal(props) {
  if (!props.visible) {
    return null;
  } else {
    return (
      <div className="modal" onClick={() => props.onClose()}>
        <div className="modal__info">
          <img className="modal__info__cover" src={props.bookModal.cover.medium} />
          <div className="modal__info__text">
            <p id="modal-title">{props.bookModal.title}</p>
            <p id="modal-author">{props.bookModal.authors}</p>
            <p id="modal-pubdate">Published: {props.bookModal.publish_date}</p>
            <p id="modal-publisher">{props.bookModal.publishers}</p>
            <p id="modal-isbn">ISBN: {props.bookModal.identifiers.isbn_10}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default Modal;