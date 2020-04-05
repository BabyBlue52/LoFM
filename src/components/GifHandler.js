import React, { useState }from 'react';
import {Row, Col } from 'antd';
import gif from '../img/gif/chilledCow.gif';



function GifHandler(props) {
    const [song, setSong] = useState({
        artist: 'OatMello',
        title: "Anxiety ft. drkmnd",
    })
    return (
        <>
           <Row type="flex">
                <Col span={4}>
                    <img src={gif} class="gif-holder _dropShadow"/>
                </Col>
                <Col span={6} offset={1} style={{display:'block',paddingTop:"20px"}}>
                    <h3>Currently Playing </h3>
                    <marquee behavior="scroll" scrollamount="2">
                        <span style={{marginRight:'10px'}}>
                            {song.artist}
                        </span>
                        -
                        <span style={{marginLeft:'10px'}}>
                            {song.title}
                        </span>
                    </marquee>
                </Col>
           </Row>
           
        </>
    )
}

export { GifHandler } ;