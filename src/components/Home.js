import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home-landing">
      <h1>Welcome to Landing</h1>
      <h4> Welcome</h4>
      <Link to="/signup" className="btn btn-primary">Sign up</Link>

    </div>
  )
}

export default Home;