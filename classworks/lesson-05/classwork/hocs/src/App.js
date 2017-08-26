import React, { Component } from 'react';
import UserApp from './components/UserApp';
import WidthHOC from './components/HOCS/widthHOC';
import $ from 'jquery';

@WidthHOC
class App extends Component {
  componentDidMount(){
    // console.log(this.app);
    const sizeW = this.app.offsetWidth;
    console.log(sizeW);
    // $(this.app).datepicker();
    $(this.app).dialog();


  }
  render() {
    return (
      <div ref={ (app) => { this.app = app;} } >
        <UserApp />
      </div>
    );
  }
}

export default App;
