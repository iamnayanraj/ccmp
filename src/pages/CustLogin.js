import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/popper.js/dist/popper';
import Button from './Button.js';
import './Style.css';
class CustLogin extends React.Component {
  render() {
    return (
     <div className="Btns">
        <Button dataTarget="#CustLogin" Name="Existing Customer" />
        <div class="modal fade" id="CustLogin">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Login</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form action="index.php" method="post">
            <div class="form-group">
               <label for="UserId">User Id</label>
               <input type="text" class="form-control" name="uid"/>
           </div>
           <div class="form-group">
              <label for="Password">Password</label>
              <input type="password" class="form-control" name="password"/>
          </div>
          <div class="form-group form-check">
             <label class="form-check-label">
             <input class="form-check-input" type="checkbox"/> Remember me
           </label>
          </div>
          <button type="submit" class="btn btn-primary" name="submit" >Login</button>
        </form> 
      </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
export default CustLogin;
