import React, { useState } from 'react';
import {Row, Col } from 'antd';
import ReactGiphySearchbox from 'react-giphy-searchbox';

import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { MdKeyboard, MdSend } from 'react-icons/md';

import giphy from '../img/gif.png'
import config from '../apis';

export function GiphyKeyboard(props) {
    const [clipboard, setClipboard] = useState({
        video: ''
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
    
    //connect gif keyboard to chat channel 
    const sendGif = (item) => {
        setClipboard({ video: item});
        console.log(item.embed_url)
        toggleGifKeyboard();
    }

    return(
        <>
        <Row style={{"display":"flex"}}>
            <Col span={3}>
                <button onClick={toggleGifKeyboard} className="gif-btn _dropLight">
                    {!isOpen ? 
                        <div className="gif-icon">
                            <img src={giphy} loading="lazy" />
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
                    onSelect={sendGif}
                    poweredByGiphy={false}
                    loadingImage={loading}
                    masonryConfig={[
                        { columns: 3, imageWidth: 110, gutter: 5 },
                        { mq: "400px", columns: 3, imageWidth: 200, gutter: 5 },
                        { mq: "1024px", columns: 3, imageWidth: 110, gutter: 5}
                    ]}
                    className={isOpen ? "gif-keyboard-open" : "gif-keyboard-closed"}
                    gifListHeight='15vh'
                />
                : 
                <div>
                    {/* <input style={{'width':'270px'}} type="text"/> */}
                </div>
                }
            </Col>
           
        </Row>    
      </>
    )
}
