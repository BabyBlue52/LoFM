import React, { useState } from 'react';
import { Row, Col, Skeleton } from 'antd';
import auth from '../_redux/reducers/auth';

export function ChatBubble(props) {
    const { text, uid, createdAt } = props.message;
    const messageClass = uid === auth.isAuthenticated ? 'sent' : 'recieved';
    {/** Incoming Message **/}
    if (messageClass === "recieved") {
        return (
            <Row className="message-container">
                <Col span={24}>
                    <div className={`post ${messageClass}`}>
                        <div className="op">
                            <img src={props.thumbnail} alt="" style={{'borderColor':`${props.color}`}} loading="lazy" />
                        </div>
                        <div className="post-content">
                            <p style={{'color':`${props.color}`}}>{props.userName}
                                <span className="post-timestamp">
                               
                                </span>
                            </p>
                            <div className="post-body">
                                {text}
                            </div> 
                        </div> 
                    </div>
                </Col>
            </Row>
        ) 
    }
      {/** Outgoing Message **/}
    return (
        <Row className={`message-container ${messageClass}`}>
            <Col span={24}>
                <div className="post">
                    <div className="post-content">
                        <p style={{'color':`${props.color}`}}>{props.userName}
                            <span className="post-timestamp">
                           
                            </span>
                        </p>
                        <div className="post-body">
                            {text}
                        </div> 
                    </div> 
                    <div className="op">
                        <img src={props.thumbnail} alt="" style={{'borderColor':`${props.color}`}} loading="lazy" />
                    </div>
                </div>
            </Col>
        </Row>
    )
}