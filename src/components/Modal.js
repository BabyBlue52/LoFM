import React, { useState }from 'react';
import { Row, Col, Input } from  'antd';
import { MdClose } from 'react-icons/md'
import { Button, GoogleButton } from './Button';

function Modal(props) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    // Handle Submit
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    // Validate form
    function validateForm() {
        return email.length > 0 && password.length > 0;
    }

    return(
            <div className="modal-container">
            <form className="modal _dropShadow" onSubmit={handleSubmit}>
                <Row>
                    <Col span={6}>
                        <button 
                        className="close" 
                        style={{marginLeft:"-10px",marginTop:"10px"}}
                        onClick={props.onClose}
                        >
                            <MdClose/>
                        </button>  
                    </Col>
                </Row>   
                <Row>
                    <Col span={24}>
                        <h1 className="welcome">Welcome back,</h1>
                    </Col>
                </Row>      

                {/* Email input */}
                <Row>
               
                <Col offset={2} span={20}>
                        <h3>Email</h3>
                    </Col>
                    <Col offset={2} span={20}>
                        <Input type="email" placeholder="Enter Email" value={email} onChange={e => setEmail(e.target.value)}/>
                    </Col>
                </Row>
                <div className="spacer"></div>

                <Row>

                {/* Password input */}
                `<Col offset={2} span={20}>
                        <h3>Password</h3>
                    </Col>
                    <Col offset={2} span={20}>
                        <Input type="password" placeholder="Enter Password" value={password} onChange={e => setPassword(e.target.value)}/>
                    </Col>
                </Row>
                {/* */}
                <Row>
                    <Col offset={2} span={20}>
                        <a target="_blank" href="/">
                            <p className="forgot">Forgot Password?</p>
                        </a>
                    </Col>                
                    <Col offset={2} span={20}>
                        <Button name="Login" disabled={!validateForm()} type="submit" onClick={console.log('clicked')}/>
                    </Col>
                    <Col offset={2} span={20}>
                        <GoogleButton  onSuccess={props.onClose}/>
                    </Col>
                </Row>
            </form>
            </div>
        )
    }
export default Modal;