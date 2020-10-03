import React, { useState } from 'react';
import { Row, Col, Skeleton } from 'antd';
import auth from '../_redux/reducers/auth';

export function ChatBubble(props) {
    const { text, uid } = props.message;

    const messageClass = uid === auth.isAuthenticated ? 'sent' : 'recieved';

    return (
        <Row className="message-container">
            <Col span={24}>
                <div className={`post ${messageClass}`}>
                    <div className="op">
                        <img src={props.thumbnail} alt="" style={{'borderColor':`${props.color}`}}/>
                    </div>
                    <div className="post-content">
                            <p style={{'color':`${props.color}`}}>{props.userName}<span className="post-timestamp">
                            {props.timeStamp}
                        </span></p>
                        <div className="post-body">
                            {props.content}
                        </div> 
                    </div> 
                </div>
            </Col>
        </Row>
    )
}