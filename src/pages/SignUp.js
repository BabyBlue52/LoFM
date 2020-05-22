import React, { useContext, useCallback } from 'react';
import { withRouter, Redirect } from 'react-router';
import { Row, Col} from 'antd';
import { AiOutlineUser, AiOutlineLock } from 'react-icons/ai';

import fire from '../base';
import { AuthContext } from "../components/Auth";

export function SignUpPage({ history }) {
    const handleSignUp = useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
        try {
          await fire
            .auth()
            .createUserWithEmailAndPassword(email.value, password.value);
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
      <Row type="flex">
        <form onSubmit={handleSignUp} className="sign-up">
          <Col>
            Email
            <input name="email" type="email" placeholder="Email" />
          </Col>
          <Col>
            Password
            <input name="password" type="password" placeholder="Password" />
          </Col>
          <Col>
            <button type="submit" className="login-btn">Log in</button>
          </Col>
        </form>
      </Row>
    );
  };