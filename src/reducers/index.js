const initialState = {
  books: [],
  loading: true,
  error: null
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return initialState;

    case "FETCH_BOOKS_ERROR":
      return {
        books: [],
        loading: false,
        error: action.payload
      }
    case "FETCH_BOOKS_SUCCESS":
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
