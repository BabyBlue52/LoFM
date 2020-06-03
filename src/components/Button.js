import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { MdChatBubble } from 'react-icons/md';
import { Tooltip } from "antd";
import { FaPlay, FaPlus, FaCheck } from 'react-icons/fa';
import { AiFillHome } from 'react-icons/ai';
import {PortalWithState } from 'react-portal';
import { GoogleLogin, GoogleLogout } from 'react-google-login';

import { LoginPage } from '../pages/Login';
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
    const openChat = () => {
        window.location.href('/login')
    }
    return ( 
        <React.Fragment>
            <button className="chat-btn" onClick={openChat}>
                <MdChatBubble className="chat-bubble"/>
                <p>Join Chat</p>
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

// Google Sign on page
function GoogleButton(props) {
    const { client_id } = config;
    const [state, setState] = useState({
        isLoggedIn: false,
        accessToken: ''
    })

    const responseGoogle = (response) => {
        console.log(response);
    }
   
  function login (response, props) {
    if(response){
      setState(state => ({
        isLogined: true,
        accessToken: response.accessToken
      })
      );
      console.log(response);
    }
  }

  function logout () {
    setState(state => ({
      isLogined: false,
      accessToken: ''
    }));
    console.log('logout')
  }

    return(
        <div className='google-btn'>
            {state.isLoggedIn ? 
            <GoogleLogout
            clientId={client_id}
            buttonText="Logout"
            onSuccess={logout}
            />
            :
            <GoogleLogin
            clientId= {client_id}
            buttonText="Sign in wih Google"
            onSuccess={login}
            onFailure={responseGoogle}
            cookiePolicy={'single_host_origin'}
            responseType='code,token'
            />  
          }
        </div>
    )
}

export { Button, BackButton, SignInButton, ChatButton, PlayButton, FavoriteButton, GoogleButton };