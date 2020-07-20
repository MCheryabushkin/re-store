import React from 'react';
import './shop-header.css';
import { Link } from 'react-router-dom';

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header row">
      <Link to="/">
        <a className="logo text-dark" href="#">ReStore</a>
      </Link>
      <Link to="/cart">
        <a className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {numItems} items (${total})
        </a>
      </Link>
    </header>
  );
};

export default ShopHeader;