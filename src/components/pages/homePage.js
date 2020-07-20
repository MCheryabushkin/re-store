import React from "react";
import { Link } from "react-router-dom";

import BookList from "../book-list";
import ShoppingCartTable from "../shopping-cart-table";

const HomePage = () => {
  return (
    <div>
      <BookList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
