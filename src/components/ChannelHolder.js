import React, { useState, useEffect } from 'react';
import { Row, Col, Spin, Tooltip } from 'antd';
import { FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa';
import 'antd/dist/antd.css';

import { FavoriteButton, PlayButton } from './Button';
import { SongHandler } from './GifHandler';
import '../../src/style.scss';


function ChannelHolder(props){
    const favorited = <p>Added to favorites</p>
   
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
                    <Tooltip placement="top" title={favorited}>
                       <FavoriteButton />
                    </Tooltip>
                </Col>
            </Row> 

            {/* Channel Links */}
            <Row className="">
                <Col span={2} offset={8} className="justify-center">
                    <a href={props.spotify} target="_blank">
                        <button className="spotify" >
                            <FaSpotify size="1.5rem" fill="white"/> 
                        </button>
                    </a>
                </Col>
                <Col span={4} className="justify-center">
                    <a href={props.youtube} target="_blank">
                        <button className="youtube" >
                            <FaYoutube size="1.5rem" fill="white"/> 
                        </button>
                    </a>
                </Col>
                <Col span={2}>
                    <a href={props.soundcloud} target="_blank">
                        <button className="soundcloud" >
                            <FaSoundcloud size="1.5rem" fill="white"/> 
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

export { ChannelHolder };