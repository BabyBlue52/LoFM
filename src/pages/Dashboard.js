import React, { useState, useEffect } from 'react';
import { useDispatch } from 'redux';
import { Row, Col, notification } from 'antd';
import { MdClose } from 'react-icons/md';
import { BsFillChatSquareFill } from 'react-icons/bs'

import { Button, PlayButton } from '../components/Button';
import { GifHandlerDesktop } from '../components/GifHandler';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardTuner } from '../components/DashoboardTuner';

import gif from '../img/gif/chilledCow.gif';

export default function Dashboard(props){
    const [isOpen, setIsOpen] = useState(false)
    
    const openNotification = () => {
        notification.open({
            className: "lo-playing",
            message: 'Now Playing:',
            description: <PlayButton/>,
            duration: 0,
            placement: "bottomLeft"
        });
      };

    const toggleChatDrawer = () => {
        setIsOpen(!isOpen);
    }
    useEffect(() => {
        setTimeout(function(){
            openNotification()
          }, 2500);
    }, [])
    return(
        <React.Fragment>
            {/** Header bar */}
            <Row>
                <DashboardHeader />
            </Row>
            {/** Dashboard Content */}
            <Row className="dashboard-container">
                <Col span={!isOpen ? 16 : 23}>
                    <Row>
                        <Col span={6} className="static-content"> 
                            <div className="channel-container">
                                <h1 className="channel-header">#Channels</h1>
                                <div className="favorites-container">
                                    <div className="favorites-list">
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>

                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                        <h2>Bang</h2>
                                    </div>
                                </div>
                                <GifHandlerDesktop gif={gif} />
                            </div>
                        </Col>
                        <Col span={18} className="static-content-center">
                            <DashboardTuner span={!isOpen ? 13 : 10} />
                        </Col>
                    </Row>
                </Col>
                
                
                {/** Chat Section */}
                <Col span={!isOpen ? 8 : 1} className="chat-container">
                        <button onClick={toggleChatDrawer} className={isOpen ? "chat-toggle-closed" : "chat-toggle"}>
                            {!isOpen ? 
                                <div>
                                    <p><span><MdClose/>Close</span></p>
                                </div>
                                 :
                                 <div>
                                    <p><span><BsFillChatSquareFill/></span>Chat</p>
                                </div>                                 
                            }
                        </button>
                    <div>
                        {/* <p>Got it</p> */}
                    </div>
                </Col>

            </Row>
        </React.Fragment>

    )
}