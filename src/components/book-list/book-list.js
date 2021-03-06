import React from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { fetchBooks, addBookToCart } from "../../actions";
import {withBookstoreService} from "../hoc";
import { compose } from "../../utills";
import Spinner from "../spinner";
import ErrorIndicator from "../error-indicator";

import "./book-list.css";

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map(book => (
        <li key={book.id}>
          <BookListItem book={book} onAddedToCart={onAddedToCart} />
        </li>
      ))}
    </ul>
  );
}

class BookListContainer extends React.Component {
  componentDidMount() {
       this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props;

    if (loading)
      return <Spinner />
      
    if (error)
      return <ErrorIndicator />

    return <BookList books={books} onAddedToCart={onAddedToCart} />;
  }
}

const mapStateToProps = ({bookList: { books, loading, error }}) => {
  return { books, loading, error };
};
const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedToCart: (id) => dispatch(addBookToCart(id))
  }
};

export default compose(
  withBookstoreService(), 
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer);