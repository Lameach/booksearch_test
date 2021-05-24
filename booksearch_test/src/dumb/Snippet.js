import "./Snippet.css"

function Snippet(book){
  return(
    <div class="snippet">
      <img src={book.cover_url} class="snippet__cover"/>
      <p class="snippet__text" id="author">{book.author}</p>
      <p class="snippet__text" id="title">{book.title}</p>
    </div>
  );
}

export default Snippet;