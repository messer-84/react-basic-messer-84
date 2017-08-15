import React, { Component } from 'react';
import logo from './logo.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <main className="container">
         <div className="search-bar navbar">
           <input type="text" placeholder="Search" />
         </div>

         <div className="row">
           <div className="video-detail col-md-8">
             <div className="embed-responsive embed-responsive-16by9">
               <iframe title="random" src="https://www.youtube.com/embed/-Qwxw11-"></iframe>
             </div>

             <div className="details">
               <div>TITLE</div>
               <div>DESCRIPTION</div>
             </div>
           </div>
           <ul className="col-md-4 list-group">
             <li className="list-group-item">
               <div className="video-list media">
                 <div className="video-list media">
                   <div className="media-left">
                     <img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                   </div>
                 </div>
                 <div className="media-body">
                   <div className="media-heading">SOME VIDEO</div>
                 </div>
               </div>
             </li>
             <li className="list-group-item">
               <div className="video-list media">
                 <div className="video-list media">
                   <div className="media-left">
                     <img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                   </div>
                 </div>
                 <div className="media-body">
                   <div className="media-heading">SOME VIDEO</div>
                 </div>
               </div>
             </li>
             <li className="list-group-item">
               <div className="video-list media">
                 <div className="video-list media">
                   <div className="media-left">
                     <img className="media-object" src="https://randomuser.me/api/portraits/thumb/men/7.jpg" />
                   </div>
                 </div>
                 <div className="media-body">
                   <div className="media-heading">SOME VIDEO</div>
                 </div>
               </div>
             </li>
           </ul>
         </div>
       </main>

    );
  }
}

export default App;
