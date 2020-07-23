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

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(bookRequested());
  
    bookstoreService.getBooks()
      .then(data => dispatch(booksLoaded(data)))
      .catch(err => dispatch(booksError(err))); 
}

export { fetchBooks };
