import React, { useState } from 'react';
import {Row, Col } from 'antd';
import { PlayButton } from '../components/Button';
import gif from '../img/gif/chilledCow.gif';



export function GifHandler(props) {
    return (
        <div className="gif-player">
           <Row style={{"width":"100vw","transform":"scale(0.8)"}}>
                <Col span={2}>
                    <PlayButton/>
                </Col>
                <Col span={2} offset={1}>
                    <img src={props.gif} className="gif-holder _dropShadow"/>
                </Col>
                <Col span={10} offset={8} style={{'display':'block','paddingTop':"20px"}}>
                    <h3>Currently Playing </h3>
                    <marquee behavior="scroll" scrollamount="2">
                        <span style={{marginRight:'10px'}}>
                            {props.artist}
                        </span>
                        -
                        <span style={{marginLeft:'10px'}}>
                            {props.title}
                        </span>
                    </marquee>
                </Col>
           </Row>
        </div>
    )
}

export function GifHandlerDesktop(props) {
    return (
        <>
           <Row className="gif-player-desktop">
                <Col>
                    <img src={props.gif} className="gif-holder-desktop _dropShadow"/>
                </Col>
            </Row>
        </>
    )
}