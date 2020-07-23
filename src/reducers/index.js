const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [{
    id: 1, 
    name: "Name 1", 
    count: 2, 
    total: 80
  }, {
    id: 2, 
    name: "Name 2", 
    count: 1, 
    total: 30
  }],
  orderTotal: 220
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null
      };

    case "FETCH_BOOKS_ERROR":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload
      }
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null
      };
    default:
      return state;
  }
};

export default reducer;
