import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineArrowLeft, AiFillHeart } from 'react-icons/ai'
import { connect, useSelector } from 'react-redux';

import store from '../_redux/createStore';
import actionTypes from '../_redux/actionTypes';
 function FavePage(props) {
    const favorites = useSelector(state => props)

    const EntryItem = ({props, name }) => (
        <div className="playlist-item">
            <p>{props.name}</p>
        </div>
    );

    const playlist = () => {
        if (props.playlist.length === 0) {
            return(
                <p>Add some of your favorites here</p>
            )
        } else {
            return (
                <p>props.playlist[0].channelId</p>
            )
        }
    }
    useEffect(() =>{
        console.log(store.getState());
        console.log(props.playlist);
    },[])
    
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
                        {playlist}
                    </Col>
                </Row>
            </div>
        </div>
    )
}


function mapStateToProps(state){
    return{
        playlist: state.playlist
    }
}

const mapDispatchToProps = {
    ...actionTypes,
}


export default connect(mapStateToProps, mapDispatchToProps)(FavePage);