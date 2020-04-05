import React from 'react';
import { MdChatBubble} from 'react-icons/md';

function ChatButton() {
    return (
        <>
           <button className="chat-btn">
                    <MdChatBubble className="chat-bubble"/>
                    <p>Watch Chat</p>
           </button>
        </>
    )
}

export  { ChatButton };

