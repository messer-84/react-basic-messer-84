import React, { Component } from 'react';
import Article from './Article';

import accordion from '../decorators/accordion';

class ArticleList extends Component {
  render() {
    const { articles, openItemId, toggleOpenItem, isOpen, active } = this.props;
    const articleElements = articles.map(article => {
      return (
        <li key={article.id}>
          <Article
            article={article}
              isOpen={openItemId === openItemId}
            toggleOpen={toggleOpenItem(article.id)}
          />
        </li>
      );
    });

    return (
      <ul>
        {articleElements}
      </ul>
    );
  }
}

export default accordion(ArticleList);
