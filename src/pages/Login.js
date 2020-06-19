import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { Row, Col, notification } from 'antd';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { connect, useDispatch } from 'react-redux';

import * as Yup from "yup";

import Logo from '../img/logo.svg';
import { SignInButton, BackButton } from '../components/Button';
import { Loader } from '../components/animation';
import { login } from '../_redux/actions/authAction';
import { returnErrors } from '../_redux/actions/messageAction';
import store from '../_redux/createStore';


export function LoginPage(props) {
   const [error, setError] = useState(false);
   const [state, setState] = useState({
      isAuthenticated: false,
      isError: false,
      email: '',
      password:'',
      isLoading: false
   });

    // Properly load dispatch REDUX
    const dispatch = useDispatch();
   
    // Hook for formik 
    const formik = useFormik({
      initialValues: {
        email: '',
        password: '',
      }
    });

    // Handle Login dispatch
    const handleLogin = function(e) {
      e.preventDefault();
      dispatch(login(formik.values.email, formik.values.password));
      setTimeout(() => {
        checkLogin();
      }, 500)
    }

    const checkLogin = () => {
        if ( store.getState().auth.token !== null ) {
          setTimeout(function(){
            setState({
              isAuthenticated: true,
            })}, 2500);
        } else {
          setState({
            isLoading: false
          })
          setTimeout(function(){
            dispatch(returnErrors());
            loginFail();
          }, 100)
        } 
    }

    //Login Error
    const loginFail = () => {
      notification.open({
        message: 'Wrong Email/Password',
        className: 'lo-error',
        placement: 'bottomRight',
        duration: 4.5
      })
    }

    if ( state.isLoading ) {
      return (
        <div className="form-container">
          <Loader/>
        </div>
      )
    }

    if ( state.isAuthenticated ) {
      return <Redirect push to={{pathname:'/'}} />;
    }
    return (
      <div className="form-container"> 
        <BackButton label="Return Home" />
            <form className="login" onSubmit={handleLogin}>
              <Row>
                <Col span={24}>
                  <img src={Logo} className="lofm-small" alt="logo"/>
                </Col>
                <Col span={24}>
                    <h1 className="welcome">Login</h1>
                </Col>
              </Row> 
            
              {/* Email Input */}
              <Row >
                <Col offset={2} span={1} className="login-icon">
                  <AiOutlineMail/>
                </Col>
                <Col span={1}>
                  <h3>Email</h3>
                </Col>
                <Col span={18}>
                  <input type="email" name="email" onChange={formik.handleChange} value={formik.values.email} className={error ? 'error-input' : ''}/>
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
                  <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password} className={error ? 'error-input' : ''}/>
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
                  <SignInButton type="submit" name="sign in" />
                </Col>
              </Row>
              {/** Go to Sign Up */}
              <Row>
              <Col offset={4} span={16}>
                <Link to="/sign-up">
                  Don't have an account? Sign Up
                </Link>
              </Col>
            </Row>
            <Row>
              <Col offset={4} span={16}>
                <p className="_blank">{state.isLoading ? "Please Wait" : ''}</p>
              </Col>
            </Row>
        </form>
      </div>
    );
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps, { login })(LoginPage); 