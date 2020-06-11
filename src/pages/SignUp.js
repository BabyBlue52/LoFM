import React, { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col } from 'antd';
import { AiOutlineMail, AiOutlineLock, AiOutlineSmile } from 'react-icons/ai';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../img/logo.svg';
import { SignInButton, BackButton } from '../components/Button';
import { register } from '../_redux/actions/authAction';
import { createMessage } from '../_redux/actions/messageAction';

export function SignUpPage(props) {
    const [user, setUser] = useState({
        isLoggedIn: false,
        isError: false,
        userName: '',
        email: '',
        password: '',
        password2:''
      });
    // Properly load dispatch REDUX
    const dispatch = useDispatch();

    const propTypes = {
        register: PropTypes.func.isRequired,
        isAuthenticated: PropTypes.bool,
      };

      const handleSignUp = function(e) {
        e.preventDefault();
        const { username, email, password, password2 } = user;
        if (password !== password2) {
            dispatch(createMessage({ passwordNotMatch: 'Passwords do not match' }));
          } else {
            const newUser = {
              username,
              password,
              email,
            };
            dispatch(register(newUser));
          }
      }
    if (props.isAuthenticated) {
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
                    <Link to="/login">
                    <h4>Already have an account? Login</h4>
                    </Link>
                </Col>
                </Row>
            </form>
        </div>
    );
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps, { register, createMessage })(SignUpPage);