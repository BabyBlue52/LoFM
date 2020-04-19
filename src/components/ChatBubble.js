import React, { useState } from 'react';
import { Row, Col, Skeleton } from 'antd';

export function ChatBubble() {
    const [chat, setChat] = useState({

    })
    return (
        <Row style={{"maxWidth":"320px"}}>
         <Skeleton active>

         </Skeleton>
        </Row>
    )
}