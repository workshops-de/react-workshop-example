import React from 'react';

import BookListItem from './BookListItem';

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: []
    };
  }

  componentDidMount() {
    fetch('http://localhost:4730/books')
    .then(response => response.json())
    .then((books) => {
      this.setState({
        books: books
      })
    })
    .catch(console.error.bind(console));
  }

  render() {
    return (
      <ul>
        {this.state.books.map((book, index) => {
          return <BookListItem key={index} book={book} />
        })}
      </ul>
    );
  }
}

export default BookList;
