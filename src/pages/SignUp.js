import React, { useState, useCallback } from 'react';
import { Redirect } from 'react-router';
import { Row, Col } from 'antd';
import { AiOutlineMail, AiOutlineLock, AiOutlineSmile } from 'react-icons/ai';
import axios from 'axios';

import Logo from '../img/logo.svg';
import { SignInButton, BackButton } from '../components/Button';
import { useAuth } from '../components/Auth'

export function SignUpPage({ history }) {
    const [user, setUser] = useState({
        isLoggedIn: false,
        isError: false,
        userName: '',
        password: ''
      });

      const { setAuthTokens } = useAuth();
      
      const handleSignUp = useCallback(
      async event => {
        event.preventDefault();
        const { email, password, display } = event.target.elements;
        axios({
            method: 'post',
            url: 'https://dev.lofifm.com/api/user/create/',
            data: {
                username: display.value,
                email: email.value,
                password: password.value
            }})
            .then( res => {
                if (res. status === 200){
                    setAuthTokens(res.data);
                    setUser(user.isLoggedIn = true);
                  } else {
                      setUser(user.isError = true);
                  }    
            })
            .catch(error => {
                setUser(user.isError = true);
                console.log(error);
            })
      },
      [history]
    );
  
    if (user.isLoggedIn) {
      return <Redirect to="/" />;
    }
  
    return (
        <div className="form-container"> 
            <BackButton label="Return Home" />
            <form onSubmit={handleSignUp} className="login">
                <Row>
                <Col span={24}>
                    <img src={Logo} className="lofm-small" style={{'width':'100px'}}/>
                </Col>
                <Col span={24}>
                    <h1 className="welcome">Sign Up</h1>
                </Col>
                </Row> 
                
                {/* Display Name Input */}
                <Row>
                <Col offset={2} span={1} className="login-icon">
                    <AiOutlineSmile/>
                </Col>
                <Col span={1}>
                    <h3>Display Name</h3>
                </Col>
                <Col span={18}>
                    <input name="display" type="text" />
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
                
                {/* Password Confirm */}
                <Row>
                <Col offset={2} span={1} className="login-icon">
                    <AiOutlineLock/>
                </Col>
                <Col span={1}>
                    <h3>Confirm Password</h3>
                </Col>
                <Col span={18}>
                    <input name="confirm" type="password" id="confirm" />
                </Col>
                </Row>
                
                {/* Submit */}
                <Row>
                    <Col offset={4} span={16}>
                        <SignInButton type="submit" name="Sign up"/>
                    </Col>
                </Row>
                
                {/* Go to Log In */}
                <Row>
                <Col offset={4} span={16}>
                    <a href="/login">
                    <h4>Already have an account? Login</h4>
                    </a>
                </Col>
                </Row>
            </form>
        </div>
    );
  };