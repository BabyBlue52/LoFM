import React, { useState, useEffect} from 'react';
import { Row, Col } from 'antd';
import { MdSend } from 'react-icons/md';

import { ChatBubble } from './ChatBubble';
import { ChatInput } from './ChatInput';
import { GiphyKeyboard } from './GiphyKeyboard';

export function Chat(props) {
    const [user, setUser] = useState({
        userName:'El Jeffe',
        color: '#02CC77',
        thumbnail: 'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
    })
    const [post, setPost] = useState({
        timeStamp:'July 24th 2020',
        content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut tortor accumsan, eleifend justo at, sodales lectus. Donec metus risus, tristique sit amet leo faucibus, posuere posuere ipsum.'
    })
    const [messages,setMessages] = useState([])

    var connection = new WebSocket('ws://localhost:9090/') 

    const getMessage = (message) => {
        setTimeout(()=> {
            var data = {username: 'Chris', content: message}
            connection.send(JSON.stringify(data))
        }, 250)
        
        // console.log(messages)
    }
    const sendMessage = () => {
        console.log('send it')
    }

    useEffect(() => {    
        connection.onmessage = (message) => {
            const data = JSON.parse(message.data)
            setMessages([...messages, data])
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
    else { 
        return (
        <div > 
            <Row>
                <Col span={24} className="justify-center">
                    <h3 className="chat-title">{props.channelName} chat</h3>
                </Col>
            </Row>
            <Row className="broadcast">
                <Col span={24}>
                 {messages.map(message => 
                    <div>
                        <ChatBubble
                        userName={message.username}
                        content={message.content} 
                        />
                    </div>
                )}
                </Col>
            </Row>

            <Row >
                <Col span={props.animate} className="chat-modifier">
                    <div className="chat-gif">
                        <GiphyKeyboard sendGif={sendMessage}/>
                    </div>
                    <ChatInput getMessage={getMessage}/>
                    <button className="gif-btn send">
                        <div className="send-icon">
                            <MdSend/>
                            SEND
                        </div>
                    </button>
                </Col>
            </Row>
        </div>
        )
    }
}
