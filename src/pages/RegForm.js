import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/popper.js/dist/popper';
import Button from './Button.js';
import './Style.css';
class RegForm extends React.Component {
  render() {
    return (
     <div className="Btns">
        <Button dataTarget="#RegModel" Name="New Customer" />
        <div class="modal fade" id="RegModel">
        <div class="modal-dialog modal-dialog-centered">
        <div class="modal-content">
        <div class="modal-header">
          <h4 class="modal-title">Sign Up</h4>
          <button type="button" class="close" data-dismiss="modal">&times;</button>
        </div>
        <div class="modal-body">
          <form action="index.php" method="post">
            <div class="form-group">
               <label for="Name">Name:</label>
               <input type="text" class="form-control" name="uid"/>
           </div>
           <div class="form-group">
              <label for="Address">Address:</label>
              <input type="text" class="form-control" name="password"/>
          </div>
          <div class="form-group">
              <label for="Email">Email Address:</label>
              <input type="email" class="form-control" name="password"/>
          </div>
          <div class="form-group">
              <label for="Contact">Contact No:</label>
              <input type="text" class="form-control" name="password"/>
          </div>
          <div class="form-group form-check">
             <label class="form-check-label">
             <input class="form-check-input" type="checkbox"/> Remember me
           </label>
          </div>
          <button type="submit" class="btn btn-primary" name="submit" >Submit</button>
        </form> 
      </div>
      </div>
    </div>
  </div>
</div>
    )
  }
}
export default RegForm;
