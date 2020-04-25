import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { MdClose } from 'react-icons/md'

export default function SupportPage(props) {
    const [state, setState ] = useState();
    return (
        <div className="support-container">
            <Row type="flex">
                <button className="back-btn" onClick={props.onClose}>
                    <MdClose style={{'fill':'red'}}/>
                </button>
                <Col span={24}>
                    <h3> Please support us</h3>
                </Col>
            </Row>
        </div>
    )
}
