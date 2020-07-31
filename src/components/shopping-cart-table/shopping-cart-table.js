import React from 'react';
import './shopping-cart-table.css';
import { connect } from "react-redux";
import { addBookToCart, removeBookFromCart, deleteBooksFromCart } from "../../actions";

const ShoppingCartTable = ({ items, total, onIncrease, onDecrease, onDelete }) => {
  const renderRow = (item, iDx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{iDx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button 
            onClick={() => onIncrease(id)}
            className="btn btn-outline-success btn-sm float-right">
            <i className="fa fa-plus-circle" />
          </button>
          <button 
            onClick={() => onDecrease(id)}
            className="btn btn-outline-warning btn-sm float-right">
            <i className="fa fa-minus-circle" />
          </button>
          <button 
            onClick={() => onDelete(id)}
            className="btn btn-outline-danger btn-sm float-right">
            <i className="fa fa-trash-o" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>
          {
            items.map((item, iDx) => renderRow(item, iDx))
          }
        </tbody>
      </table>

      <div className="total">
        Total: ${total}
      </div>
    </div>
  );
};


const mapStateToProps = ({ cartItems, orderTotal }) => {
  return { 
    items: cartItems, 
    total: orderTotal
  }
};
const mapDispatchToProps = (dispatch) => {
  return {
    onDecrease: (id) => dispatch(removeBookFromCart(id)),
    onIncrease: (id) => dispatch(addBookToCart(id)),
    onDelete: (id) => dispatch(deleteBooksFromCart(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);