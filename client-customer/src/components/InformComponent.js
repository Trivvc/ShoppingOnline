import React, { Component } from "react";
import { Link } from "react-router-dom";
import MyContext from "../contexts/MyContext";

class Inform extends Component {
  static contextType = MyContext;
  render() {
    return (
      <div className="border-bottom navbar--1">
        <div className="float-left">
        {this.context.token === '' ?
          <div className="active__cus">
            <Link to='/login'>Login</Link> 
            <Link to='/signup'>Sign-up</Link> 
           <Link to='/active'>Active</Link></div>
          :
          <div>Hello <b>{this.context.customer.name}</b> | <Link to='/home' onClick={() => this.lnkLogoutClick()}>Logout</Link> | <Link to='./myprofile'>My profile</Link> | <Link to='/myorders'>My orders</Link></div>
        }
      </div>
        <div className="float-right myCart--right">
        <Link to='/mycart'>My cart<p>have <b>{this.context.mycart.length}</b> items</p></Link> 
        </div>
      </div>
    );
  }
// event-handlers
  lnkLogoutClick() {
    this.context.setToken('');
    this.context.setCustomer(null);
    this.context.setMycart([]);
  }
}
export default Inform;
