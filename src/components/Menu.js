import React from 'react';
import {Row, Col, Badge } from 'antd';
import { AiOutlineSmile, AiFillHeart, AiOutlineSearch, AiOutlineInbox, AiFillHome } from 'react-icons/ai';
import { PortalWithState } from 'react-portal';

import SearchPage from '../pages/Search';
import InboxPage from '../pages/Inbox';
import FavePage from '../pages/Favorites';
import SupportPage from '../pages/Support';

export function Menu(props) { 
    return(
        <Row type="flex" className="menu">
            {/* Support the Troops */}
            <Col>
                <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => (
                    <React.Fragment>
                        <button className="support" onClick={openPortal}>
                            <AiOutlineSmile />
                        </button>     
                        {portal(
                            <SupportPage onClose={closePortal}/>
                        )}
                    </React.Fragment>
                )}
                </PortalWithState> 
            </Col>
            
            {/* Favorites Playlist */}
            <Col>
                <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => (
                    <React.Fragment>
                        <button className="favorite" onClick={openPortal}>
                            <AiFillHeart/>
                        </button>
                        {portal(
                            <FavePage onCloseFave={closePortal}/>
                        )}
                    </React.Fragment>
                )}
                </PortalWithState> 
            </Col>

             {/* Home */}
            <Col>
                <a href="/">
                <div className="menu-item" style={{"marginTop":"-2px"}}>
                    <AiFillHome />    
                </div>
                </a>    
            </Col>

            {/* Search Portal */}
            <Col>
                <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => (
                    <React.Fragment>
                        <button className="menu-item" onClick={openPortal}>
                            <AiOutlineSearch/>    
                        </button>
                        {portal(
                            <SearchPage onReturn={closePortal}/>
                        )}
                    </React.Fragment>
                )}
                </PortalWithState> 
            </Col>

             {/* Inbox Portal */}
            <Col>
                <PortalWithState closeOnOutsideClick closeOnEsc>
                {({ openPortal, closePortal, isOpen, portal }) => (
                    <React.Fragment>
                        <button className="menu-item" onClick={openPortal}>
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
    )
}