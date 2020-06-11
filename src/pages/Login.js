import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { Row, Col } from 'antd';
import { AiOutlineMail, AiOutlineLock } from 'react-icons/ai';
import { connect, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';

import Logo from '../img/logo.svg';
import { SignInButton, BackButton } from '../components/Button';
import { login } from '../_redux/actions/authAction';

export function LoginPage(props) {
   const [state, setState] = useState({
      isError: false,
      username: '',
      password:'',
   });
   // Properly load dispatch REDUX
   const dispatch = useDispatch();

   const propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
  };

    const handleChange = function(e) {
      setState({
        [e.target.name]: e.target.value
      })
        console.log(state);
    }

    const handleLogin = function(e) {
        e.preventDefault();
        dispatch(login(state.username, state.password));   
    }
  
    if ( props.isAuthenticated ) {
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
                <input name="email" type="email" onChange={handleChange}/>
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
                <input name="password" type="password" onChange={handleChange} />
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
                <Link to="/sign-up">
                  Don't have an account? Sign Up
                </Link>
              </Col>
            </Row>
        </form>
        { state.isError &&<>The username or password provided were incorrect!</> }
        </div>
    );
  };

  const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
  export default connect(mapStateToProps, { login })(LoginPage); 