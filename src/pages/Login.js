import React, { useContext, useCallback } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Row, Col} from 'antd';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

import Logo from '../img/logo.svg';
import { Button,SecondaryButton } from '../components/Button';
import fire from '../base';
import { AuthContext } from "../components/Auth";

export function LoginPage({ history }) {
    const handleLogin = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await fire
            .auth()
            .signInWithEmailAndPassword(email.value, password.value);
          history.push("/");
        } catch (error) {
          alert(error);
        }
      },
      [history]
    );
  
    const { currentUser } = useContext(AuthContext);
  
    if (currentUser) {
      return <Redirect to="/" />;
    }
  
    return (
      <div className="login-modal">
        <form onSubmit={handleLogin} className="login _dropShadow">
            <Row>
                <Col span={6}>
                    <button 
                    className="close" 
                    style={{marginLeft:"-10px",marginTop:"10px"}}
                    >
                      <MdClose/>
                    </button>  
                </Col>
            </Row>   
            <Row>
              <Col span={24}>
                <img src={Logo} className="lofm-small"/>
              </Col>
              <Col span={24}>
                  <h1 className="welcome">Welcome Back</h1>
              </Col>
            </Row> 
            
            {/* Email Input */}
            <Row>
              <Col offset={2} span={20}>
                <h3>Email</h3>
              </Col>
              <Col offset={2} span={20}>
                <input name="email" type="email" placeholder="Email" />
              </Col>
            </Row>

            {/* Password Input */}
            <Row>
              <Col offset={2} span={20}>
                <h3>Password</h3>
              </Col>
              <Col offset={2} span={20}>
                <input name="password" type="password" placeholder="Password" />
              </Col>
              <Col offset={1} span={20}>
                <p className="forgot">Forgot Password?</p>
              </Col>
            </Row>
            {/* Submit */}
            <Row>
              <Col offset={2} span={20}>
              <Button type="submit" name="Sign in"/>
              </Col>
            </Row>
            <Row>
              <Col offset={2} span={20}>
                <a href="/sign-up" style={{'width':'100%'}}>
                  <SecondaryButton name="Sign Up"/>
                </a>
              </Col>
            </Row>
            
        </form>
        </div>
    );
  };