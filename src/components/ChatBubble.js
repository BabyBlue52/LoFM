import React, { useState } from 'react';
import { Row, Col, Skeleton } from 'antd';

export function ChatBubble(props) {
    const [chat, setChat] = useState({

    })
    return (
        <Row className="message-container">
            <Col span={24}>
                <div className="post">
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