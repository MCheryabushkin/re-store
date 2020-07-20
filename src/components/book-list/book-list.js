import React from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions";
import {withBookstoreService} from "../hoc";
import { compose } from "../../utills";

import "./book-list.css";

class BookList extends React.Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
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

const mapStateToProps = ({ books }) => {
  return { books };
};
const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(), 
  connect(mapStateToProps, mapDispatchToProps)
)(BookList);