const initialState = {
  books: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOK_REQUESTED":
      return initialState;

    case "BOOKS_ERROR":
      return {
        books: [],
        loading: false,
        error: action.payload
      }
    case "BOOKS_LOADED":
      return {
        books: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;
