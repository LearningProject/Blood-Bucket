import React from 'react';
import './login.css';
import LoginForm from '../LoginForm/LoginForm';
import LoginFooter from '../LoginFooter/LoginFooter';

function Login() {
  return (
    <div className="login" >
    <LoginForm />
    <LoginFooter />
    </div>
  );
}

export default Login;