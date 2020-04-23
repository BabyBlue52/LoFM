import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdChatBubble } from 'react-icons/md';
import { Tooltip } from "antd";
import { FaPlay, FaPlus, FaCheck } from 'react-icons/fa';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import {PortalWithState } from 'react-portal';

import Modal from '../components/Modal';

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
        <PortalWithState closeOnOutsideClick closeOnEsc>
            {({ openPortal, closePortal, isOpen, portal }) => (
                <React.Fragment>
                <button className="chat-btn" onClick={openPortal}>
                    <MdChatBubble className="chat-bubble"/>
                    <p>Join Chat</p>
                 </button>
                {portal(
                    <Modal onClose={closePortal}/>
                )}
                </React.Fragment>
            )}
        </PortalWithState> 
           
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

export { Button, ChatButton, PlayButton, FavoriteButton };