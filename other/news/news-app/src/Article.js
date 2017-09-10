import React, { Component } from 'react';
import CommentList from './CommentList';

export default class Article extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isOpen: true,
      commentsIsOpen: false,
    };
    this.toggleOpen = this.toggleOpen.bind(this);
    this.toggleCommentsOpen = this.toggleCommentsOpen.bind(this);
  }
  getBody() {
    if (!this.state.isOpen) {
      return null;
    }
    const { article } = this.props;
    return (
      <section>
        {article.text}
      </section>
    );
  }
  getComments() {
    if (!this.state.commentsIsOpen) {
      return null;
    }
    const { article } = this.props;
    return (
      <section>
        <CommentList comments={article.comments}/>
      </section>
    );
  }
  toggleOpen() {
    this.setState({
      isOpen: !this.state.isOpen,
    });
  }
  toggleCommentsOpen() {
    this.setState({
      commentsIsOpen: !this.state.commentsIsOpen,
    });
  }
  render() {
    const { article } = this.props;
    const { isOpen, commentsIsOpen } = this.state;
    return (
      <div>
        <h3>
          {article.title}
        </h3>
        <button onClick={this.toggleOpen}>
          {isOpen ? 'close' : 'open'}
        </button>
        {this.getBody()}
        <button onClick={this.toggleCommentsOpen}>
          {commentsIsOpen ? 'close comments' : 'open comments'}
        </button>
        {this.getComments()}
      </div>
    );
  }
}
