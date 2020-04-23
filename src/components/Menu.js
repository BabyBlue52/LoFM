import React from 'react';
import {Row, Col, Badge } from 'antd';
import { AiOutlineSmile, AiFillHeart, AiOutlineSearch, AiOutlineInbox, AiFillHome } from 'react-icons/ai';
import { GiSoundWaves } from 'react-icons/gi';
import { PortalWithState } from 'react-portal';

import SearchPage from '../pages/Search';

export function Menu(props) { 
    return(
        <Row type="flex" className="menu">
            <Col>
                <button className="support">
                    <AiOutlineSmile />
                </button>            
            </Col>
            <Col>
                <button className="favorite">
                    <AiFillHeart/>
                </button>
            </Col>
            <Col>
                <a href="/">
                <div className="menu-item" style={{"marginTop":"-2px"}}>
                    <AiFillHome />    
                </div>
                </a>    
            </Col>
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
            <Col>
                <button className="menu-item">
                    <Badge dot={props}>
                        <AiOutlineInbox/>
                    </Badge>            
                </button>
            </Col>
        </Row>
    )
}