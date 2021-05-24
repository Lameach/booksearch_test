import "./SearchField.css"

function SearchField(){
  return(
    <form id="search" action="" method="get">
      <input id="search__field" name="search" placeholder="Начните набирать название книги..." type="search" autoComplete="off"/>
      <button id="search__button" type="submit">Искать</button>
    </form>
  );
}

export default SearchField;