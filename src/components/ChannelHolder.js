import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa';
import { connect, useSelector, useDispatch } from 'react-redux'; 
import 'antd/dist/antd.css';

import { FavoriteButton } from './Button';
import { SongHandler } from './GifHandler';
import favoriteAction from '../_redux/actions/favoriteAction';
import store from '../_redux/createStore';
import '../../src/style.scss';


function ChannelHolder(props){
    const checkFave = useSelector(state => state.favorited);   
    const dispatch = useDispatch();
    // Change REDUX state of channel in playlist

    

    function handleFavorite(){
        if (checkFave == false) {
            dispatch(favoriteAction.addFavorite());
            console.log('added');
        } else {
            dispatch(favoriteAction.deleteFavorite());
            console.log('removed');
        }
        
    }

    useEffect(() =>{
        
    },[])
    return (
        <>  {/* Channel Profile */}
            <Row type="flex">
                <Col span={8} offset={8} className="justify-center">
                    <div className="channel-gradient _dropShadow">
                        <img src={props.channel} className="channel-default"/>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col span={1} offset={14}>
                    <div onClick={handleFavorite}>
                        <FavoriteButton channelName={props.name}/>
                    </div>
                </Col>
            </Row> 

            {/* Channel Links */}
            <Row className="">
                <Col span={2} offset={8} className="justify-center">
                    <a href={props.spotify} target="_blank">
                        <button className="spotify" >
                            <FaSpotify size="24px" fill="white"/> 
                        </button>
                    </a>
                </Col>
                <Col span={4} className="justify-center">
                    <a href={props.youtube} target="_blank">
                        <button className="youtube" >
                            <FaYoutube size="24px" fill="white"/> 
                        </button>
                    </a>
                </Col>
                <Col span={2}>
                    <a href={props.soundcloud} target="_blank">
                        <button className="soundcloud" >
                            <FaSoundcloud size="24px" fill="white"/> 
                        </button>
                    </a>
                </Col>  
            </Row>
            
            {/* Channel Info */}
            <Row type="flex" className="justify-center">
                <h1 className="channel">{props.name}</h1>
                <h3>{props.viewers}</h3>
                <Col span={20} className="channel-bio" >                
                    <p>{props.bio}</p>
                </Col>
            </Row>

            {/* Marquee */}
            <Row className="justify-center">
                <Col span={18} style={{"flexDirection":"column"}}>
                    <div className="divider"></div>
                       <SongHandler artist={props.artist} title={props.title}/>
                    <div className="divider"></div>
                </Col>
            </Row>
 
        </>
    )
}

export default connect(
    null, 
    favoriteAction)
    (ChannelHolder);