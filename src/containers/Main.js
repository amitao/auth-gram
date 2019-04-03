import React from 'react';
import { Switch, Route, withRouter, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import Home from '../components/Home';
import AuthForm from '../components/AuthForm';
import { authUser } from '../store/actions/auth';
import { removeError } from '../store/actions/errors';

const Main = props => {
  
  const { authUser, errors, removeError } = props;

  return (
    <div className="container">
      <Switch>
        <Route exact path="/" render={props => <Home {...props} />} />

        {/* Sign In route */}
        <Route 
          exact 
          path="/signin" 
          render={ props => {
            return (
              <AuthForm 
                removeError={removeError}
                errors={errors}
                onAuth={authUser} 
                buttonText="signin" 
                heading="Welcome Back!" 
                {...props}
                />
            );}
        } 
        />

        {/* Sign out route */}
        <Route 
          exact 
          path="/signup" 
          render={ props => {
          return (
            <AuthForm 
              removeError={removeError}
              errors={errors}
              onAuth={authUser} 
              signUp 
              buttonText="signup" 
              heading="Sign Up" 
              {...props}/>
          );}
        } 
        />

      </Switch>
    </div>
  );
};


const mapStateToProps = state => ({
  currentUser: state.currentUser,
  errors: state.errors
})
export default withRouter(connect(mapStateToProps, { authUser, removeError })(Main));