import React from 'react';
import {Row, Col, Badge } from 'antd';
import { AiOutlineSmile, AiFillHeart, AiOutlineSearch, AiOutlineMenu, AiFillHome } from 'react-icons/ai';
import { GiSoundWaves } from 'react-icons/gi';


export function Menu(props) { 
    return(
        <Row type="flex" className="menu">
            <Col>
                <button className="support">
                    <AiOutlineSmile />
                </button>            
            </Col>
            <Col>
                <button className="favorite">
                    <AiFillHeart/>
                </button>
            </Col>
            <Col>
                <a href="/">
                <div className="menu-item">
                    <AiFillHome />    
                </div>
                </a>    
            </Col>
            <Col>
                <a href="/search">
                <button className="menu-item">
                    <AiOutlineSearch/>    
                </button>
                </a>
            </Col>
            <Col>
                <button className="menu-item">
                    <Badge dot={props}>
                        <AiOutlineMenu/>
                    </Badge>            
                </button>
            </Col>
        </Row>
    )
}