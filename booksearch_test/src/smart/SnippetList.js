import Snippet from "../dumb/Snippet"
import { useState } from 'react'
import ModalWrapped from "./ModalWrapped"

function SnippetList(props) {
  const [isModal, setModal] = useState(false)

  const onClick = (book) => {
    setModal(true)
    props.setBookModal(book)
  }

  const onClose = () => {
    setModal(false)
  }

  const snippets = props.books.map((book) => {
    return <Snippet key={book.key} book={book} onClick={onClick}></Snippet>
  })
  return (
    <div>{snippets}
      <ModalWrapped visible={isModal} onClose={onClose} />
    </div>

  )
}

export default SnippetList;