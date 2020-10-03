import React, { useState, useEffect} from 'react';
import { Row, Col } from 'antd';
import { MdSend } from 'react-icons/md';
import firebase from 'firebase/app';
import 'firebase/firestore';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import { ChatBubble } from './ChatBubble';
import { GiphyKeyboard } from './GiphyKeyboard';
import firebaseConfig from '../config';

firebase.initializeApp(firebaseConfig)

const firestore = firebase.firestore();

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
    const [isOpen, setIsOpen] = useState(false);
    const [formValue, setFormValue] = useState('')
    const messagesRef = firestore.collection('messages');
    const query = messagesRef.orderBy('createdAt').limit(25); 

    const [messages] = useCollectionData(query);

    const sendMessage = async(e) => {
        console.log(formValue);
        setFormValue();
        await messagesRef.add({
            text: formValue,
            createdAt: firebase.firestore.FieldValue.serverTimestamp(),
        })
        
    }

    const handleKeyPress = (e) => {
        if (e.charCode === 13) {
            sendMessage();
            toggleOpen();
        }
    }
    function toggleOpen() {
        setIsOpen(!isOpen);
    }
    useEffect(() => {    

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
                <Row style={{'width':'90%','margin':'0 auto'}}>
                    <Col span={24} className="chat-modifier">
                        <div className="chat-gif">
                            <GiphyKeyboard sendGif/>
                        </div>

                        {/** Input **/}
                        <div className="message">
                            <textarea onKeyPress={handleKeyPress} value={formValue} placeholder="Type Something..." onChange={(e) => setFormValue(e.target.value)} onClick={toggleOpen}/>
                        </div>
                        <button className="gif-btn send" onClick={sendMessage}>
                            <div className="send-icon">
                                <MdSend/>
                                SEND
                            </div>
                        </button>
                        
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
                    {messages && messages.map(msg => 
                        <ChatBubble  key={msg.id} message={msg}/>
                    )}
                </Col>
            </Row>

            <Row >
                <Col span={props.animate} className={isOpen ? "open chat-modifier" : "chat-modifier"}>
                    <div className="chat-gif">
                        <GiphyKeyboard sendGif />
                    </div>
                    {/** Input **/}
                    <div className="message">
                        <textarea onKeyPress={handleKeyPress} value={formValue} placeholder="Type Something..." onChange={(e) => setFormValue(e.target.value)} onClick={toggleOpen}/>
                    </div>
                    <button className="gif-btn send" onClick={sendMessage}>
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
