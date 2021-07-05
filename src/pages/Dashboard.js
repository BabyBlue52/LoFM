import React, { useState, useEffect } from 'react';
import { Row, Col, notification } from 'antd';
import { MdClose,  } from 'react-icons/md';
import { BsFillChatSquareFill, BsHeartFill } from 'react-icons/bs'
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
    const [width, setWidth] = useState(8)
    const channel = <marquee>"Bob, do something"</marquee>
    
    const favorites = ['Bang', 'Bang', 'Bang','Bang', 'Bang', 'Bang','Bang', 'Bang', 'Bang','Bang', 'Bang', 'Bang','Bang', 'Bang', 'Bang',];
    
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

    const isLargeDesktop = () => {
        if (window.innerWidth > 1400) {
            setWidth(7)
        } else {
            setWidth(10)
        }
    }

    useEffect(() => {
         // Check if user is signed in 
         if (store.getState().auth.user != null) {
            store.dispatch(loadUser());
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/info`,{
                header: { Authorization: "Bearer " }
            })
            .then( res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log("Not Signed In");
        }

        setTimeout(function(){
            // openNotification()
          }, 2500);

       
        isLargeDesktop();
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
                        <Col span={2} className="static-content"> 
                            <div className="channel-container d-flex">
                                <h1 className="channel-header">#Channels</h1>
                                <div className="favorites-container">
                                {/**  Playlist Loop */}
                                <div className="favorites-list">                                                  
                                    {favorites.map((name, i) => {
                                        return (
                                            <h2 key={i}>{name}</h2>           
                                        )  
                                    })}
                                </div>       
                                </div>
                                <GifHandlerDesktop gif={gif} />
                                <div className="player d-flex centered" style={{'width':'100%'}}><PlayButton/></div>
                            </div>
                        </Col>
                        <Col span={20} offset={4} className="static-content-center">
                            <DashboardContent span={isOpen ? 13 : width} row={isOpen ? 'flex-start': 'left-marg space-around'} />   
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