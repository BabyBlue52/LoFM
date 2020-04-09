import React, { useState }from 'react';
import { Row, Col, Input } from  'antd';
import { MdClose } from 'react-icons/md'
import { Button } from './Button';

function Modal() {
    const [state, setState] = useState({

    })

     return(
            <div className="modal _dropShadow">
                <Row>
                    <Col span={6}>
                        <button className="close" style={{marginLeft:"-10px",marginTop:"10px"}}>
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
                        <Input type="email"/>
                    </Col>
                </Row>
                <div className="spacer"></div>

                <Row>
                {/* Password input */}
                `<Col offset={2} span={20}>
                        <h3>Password</h3>
                    </Col>
                    <Col offset={2} span={20}>
                        <Input type="password"/>
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
                        <Button name="login"/>
                    </Col>
                </Row>
            </div>
        )
    }
export default Modal;