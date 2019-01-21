import React, {Component} from 'react';
import {
    Nav,
    NavItem,
    NavLink
    } from 'reactstrap';


class Navigation extends Component {

  render(){
    return (
        <Nav>
          <NavItem>
            <NavLink href="/home">Home</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="/login">Login</NavLink>
          </NavItem>
        </Nav>
    );
  }
  
}

export default Navigation;
