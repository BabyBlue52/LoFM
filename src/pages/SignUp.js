import React, { useState, useCallback } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { Row, Col, notification } from 'antd';
import { AiOutlineMail, AiOutlineLock, AiOutlineSmile } from 'react-icons/ai';
import { connect, useDispatch } from 'react-redux';

import Logo from '../img/logo.svg';
import { SignInButton, HomeButton } from '../components/Button';
import { register } from '../_redux/actions/authAction';
import { returnErrors } from '../_redux/actions/messageAction';
import store from '../_redux/createStore';

export function SignUpPage(props) {
    const [state, setState] = useState({
        isAuthenticated: false,
        isError: false,
        userName: '',
        email: '',
        password: '',
        password2:''
    });

    // Properly load dispatch REDUX
    const dispatch = useDispatch();

    // Hook for formik 
    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            password2:'',
        }
    });

    // Handle SignUp dispatch
    const handleSignUp = function(e) {
        e.preventDefault();
        setTimeout(()=> {
            checkRegister();
        }, 500)
    }

    const checkRegister = () => {
        if (formik.values.password === formik.values.password2) {
            const newUser = {
                username : formik.values.username,
                password : formik.values.password,
                email : formik.values.email,
            };
            dispatch(register(newUser));
            setTimeout(function(){
                dispatch(returnErrors());
                registerSuccess();
            }, 250)
            
            setState({
                isAuthenticated: true
            })
        } else {
            setState({
                isLoading: false
              })
            setTimeout(function(){
                dispatch(returnErrors());
                registerFail();
            }, 100)
        }
    }

    //Register Error
    const registerSuccess = () => {
        notification.open({
            message: `Thanks for joining ${formik.values.username}`,
            className: 'lo-success',
            placement: 'bottomRight',
            duration: 4.5
        })
    }
    
    //Register Error
    const registerFail = () => {
        notification.open({
          message: 'Passwords do not match',
          className: 'lo-error',
          placement: 'bottomRight',
          duration: 4.5
        })
      }

    if (state.isAuthenticated) {
        return <Redirect to="/" />;
    }
    return (
        <div className="form-container"> 
            <HomeButton label="Return Home" />
            <form onSubmit={handleSignUp} className="login">
                <Row>
                <Col span={24}>
                    <img src={Logo} className="lofm-small" style={{'width':'100px'}} loading="lazy" />
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
                    <input name="username" type="text" onChange={formik.handleChange} value={formik.values.username} />
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
                    <input name="email" type="email" onChange={formik.handleChange} value={formik.values.email} />
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
                    <input name="password" type="password" onChange={formik.handleChange} value={formik.values.password} />
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
                    <input name="password2" type="password" id="confirm" onChange={formik.handleChange} value={formik.values.password2}/>
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
  
  export default connect(mapStateToProps, { register, returnErrors })(SignUpPage);