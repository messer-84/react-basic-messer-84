import React, { Component} from 'react';

const WidthHOC = (WrappedComponent) => {
  return class WidthHOC extends Component {
    render(){
      return <main style={{ width:'600px' }}>
        <WrappedComponent { ... this.props}/>
      </main>
    }
  }
};

export default WidthHOC;