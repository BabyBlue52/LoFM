import React, { useState, useEffect } from 'react';
import { Row, Col, Badge, Input, notification } from 'antd';
import { AiOutlineSmile, AiOutlineSearch, AiOutlineInbox } from 'react-icons/ai';
import { connect } from 'react-redux'; 
import axios from 'axios';
import { Link } from 'react-router-dom';

import store from '../_redux/createStore';
import { loadUser } from '../_redux/actions/authAction';
import { Button } from './Button'; 

export function DashboardHeader(props){
    const [state,setState] = useState({})

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
            <Row className="dashboard-header">
                <Col span={6} style={{'justifyContent':'end'}}>
                    <button className="profile-icon">
                        <AiOutlineSmile/>
                    </button>
                    <a href="/login" style={{'marginRight':'20px'}}>
                        <Button name="Log In"></Button>
                    </a>
                    <a href="/sign-up">
                        <Button name="Sign Up"></Button>
                    </a>
                </Col>
                <Col span={12}>
                    <Input className="dashboard-search" prefix={<AiOutlineSearch/>} size="middle" />
                </Col>
                <Col span={5} style={{'justifyContent':'flex-end'}}>
                    <Link to="/support-us">
                    <button className="support-btn">
                        <p>Support Us</p>    
                    </button>
                    </Link>
                </Col>
                <button className="dashboard-inbox">
                    <Badge dot={props}>
                        <AiOutlineInbox/>
                    </Badge>            
                </button>
            </Row>
        </React.Fragment>
    )
}