import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai';
import { Page } from 'framer';
import _ from 'lodash';

import  ChannelHolder  from '../components/ChannelHolder';

export function DashboardContent(props) {
    const [currentPage, setCurrentPage] = useState(1)
    const [channels,setChannels] = useState([
        {
            id: 1,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 2,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 3,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 4,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 5,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
    ])
      
    const handleClick = (event) => {
        console.log(event.target.id)
        setCurrentPage(1)
    }
    const ContainingRow = () => {
        return(
            <div className="card-container">
                <div className="super-spacer"></div>
                <Row justify="start" className={props.row}>
                </Row>
            </div>
        )   
    }
    return (
        <React.Fragment>
            <Page 
                className="scaling"
                direction="vertical"
                directionLock={true}
                dragEnabled={false}
                currentPage={currentPage}
            >
                <Page>
                    <div className="card-container">
                    <div className="super-spacer"></div>
                    
                        <Row justify="start" className={props.row}>
                        {channels.map((item, i) => {
                            return (
                                <Col span={props.span} style={{'flexDirection':'start'}} >
                                    <div key={i} id={item.id} className="artist-card _dropShadow" onClick={handleClick}>
                                        <div className="_lightGradient">
                                            <Row>
                                                <Col span={2}>
                                                    <button className="add-btn">
                                                         <AiOutlinePlus/>
                                                    </button>
                                                </Col>
                                                <Col offset={17} span={4}>
                                                    <img src={item.thumbnail} className="card-default" alt=""/>
                                                </Col>
                                            </Row>
                                                <h2>{item.title}</h2>
                                                <p>Subscribers<span>{item.subscriberCount}</span></p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        })}
                        </Row>
                    
                    <div className="super-spacer"></div>
                </div>
                </Page>

                {/**  The Bootleg Boy */}
                <Page>
                    <div className="page-container">
                        <div className="super-spacer"></div>
                        <ChannelHolder />
                    </div>
                </Page>
               
            </Page>
        </React.Fragment>
    )
}