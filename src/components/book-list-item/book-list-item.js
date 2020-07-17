import React, { Fragment } from "react";

const BookListItem = ({ book }) => {
  return (
    <Fragment>
      <span>{book.title}</span>
      <span>{book.author}</span>
    </Fragment>
  );
};

export default BookListItem;
