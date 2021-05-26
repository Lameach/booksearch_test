import "./SearchField.css"

function SearchField(props){
  return(
    <form id="search" action="" method="get">
      <input id="search__field" name="search" placeholder="Начните набирать название книги..." type="search" autoComplete="off" onChange={(e) => {props.searchByQuery(e.target.value.replace(/ /g, "+"))}}/>
      <button id="search__button" type="submit" onClick={(e) => {e.preventDefault(); props.searchByQuery(e.target.value.replace(/ /g, "+"))}}>Искать</button>
    </form>
  );
}

export default SearchField;