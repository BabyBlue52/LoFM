import React, { useState } from 'react';
import { MdChatBubble} from 'react-icons/md';
import { FaPlay, FaPause, FaPlus, FaCheck } from 'react-icons/fa';

// Default Button 
function Button(props) {
    return(
        <>
            <button className="default-btn">
                <p>{props.name}</p>
            </button> 
        </>
    )
}

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

// Favorite Button
function FavoriteButton() {
    const [icon, setIcon] = useState(false);

    function  handleClick() {
        setIcon(!icon);
    }

    return (
        <div>
            <button class="add-btn justify-center " onClick={handleClick}>
                {icon ? <FaCheck/> : <FaPlus/> }
            </button>
        </div>
    )
}


export { Button, ChatButton, PlayButton, FavoriteButton };