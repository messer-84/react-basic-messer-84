import React, { Component} from 'react';

const LoaderHOC = (prop, WrappedComponent) => {
  return class LoaderHOC extends Component {
    render(){
      return !this.props[prop].length ? <div>Loading ...</div> : <WrappedComponent { ... this.props}/>
    }
  }
};

export default LoaderHOC;