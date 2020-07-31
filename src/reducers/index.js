const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  orderTotal: 220
};

const updateCartItems = (cartItems, item, idx) => {
  if (item.count === 0) {
    return [
      ...cartItems.slice(0, idx),
      ...cartItems.slice(idx + 1),
    ]
  }

  if (idx === -1) {
    return [
      ...cartItems,
      item
    ]
  }

  return [
    ...cartItems.slice(0, idx),
    item,
    ...cartItems.slice(idx + 1),
  ]
}
const updateCartItem = (book, item = {}, quantity) => {
  const { 
    id = book.id, 
    title = book.title, 
    count = 0, 
    total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity*book.price
  }
}

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;
  const book = books.find(({id}) => id === bookId);
  const itemIdx = cartItems.findIndex(({id}) => id === bookId);
  const item = cartItems.find(({id}) => id === bookId);

  let newCartItem = updateCartItem(book, item, quantity);    

  return {
    ...state,
    cartItems: updateCartItems(state.cartItems, newCartItem, itemIdx)
  }
}

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
    case "ADD_BOOK_TO_CART": 
      return updateOrder(state, action.payload, 1);
    case "REMOVE_BOOK_FROM_CART": 
      return updateOrder(state, action.payload, -1);
    case "DELETE_BOOKS_FROM_CART":
      const item = state.cartItems.find(({id}) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  }
};

export default reducer;
