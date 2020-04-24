import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineArrowLeft } from 'react-icons/ai'

export default function InboxPage(props) {
    const [state, setState ] = useState();
    return (
        <div className="inbox-container">
            <Row>
                <button className="back-btn" onClick={props.onCloseSupport}>
                    <AiOutlineArrowLeft />
                </button>
            </Row>
            <Row type="flex">
                <Col span={24} className="inbox-header _dropShadow">
                    <h3> Direct Messages</h3>
                </Col>
            </Row>
        </div>
    )
}
