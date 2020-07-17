import React from "react";
import { Link } from "react-router-dom";

import BookList from "../book-list";

const HomePage = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <Link to="/cart">Cart</Link>

      <BookList />
    </div>
  );
};

export default HomePage;
