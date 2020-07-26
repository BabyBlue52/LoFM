import React, { useState, useEffect} from 'react';
import { Row, Col } from 'antd';

import { BackButton } from '../components/Button';

import { auth } from '../base';
import { db } from '../base';

export function Chat(props) {
    const [state, setState] = useState({
        user: '',
        chats:[],
        content: '',
        readError:'',
        writeError:''
    })
    const [user, setUser] = useState({
        userName:'El Jeffe',
        color: '#02CC77',
        thumbnail: 'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
    })
    const [post, setPost] = useState({
        timeStamp:'July 24th 2020',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor accumsan, eleifend justo at, sodales lectus. Donec metus risus, tristique sit amet leo faucibus, posuere posuere ipsum.'
    })
    useEffect(() => {    
        setState({ readError:null })
        try {
            db.ref("chats").on("value", snapshot => {
                let chats = [];
                snapshot.forEach((snap) => {
                    chats.push(snap.val());
                });
                setState({ chats })
            })
        }
        catch(error) {
            setState({readError: error.message})
        }
    },[])
    if (window.innerWidth < 400 ) {
        return (
            <>  
                <Row style={{'width':'100%'}}>
                    <Col span={24} className="justify-center">
                        <h3 className="chat-title">{props.snippet} chat</h3>
                    </Col>
                </Row>
                {/* Chat API Body */}        
                <Row style={{'width':'90%','margin':'0 auto'}}>
                    <Col span={24}>
                        <div className="temps"></div>   
                    </Col>
                </Row>
            </>
        )
    }
    return (
        <>
            <div style={{"color":"white"}}>
                <Row>
                    <Col span={24} className="justify-center">
                        <h3 className="chat-title">{props.channelName} chat</h3>
                    </Col>
                </Row>
                <Row className="message-container">
                    <Col span={24}>
                        <div className="post">
                            <div className="op">
                                <img src={user.thumbnail} alt="" style={{'borderColor':`${user.color}`}}/>
                            </div>
                            <div className="post-content">
                                    <p style={{'color':`${user.color}`}}>{user.userName}<span className="post-timestamp">
                                    {post.timeStamp}
                                </span></p>
                                <div className="post-body">
                                    {post.content}
                                </div> 
                            </div> 
                        </div>
                    </Col>
                </Row>
                <Row className="chat-modifier">
                    <Col span={24}>
                        <p>Little buddy</p>
                    </Col>
                </Row>
            </div>
        </>
    )
}
