import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function InboxPage(props) {
    const [state, setState ] = useState();
    return (
        <div className="inbox-container">
            <Row type="flex" className="justify-center">
                <Col span={24} className="inbox-header _dropShadow">
                <button className="back-btn" onClick={props.onCloseInbox}>
                    <AiOutlineArrowLeft />
                </button>
                    <h3> Direct Messages</h3>
                </Col>
            </Row>
        </div>
    )
}
