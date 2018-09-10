import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as action from '../modules/auth/actions';
import {
  Navbar,
  Nav,
  NavItem,
  NavLink,
} from 'reactstrap';

class HomePage extends Component {
  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink onClick={this.props.logout}>Log out</NavLink>
            </NavItem>
          </Nav>
        </Navbar>
        Home
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    logout: () => {
      dispatch(action.signout());
    },
  }
}

export default connect(null, mapDispatchToProps)(HomePage);
