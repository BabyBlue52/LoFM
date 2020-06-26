import React, { useState, useEffect } from 'react';
import { Row, Col, Badge, Input } from 'antd';
import { AiOutlineSmile, AiOutlineSearch, AiOutlineInbox } from 'react-icons/ai';

import { Button } from './Button'; 

export function DashboardHeader(props){
    const [state,setState] = useState({})
    return (
        <React.Fragment>
            <Row className="dashboard-header">
                <Col span={6}>
                    <button className="profile-icon">
                        <AiOutlineSmile/>
                    </button>
                    <Button name="Log In"></Button>
                </Col>
                <Col span={12}>
                    <Input className="dashboard-search" prefix={<AiOutlineSearch/>} size="middle" />
                </Col>
                <Col span={5} style={{'justifyContent':'flex-end'}}>
                    <button className="support-btn">
                        <p>Support Us</p>    
                    </button>
                </Col>
                <button className="dashboard-inbox">
                    <Badge dot={props}>
                        <AiOutlineInbox/>
                    </Badge>            
                </button>
            </Row>
        </React.Fragment>
    )
}