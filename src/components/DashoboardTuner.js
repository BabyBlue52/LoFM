import React, { useState,useEffect } from 'react';
import { Row, Col, notification } from 'antd';
import { AiOutlineCheck, AiOutlinePlus } from 'react-icons/ai' 
import { connect } from 'react-redux'; 
import _ from 'lodash';
import axios from 'axios';

import store from '../_redux/createStore';
import { loadUser } from '../_redux/actions/authAction';

export function DashboardTuner(props) {
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

    const handleFavorite = (i) => {
        let path = 'favorited'
        _.set(channels, path, (!channels[i].favorited));

        console.log(i);
        console.log(_.get(channels[i], path))

    }    
    useEffect(() => {
        store.dispatch(loadUser());
        axios.get('https://dev.lofifm.com/api/info',{
            header: { Authorization: "Bearer " }
        })
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
        console.log(store.getState());
    }, [])   

    const favoriteNotification = () => {
        notification.open({
            className: "lo-welcome",
            message: 'Now Playing:',
            description: '',
            duration: 0,
            placement: "bottomLeft"
        });
      };     
    
    return (
        <React.Fragment>
            <div className="card-container">
                <div className="super-spacer"></div>
                <Row justify="start" >
                {channels.map((item, i) => {
                    return (
                        <Col span={props.span} >
                            <div key={i} className="artist-card _dropShadow">
                                <div className="_lightGradient">
                                    <Row>
                                        <Col span={2}>
                                            <button onClick={() => handleFavorite(i)} className="add-btn">
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