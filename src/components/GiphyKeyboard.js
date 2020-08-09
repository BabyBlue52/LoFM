import React, { useState } from 'react';
import {Row, Col } from 'antd';
import ReactGiphySearchbox from 'react-giphy-searchbox';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdKeyboard, MdSend } from 'react-icons/md';

import giphy from '../img/icons8-gif-24.png'
import config from '../apis';
import '../style.scss';

export function GiphyKeyboard() {
    const [clipboard, setClipboard] = useState({
        img: ''
    });

    const [isOpen, setIsOpen] = useState(false);

    const { giphy_id }  = config;

    const loading = () => {
        return(
            <div style={{'fill':'#decade'}}>
                <AiOutlineLoading3Quarters/>
            </div>
        )
    }
    const toggleGifKeyboard = () => {
        setIsOpen(!isOpen);
    }

    const copyGif = (item) => {
        setClipboard({ video: item});
        console.log(clipboard.img)
    }

    return(
        <>
        <Row style={{"display":"flex"}}>
            <Col span={3}>
                <button onClick={toggleGifKeyboard} className="gif-btn _dropLight">
                    {!isOpen ? 
                        <div className="gif-icon">
                            <img src={giphy}/>
                        </div>
                        : 
                        <div className="keyboard-icon">
                            <MdKeyboard/>
                        </div>
                    }
                </button>
            </Col>
            <Col offset={1}>
                {isOpen ?  
                <ReactGiphySearchbox
                    apiKey={giphy_id}
                    onSelect={copyGif}
                    loadingImage={loading}
                    masonryConfig={[
                        { columns: 2, imageWidth: 110, gutter: 5 },
                        { mq: "700px", columns: 3, imageWidth: 90, gutter: 5 }
                    ]}
                    className={isOpen ? "gif-keyboard-open" : "gif-keyboard-closed"}
                />
                : 
                <div>
                    <input style={{'width':'270px'}} type="text"/>
                </div>
                }
            </Col>
            <Col>
                <button className="gif-btn send">
                    <div className="send-icon">
                        <MdSend/>
                        SEND
                    </div>
                </button>
            </Col>
        </Row>
       
      </>
    )
}
