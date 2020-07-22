import React from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { booksLoaded, bookRequested } from "../../actions";
import {withBookstoreService} from "../hoc";
import { compose } from "../../utills";
import Spinner from "../spinner";

import "./book-list.css";

class BookList extends React.Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded, bookRequested } = this.props;
    bookRequested();
    
    bookstoreService.getBooks()
      .then(data => booksLoaded(data));    
  }

  render() {
    const { books, loading } = this.props;

    if (loading) {
      return <Spinner />
    }
    return (
      <ul className="book-list">
        {books.map(book => (
          <li key={book.id}>
            <BookListItem book={book} />
          </li>
        ))}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};
const mapDispatchToProps = { booksLoaded, bookRequested };

export default compose(
  withBookstoreService(), 
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);