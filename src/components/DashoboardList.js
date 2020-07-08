import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai' 

import _ from 'lodash';

export function DashboardList(props) {
    const [channels,setChannels] = useState([
        {
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
    ])
      
    return (
        <React.Fragment>
            <div className="card-container">
                <div className="super-spacer"></div>
                
                    <Row justify="start" className={props.row}>
                    {channels.map((item, i) => {
                        return (
                            <Col span={props.span} style={{'flexDirection':'start'}}>
                                <div key={i} className="artist-card _dropShadow">
                                    <div className="_lightGradient">
                                        <Row>
                                            <Col span={2}>
                                                <button className="add-btn">
                                                    {item.favorited ? <AiOutlineCheck/> : <AiOutlinePlus/> }
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
        </React.Fragment>
    )
}