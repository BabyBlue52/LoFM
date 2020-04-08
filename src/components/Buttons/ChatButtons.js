import React, { useState } from 'react';
import { MdChatBubble} from 'react-icons/md';
import { FaPlay, FaPause } from 'react-icons/fa';

// Chat button
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

// Play Button
function PlayButton() {
    const [state, setState] = useState(false);

    function  handleClick() {
        setState(!state);
    }

    return(
        <>
            <button className="play-btn" onClick={handleClick}>
                {!state ? <FaPlay/> : <FaPause/> }
                
            </button>
        </>
    )
}

export { ChatButton, PlayButton };