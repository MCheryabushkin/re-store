import React from "react";
import BookListItem from "../book-list-item";
import { connect } from "react-redux";
import { booksLoaded } from "../../actions";
import withBookstoreService from "../hoc";

class BookList extends React.Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const books = bookstoreService.getBooks();

    this.props.booksLoaded(books);
  }

  render() {
    const { books } = this.props;
    return (
      <ul>
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
const mapDispatchToProps = () => ({ booksLoaded });

export default withBookstoreService()(
  connect(
    mapStateToProps,
    mapDispatchToProps
  )(BookList)
);
