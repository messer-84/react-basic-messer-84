import React, { Component } from 'react';
import {connect} from 'react-redux';

class BookActive extends Component {
  render() {
    const {selectedBook} = this.props;
    if(!selectedBook){
      return <div>Выберите книгу</div>
    }
    return (
      <div className="book-active">
        <div>Название книги: {selectedBook.name}</div>
        <div>Количество страниц: {selectedBook.pages}</div>

      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  console.log('book active', state);

  return {
    selectedBook: state.selectedbook
  };
};

export default connect(mapStateToProps)(BookActive);
