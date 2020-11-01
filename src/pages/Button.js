import React from 'react';
import ReactDOM from 'react-dom';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js';
import '../node_modules/popper.js/dist/popper';
class Button extends React.Component {
  render() {
    return (
     <div className=" text-center">
        <button type="button" className="btn btn-primary" data-toggle="modal" data-target={this.props.dataTarget}>
            {this.props.Name}
        </button>
    </div>
    )
  }
}
export default Button;
