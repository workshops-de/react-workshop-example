import React from 'react';

const BookListItem = ({book}) => {
  return (
    <li>{book.title}</li>
  );
}

BookListItem.propTypes = {
  book: React.PropTypes.object
};

export default BookListItem;
