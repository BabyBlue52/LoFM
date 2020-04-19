import React, { useState } from 'react';
import { Row, Col } from 'antd';

import { BackButton } from '../components/Button';



export default function Chat(props) {
    return(
        <>  
            <div className="back-btn">
                <BackButton />
            </div>
            
            <Row style={{'width':'100%'}}>
                <Col span={24} className="justify-center">
                    <h3 className="chat-title">{props.snippet} chat</h3>
                </Col>
            </Row>
            {/* Chat API Body */}        
            <Row style={{'width':'90%','margin':'0 auto'}}>
                <Col span={24}>
                    <div className="temps"></div>   
                </Col>
            </Row>
        </>
    )
}
