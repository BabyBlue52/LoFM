import React, { useContext, useCallback } from 'react';
import { Redirect } from 'react-router';
import { Row, Col} from 'antd';
import { AiOutlineMail, AiOutlineLock, AiOutlineSmile } from 'react-icons/ai';

import { BackButton, SignInButton } from '../components/Button';
import Logo from '../img/logo.svg';
import fire from '../base';
import { AuthContext } from "../components/Auth";

export function SignUpPage({ history }) {
    const handleSignUp = useCallback(
      async event => {
        event.preventDefault();
        const { email, password, display } = event.target.elements;
        try {
          await fire
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value)
            .then(function(result) {
                return result.user.updateProfile({
                    displayName: display.value
                })              
            })
          history.push("/");
        } catch (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            console.log(errorCode);
            alert(errorMessage);
        }
      },
      [history]
    );

    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
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
                    <a href="/log-in">
                    <h4>Already have an account? Login</h4>
                    </a>
                </Col>
                </Row>
            </form>
        </div>
    );
  };