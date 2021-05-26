import axios from "axios";
import BOOK_INFO from "../actions/bookInfo";

function bookInfo(value) {
  return {
    type: BOOK_INFO,
    bookModal: value
  }
}

function bookInfoAsync(query) {
  return (dispatch) => {
    axios.get("https://openlibrary.org/api/books?bibkeys=ISBN:" + query + "&format=json&jscmd=data").then(res => {
      res.data["ISBN:"+query].publishers = res.data["ISBN:"+query].publishers.map((pub, i, arr) => {
        return arr.length-1 === i ? pub.name : pub.name + ", "
      })
      res.data["ISBN:"+query].authors = res.data["ISBN:"+query].authors.map((author, i, arr) => {
        return arr.length-1 === i ? author.name : author.name + ", "
      })
      dispatch(bookInfo(res.data["ISBN:"+query]))
    })
  }
}

export default bookInfoAsync;