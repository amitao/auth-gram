import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
// import Logo from '../images/';

// navbar using bootstrap4

class Navbar extends Component {
  render () {
    return (
      <nav className="navbar navbar-expand">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link to="/" className="navbar-brand">
              <img src="" alt="Home" />
            </Link>
          </div>
        
        <ul className="nav navbar-nav navbar-right">
          <li>
            <Link to="/signup">Sign Up</Link>
          </li>
          <li>
            <Link to="/signin">Sign in</Link>
          </li>
        </ul>
        </div>
      </nav>
    )
  }
}

const mapStatetoProps = state => ({
  currentUser: state.currentUser
});

export default connect(mapStatetoProps, null)(Navbar);