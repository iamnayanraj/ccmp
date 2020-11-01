import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/popper.js/dist/popper';
import RegForm from './RegForm';
import CustLogin from './CustLogin';
import EmpLogin from './EmpLogin';
import './Style.css';
class HomePage extends React.Component {
  render() {
    return (
      <div>
        <div className="heading">
          <h1>Dispur Wireless</h1>
          <p>Connection Everyone</p>
        </div>
        <div className ="HomeBtn">
            <CustLogin />
            <RegForm />
            <EmpLogin/>
        </div>
    </div>
    )
  }
}
export default HomePage;
