import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router';
import { Row, Col } from 'antd';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import axios from 'axios';

import Logo from '../img/logo.svg';
import { SignInButton, BackButton } from '../components/Button';
import { useAuth } from '../components/Auth'

export function LoginPage({ history }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [isError, setIsError] = useState(false);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const { setAuthTokens } = useAuth();

    const handleLogin = function(event) {
        event.preventDefault();
        const { email, password } = event.target.elements;
        axios({
          method: 'post',
          url: 'https://dev.lofifm.com/api/login',
          data: {
              email: email.value,
              password: password.value
          }})
          .then( res => {
              if (res. status === 200){
                setAuthTokens(res.data);
                setIsLoggedIn(!isLoggedIn);
                console.log('successful login')
              } else {
                  setIsError(!isError);
              }    
          })
          .catch(error => {
            console.log(error);
          })
      
    
}
  
    if ( isLoggedIn ) {
      return <Redirect to="/" />;
    }
  
    return (
      <div className="form-container"> 
        <BackButton label="Return Home" />
        <form onSubmit={handleLogin} className="login">
            <Row>
              <Col span={24}>
                <img src={Logo} className="lofm-small"/>
              </Col>
              <Col span={24}>
                  <h1 className="welcome">Login</h1>
              </Col>
            </Row> 
            
            {/* Email Input */}
            <Row>
            <Col offset={2} span={1} className="login-icon">
                <AiOutlineMail/>
              </Col>
              <Col span={1}>
                <h3>Email</h3>
              </Col>
              <Col span={18}>
                <input name="email" type="email" />
              </Col>
            </Row>

            {/* Password Input */}
            <Row>
            <Col offset={2} span={1} className="login-icon">
                <AiOutlineLock/>
              </Col>
              <Col span={1}>
                <h3>Password</h3>
              </Col>
              <Col span={18}>
                <input name="password" type="password" />
              </Col>
            </Row>
            <Row>
              <Col offset={4}>
                <a className="forgot">Forgot password?</a>
              </Col>
            </Row>
            {/* Submit */}
            <Row>
              <Col offset={4} span={16}>
                <SignInButton type="submit" name="Sign in"/>
              </Col>
            </Row>
            <Row>
              <Col offset={4} span={16}>
                <a href="/sign-up">
                  Don't have an account? Sign Up
                </a>
              </Col>
            </Row>
        </form>
        { isError &&<>The username or password provided were incorrect!</> }
        </div>
    );
  };