import React, { useState, useEffect } from 'react';
import { useDispatch } from 'redux';
import { Row, Col, Input, Badge } from 'antd';
import { MdClose } from 'react-icons/md';
import { BsFillChatSquareFill } from 'react-icons/bs'

import { Button } from '../components/Button';
import { GifHandlerDesktop } from '../components/GifHandler';
import { DashboardHeader } from '../components/DashboardHeader';
import { DashboardTuner } from '../components/DashoboardTuner';

import gif from '../img/gif/chilledCow.gif';

export default function Dashboard(props){
    const [isOpen, setIsOpen] = useState(false)
    
    const toggleChatDrawer = () => {
        setIsOpen(!isOpen);
    }
    return(
        <React.Fragment>
            {/** Header bar */}
            <Row>
                <DashboardHeader />
            </Row>
            {/** Dashboard Content */}
            <Row className="dashboard-container">
                <Col span={!isOpen ? 14 : 23}>
                    <Row style={{'width':'100%',}}>
                        <Col span={6} style={{'maxWidth':'300px'}}> 
                            <div className="channel-container">
                                <h1 className="channel-header">#Channels</h1>
                                <div className="favorites-list"></div>
                                <GifHandlerDesktop gif={gif} />
                            </div>
                        </Col>
                        <Col span={24} style={{'maxWidth':'calc(100% - 300px)'}}>
                            <DashboardTuner span={!isOpen ? 13 : 10} offset={isOpen ? 1 : 4}/>
                        </Col>
                    </Row>
                </Col>
                
                
                {/** Chat Section */}
                <Col span={!isOpen ? 10 : 1} style={{'paddingLeft':'10px'}}>
                    <div style={{'marginRight':'-16px'}}>
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
                    </div>
                    <div style={{'width':'100%', 'background':'#26262b','height': '100%'}}></div>
                </Col>
            </Row>
        </React.Fragment>

    )
}