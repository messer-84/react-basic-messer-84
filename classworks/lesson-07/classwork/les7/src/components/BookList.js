import React, { Component } from 'react';
import { connect } from 'react-redux';

import selectBook from '../actions';

class BookList extends Component {
  render() {
    const { books, selectBook } = this.props;
    return (
      <div className="book-list">
        {books.map(book =>
          <li key={book.name} onClick={()=>{
            selectBook(book);

          }}>
            {book.name}
          </li>,
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log('book list', state);
  return {
    books: state.books,
  };
};

const mapDispatchToProps = dispatch => {
    return {
      selectBook(book){
        dispatch(selectBook(book))
      }
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(BookList);
