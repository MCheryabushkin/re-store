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
    const { bookList: { books }, shoppingCart: { cartItems } } = state;
    const book = books.find(({id}) => id === bookId);
    const itemIdx = cartItems.findIndex(({id}) => id === bookId);
    const item = cartItems.find(({id}) => id === bookId);
  
    let newCartItem = updateCartItem(book, item, quantity);
    const newCartItems = updateCartItems(state.shoppingCart.cartItems, newCartItem, itemIdx);
    const orderTotal = newCartItems.reduce((accum, el) => (accum + el.total), 0);
    const countTotal = newCartItems.reduce((accum, el) => (accum + el.count), 0);
  
    return {
      orderTotal,
      countTotal,
      cartItems: newCartItems
    }
  }
  
  const updateShoppingCart = (state, action) => {
    if (state === undefined) {
      return {
        cartItems: [],
        orderTotal: 0,
        countTotal: 0
      }
    }
  
    switch (action.type) {
      case "ADD_BOOK_TO_CART": 
        return updateOrder(state, action.payload, 1);
      case "REMOVE_BOOK_FROM_CART": 
        return updateOrder(state, action.payload, -1);
      case "DELETE_BOOKS_FROM_CART":
        const item = state.shoppingCart.cartItems.find(({id}) => id === action.payload);
        return updateOrder(state, action.payload, -item.count);
      default:
        return state.shoppingCart;
    }
  }

  export default updateShoppingCart;