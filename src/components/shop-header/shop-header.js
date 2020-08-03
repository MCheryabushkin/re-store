import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';
import { connect } from "react-redux";

const ShopHeader = ({ countTotal, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark" >ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {countTotal} items (${total})
        </div>
      </Link>
    </header>
  );
};

const mapStateToProps = ({ shoppingCart: { cartItems, orderTotal, countTotal }}) => {
  return { 
    items: cartItems, 
    total: orderTotal,
    countTotal
  }
};

export default connect(mapStateToProps)(ShopHeader);