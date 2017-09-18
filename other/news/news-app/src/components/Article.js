import React, { Component } from 'react';
import CommentList from './CommentList';

class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      // isOpen: true,
      commentsIsOpen: false,
    };
  }
  getBody() {
    const { article, isOpen } = this.props;

    if (!isOpen) {
      return null;
    }
    return (
      <section>
        {article.text}
        <CommentList comments={article.comments} />
      </section>
    );
  }
  render() {
    const { article, isOpen, toggleOpen } = this.props;
    // console.log(isOpen);

    return (
      <div>
        <h3>
          {article.title}
        </h3>
        <button onClick={toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
      </div>
    );
  }
}

export default Article;
