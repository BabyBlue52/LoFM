import React, { useState, useEffect } from 'react';
import {Row, Col, Badge, Drawer} from 'antd';
import { AiOutlineSmile, AiFillHeart, AiOutlineSearch, AiOutlineInbox, AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { PortalWithState } from 'react-portal';
import Draggable from 'react-draggable'

import SearchPage from '../pages/Search';
import InboxPage from '../pages/Inbox';
import FavePage from '../pages/Favorites';
import SupportPage from '../pages/Support';

import fire from '../base';


function PushMenu(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [placement,setPlacement] = useState('bottom');
    const [login, setLogin] = useState(false);
        
    function openDrawer(){
        setMenuOpen(true)
        setVisible(true)
    }

    function closeDrawer(){
        setMenuOpen(false)
        setVisible(false)
    }

    useEffect(()=>{
        fire.auth().onAuthStateChanged(function(user) {
            if (user) {
              // User is signed in.
              setLogin(!login);
            } else {

            }
            });
    },[])

    if(window.location.pathname === '/login' && 'signup') {
      return null;
    } else 
        return (
            <React.Fragment>
            <Draggable handle="#menu-floaty">
                <Row id="menu-floaty">
                    <Col span={2}>
                    {!menuOpen ?
                        <button className="menu-btn _dropShadow" onClick={openDrawer}>
                            <AiOutlineMenu />
                        </button>
                            :
                        <button className="menu-btn-closed _dropShadow" onClick={closeDrawer}>
                            <AiOutlineClose />
                        </button>
                        }
                    </Col>
                </Row>
            </Draggable>
            <Drawer
                placement= {placement}
                closable={false}
                onClose={closeDrawer}
                visible={visible}
                key={placement}
            >
                <Row className="drawer-end ">
                    {/* Log In */}
                    <Row>
                        <Col>
                            { login === login ? <p>Log Out</p> : <p>Log In</p> }
                        </Col>
                        <Col onClick={closeDrawer}>
                            <a href="/login">
                            <button className="menu-round" onClick={() => fire.auth().signOut()}>
                                <AiOutlineUser/>
                            </button>
                            </a>
                        </Col>
                    </Row>
                        
                    {/* Inbox Portal */}
                    <Row>
                        <Col>
                            <p>Messages</p>
                        </Col>
                        <Col onClick={closeDrawer}>
                            <PortalWithState closeOnOutsideClick closeOnEsc>
                            {({ openPortal, closePortal, isOpen, portal }) => (
                                <React.Fragment>
                                    <button className="menu-round" onClick={openPortal}>
                                        <Badge dot={props}>
                                            <AiOutlineInbox/>
                                        </Badge>            
                                    </button>
                                    {portal(
                                        <InboxPage onCloseInbox={closePortal}/>
                                    )}
                                </React.Fragment>
                            )}
                            </PortalWithState> 
                        </Col>
                    </Row>
                    
                    {/* Search Portal */}
                    <Row > 
                        <Col>
                            <p>Search</p>
                        </Col>
                        <Col onClick={closeDrawer}>
                            <PortalWithState closeOnOutsideClick closeOnEsc>
                            {({ openPortal, closePortal, isOpen, portal }) => (
                                <React.Fragment>
                                    <button className="menu-round" onClick={openPortal}>
                                        <AiOutlineSearch/>    
                                    </button>
                                    {portal(
                                        <SearchPage onReturn={closePortal}/>
                                    )}
                                </React.Fragment>
                            )}
                            </PortalWithState> 
                        </Col>
                    </Row>

                    {/* Favorites Playlist */}
                    <Row>
                        <Col>
                            <p>Favorites</p>
                        </Col>
                        <Col onClick={closeDrawer}>
                        <PortalWithState closeOnOutsideClick closeOnEsc>
                        {({ openPortal, closePortal, isOpen, portal }) => (
                            <React.Fragment>
                                <button className="favorite-round" onClick={openPortal}>
                                    <AiFillHeart/>
                                </button>
                                {portal(
                                    <FavePage onCloseFave={closePortal}/>
                                )}
                            </React.Fragment>
                        )}
                        </PortalWithState> 
                    </Col>
                    </Row>
                
                    {/* Support the Troops */}
                    <Row>  
                        <Col>
                            <p>Support Us</p>
                        </Col>
                        <Col onClick={closeDrawer}>
                            <PortalWithState closeOnOutsideClick closeOnEsc>
                            {({ openPortal, closePortal, isOpen, portal }) => (
                                <React.Fragment>
                                    <button className="support-round" onClick={openPortal}>
                                        <AiOutlineSmile />
                                    </button>     
                                    {portal(
                                        <SupportPage onCloseSupport={closePortal}/>
                                    )}
                                </React.Fragment>
                            )}
                            </PortalWithState> 
                        </Col>
                    </Row>
        
                </Row>
            </Drawer>
        </React.Fragment>
    )
}
export { PushMenu }