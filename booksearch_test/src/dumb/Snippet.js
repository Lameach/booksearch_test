import "./Snippet.css"

function Snippet(props) {
  return (
    <div className="snippet" onClick={() => props.onClick(props.book.isbn[0])}>
      <img src={"http://covers.openlibrary.org/b/id/" + props.book.cover_i + "-S.jpg"} className="snippet__cover" alt={"cover of " + props.book.title} />
      <div className="snippet__text">
        <p className="snippet__text__string" id="author">{props.book.author_name}</p>
        <p className="snippet__text__string" id="title">{props.book.title}</p>
      </div>
    </div>
  );
}

export default Snippet;