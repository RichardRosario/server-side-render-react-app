import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header =  ({ auth }) => {
  console.log('My state is', auth);

  const authButton = auth ? (
    <a href="/api/logout">Log Out</a>
  ) : (
    <a href="/api/auth/google">Login</a>
  );

  return (
    <div>
      <Link to="/">ReactJS SS Render</Link>
      <div>
        <Link to="/users">Users</Link>
        <Link to="/admins">Admins</Link>
        {authButton}
      </div>
    </div>
  )
};

function mapStateToProps({ auth }) {
  return { auth }
}

export default connect(mapStateToProps)(Header);