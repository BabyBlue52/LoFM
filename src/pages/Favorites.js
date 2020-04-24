import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineArrowLeft, AiFillHeart } from 'react-icons/ai'

export default function FavePage(props) {
    const [playlist, setPlaylist ] = useState();
    return (
        <div className="fave-backdrop">
        <div className="fave-container">
            <Row>
                <button className="back-btn" onClick={props.onCloseFave}>
                    <AiOutlineArrowLeft />
                </button>
            </Row>
            <div className="super-spacer"></div>
            <Row className="justify-center">
                <Col span={24} className="fave-header">
                    <h3><AiFillHeart/>Favorites</h3>
                </Col>
            </Row>
        </div>
        </div>
    )
}