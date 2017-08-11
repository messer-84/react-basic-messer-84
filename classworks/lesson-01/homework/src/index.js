import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

const mountNode = document.querySelector('.app');


const Hello = props => {
  return (
      <div className="panel panel-info">
        <div className="panel-heading">
          <h3 className="panel-title">USER FULL NAME !</h3>
        </div>
        <div className="panel-body">
          <div className="row">
            <div>
              <div className="col-md-3 col-lg-3 " align="center">
                <img src="http://psdexport.com/storage/avatars/default.png" className="pull-left" />
              </div>
              <div className=" col-md-9 col-lg-9">
                <table className="table table-user-information">
                  <tbody>
                    <tr>
                      <td>Дата рождения</td>
                      <td>24.10.2016</td>
                    </tr>
                    <tr>
                      <td>Пол</td>
                      <td>MALE</td>
                    </tr>
                    <tr>
                      <td>Адрес</td>
                      <td>GOOGLE STREET</td>
                    </tr>
                    <tr>
                      <td>Email</td>
                      <td><a href='#'>EMAIL</a></td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>)
};



ReactDOM.render(<Hello />, mountNode);



