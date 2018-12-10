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
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink href="#">Another Link</NavLink>
          </NavItem>
          <NavItem>
            <NavLink disabled href="#">Disabled Link</NavLink>
          </NavItem>
        </Nav>
    );
  }
  
}

export default Navigation;
