import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdChatBubble } from 'react-icons/md';
import { Tooltip } from "antd";
import { FaPlay, FaPlus, FaCheck } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';

import { SoundWave } from './animation';

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
           <button className="chat-btn" onClick={()=> console.log('action')}>
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
                {!state ? <FaPlay /> : <SoundWave/> }
                
            </button>
        </>
    )
}

// Favorite Button
function FavoriteButton() {
    const [icon, setIcon] = useState(false);
    const favorited = 'Added to Favorites';

    function  handleClick() {
        setIcon(!icon)
    }
   
    function logged() {
       console.log('added to playlist')
    }

    return (
        <div>
            <Tooltip 
                getPopUpContianer={() =>  document.getElementById('root')} 
                title={icon ? favorited : 'Removed from Favorites'} 
                placement="top"
                trigger="click" 
                onTouchEnd={logged}
            >
                <button className="add-btn justify-center " onClick={handleClick}>
                    {icon ? <FaCheck/> : <FaPlus/> }
                </button>
            </Tooltip>
        </div>
    )
}
// Back Button
function BackButton() {
    let history = useHistory();
    
    function handleBack() {
        history.goBack();
    }

    return (
        <>
            <button className="back-btn" onClick={handleBack}>
                <AiOutlineArrowLeft />
            </button>
        </>
    )
}

export { Button, ChatButton, PlayButton, FavoriteButton, BackButton };