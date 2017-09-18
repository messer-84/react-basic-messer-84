import React from 'react';
import Article from '../components/Article';

export default OriginalComponent =>
  class Accordion extends React.Component {
    state = {
      openArticleId: null,
      isOpen: false,
    };

    toggleOpenArticle = (openArticleId, isOpen) => () => {
      if (isOpen) {
        this.setState({
          openArticleId: openArticleId,
          isOpen: false,
        });
      } else {
        this.setState({
          openArticleId: openArticleId,
          isOpen: true,
        });
      }
    };

    render() {
      return (
        <Component
          {...this.props}
          {...this.state}
          isOpen={this.state.isOpen}
          openArticleId={this.state.openArticleId}
          toggleOpenArticle={this.toggleOpenArticle}
        />
      );
    }
  };
