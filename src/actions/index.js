const booksLoaded = newBooks => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks
  };
};

const bookRequested = () => {
  return {
    type: "FETCH_BOOKS_REQUEST"
  }
}

const booksError = (error) => {
  return {
    type: "FETCH_BOOKS_ERROR",
    payload: error
  }
}

const addBookToCart = (bookId) => {
  return {
    type: "ADD_BOOK_TO_CART",
    payload: bookId
  }
}
const removeBookFromCart = (bookId) => {
  return {
    type: "REMOVE_BOOK_FROM_CART",
    payload: bookId
  }
}
const deleteBooksFromCart = (bookId) => {
  return {
    type: "DELETE_BOOKS_FROM_CART",
    payload: bookId
  }
}

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(bookRequested());
  
    bookstoreService.getBooks()
      .then(data => dispatch(booksLoaded(data)))
      .catch(err => dispatch(booksError(err))); 
}

export { fetchBooks, addBookToCart, removeBookFromCart, deleteBooksFromCart };
