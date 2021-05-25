import Snippet from "../dumb/Snippet"

function SnippetList(props){
  const snippets = props.books.map((book) => {
    return <Snippet key={book.key} book={book}></Snippet>
  })
  return(
    <div>{snippets}</div>
  )
}

export default SnippetList;