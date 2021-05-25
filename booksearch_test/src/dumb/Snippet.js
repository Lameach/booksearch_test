import "./Snippet.css"

function Snippet(props) {
  console.log(props.book.cover_i)
  return (
    <div className="snippet">
      <img src={"http://covers.openlibrary.org/b/id/" + props.book.cover_i + "-S.jpg"} className="snippet__cover" />
      <div className="snippet__text">
        <p className="snippet__text__string" id="author">{props.book.author_name}</p>
        <p className="snippet__text__string" id="title">{props.book.title}</p>
      </div>
    </div>
  );
}

export default Snippet;