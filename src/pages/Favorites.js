import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineArrowLeft, AiFillHeart } from 'react-icons/ai'
import { useSelector } from 'react-redux';

import store from '../_redux/createStore';

export default function FavePage(props) {
    const [playlist, setPlaylist ] = useState();

    const favorites = useSelector(state => state.favorites.channels)    
    
    const EntryItem = ({props, name }) => (
        <div className="playlist-item">
            <p>{props.name}</p>
        </div>
    );

    if ( favorites. length === 0) {
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
                            <h3><AiFillHeart/> &nbsp; Favorites</h3>
                           
                        </Col>
                        <Col span={24}>
                            <p>Add some of your favorites here</p>
                        </Col>
                    </Row>
                </div>
            </div>
        )
    }
    {/** With Channels Favorited */}
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
                        <h3><AiFillHeart/> &nbsp; Favorites</h3>
                        {favorites.map((item, index) => (
                            <EntryItem
                                name={item.name}
                            />
                        ))}
                    </Col>
                </Row>
            </div>
        </div>
    )
}