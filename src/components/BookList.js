import React from 'react';

import BookListItem from './BookListItem';

class BookList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      books: [
        {title: 'A'},
        {title: 'B'},
        {title: 'C'}
      ]
    };
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
