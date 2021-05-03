import React, { useState } from 'react';
import { MdChatBubble } from 'react-icons/md';
import { Tooltip } from "antd";
import { FaPlay, FaPlus, FaCheck } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import {PortalWithState } from 'react-portal';

import config from '../apis';
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

//Sign In Button
function SignInButton(props) {
    return(
        <>
            <button className="signin-btn"> 
                <p>{props.name}</p>
            </button>
        </>
    )
}

//Back Button
function BackButton(props) {
    return(
        <>
            <button className="home-btn">
                <a href="/">
                <AiFillHome/><p>{props.label}</p>
                </a>
            </button>
        </>
    )
}

// Chat button
function ChatButton(props) {
    return ( 
        <React.Fragment>
   
            <button className="chat-btn">
                <MdChatBubble className="chat-bubble"/>
    <p>Join {props.name}Chat</p>
            </button>

        </React.Fragment>
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
// Playlist Button 
function PlaylistButton(props) {
    return (
        <>  
            <button className="playlist-btn" href={props.playlist}>
                <p>Listen on Spotify</p>
            </button>
        </>
    )
} 

// Favorite Button
function FavoriteButton() {
    const [icon, setIcon] = useState(false);
    const favorited = 'Added to Favorites';

    function  handleFavorite() {
        setIcon(!icon);

    } 

    return (
        <div>
            <Tooltip 
                getPopUpContianer={() =>  document.getElementById('root')} 
                title={icon ? favorited : 'Removed from Favorites'} 
                placement="top"
                trigger="click" 
            >
                <button className="add-btn justify-center " onClick={handleFavorite}>
                    {icon ? <FaCheck/> : <FaPlus/> }
                </button>
            </Tooltip>
        </div>
    )
}


export { Button, BackButton, SignInButton, ChatButton, PlayButton, FavoriteButton, PlaylistButton };