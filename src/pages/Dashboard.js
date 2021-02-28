import React, { useState, useEffect } from 'react';
import { Row, Col, notification } from 'antd';
import { MdClose } from 'react-icons/md';
import { BsFillChatSquareFill } from 'react-icons/bs'
import axios from 'axios';

import { PlayButton } from '../components/Button';
import { GifHandlerDesktop } from '../components/GifHandler';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardContent } from '../components/DashboardContent';
import { Chat } from '../components/Chat';
import store from '../_redux/createStore';
import { loadUser } from '../_redux/actions/authAction';

import gif from '../img/gif/chilledCow.gif';

export default function Dashboard(props){
    const [isOpen, setIsOpen] = useState(false)
    const channel = <marquee>"Bob, do something"</marquee>
    const openNotification = () => {
        notification.open({
            className: "lo-playing",
            message: <PlayButton/>,
            description: `${channel}`,
            duration: 0,
            placement: "bottomLeft"
        });
      };

    const toggleChatDrawer = (e) => {
        e.preventDefault();
        setIsOpen(!isOpen);
    }

    useEffect(() => {
        store.dispatch(loadUser());

        setTimeout(function(){
            openNotification()
          }, 2500);

        axios.get('http://localhost/api/info',{
            header: { Authorization: "Bearer " }
        })
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
    }, [])

    return(
        <React.Fragment>
            {/** Header bar */}
            <Row>
                <DashboardHeader />
            </Row>
            {/** Dashboard Content */}
            <Row className="dashboard-container">
                <Col span={isOpen ? 23 : 16}>
                    <Row>
                        <Col span={6} className="static-content"> 
                            <div className="channel-container">
                                <h1 className="channel-header">#Channels</h1>
                                <div className="favorites-container _dropShadow">
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
                            <DashboardContent span={isOpen ? 15 : 10} row={isOpen ? '': 'left-marg'}/>   
                        </Col>
                    </Row>
                </Col>
                
                
                {/** Chat Section */}
                <Col span={isOpen ? 8 : 1} className="chat-container">
                    <div className="chat-header">
                        <button onClick={toggleChatDrawer} className={isOpen ? "chat-toggle" : "chat-toggle-closed"}>
                            {isOpen ? 
                                <div>
                                    <p><span><MdClose/>Close</span></p>
                                </div>
                                 :
                                 <div>
                                    <p><span><BsFillChatSquareFill/></span>Chat</p>
                                </div>                                 
                            }
                        </button>
                    </div>
                    <div className={isOpen ? '' :'chat-box-closed'}>
                        <Chat animate={isOpen ? 24 : 1 }/>
                    </div>
                      
                </Col>

            </Row>
        </React.Fragment>

    )
}