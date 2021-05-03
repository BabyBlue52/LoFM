import React, { useState, useEffect, useContext } from 'react';
import {Row, Col, Badge, Drawer} from 'antd';
import { AiOutlineSmile, AiFillHeart, AiOutlineSearch, AiOutlineInbox, AiOutlineMenu, AiOutlineClose, AiOutlineUser } from 'react-icons/ai';
import { BsFillChatSquareFill } from 'react-icons/bs';
import { PortalWithState } from 'react-portal';
import { connect, useDispatch } from 'react-redux';

import SearchPage from '../pages/Search';
import FavePage from '../pages/Favorites';
import SupportPage from '../pages/Support';
import { logout, loadUser } from '../_redux/actions/authAction';
import store from '../_redux/createStore';

export function PushMenu(props) {
    const [menuOpen, setMenuOpen] = useState(false);
    const [visible, setVisible] = useState(false);
    const [placement,setPlacement] = useState('bottom');
    const [login, setLogin] = useState(false);
    const [load, setLoad] = useState(false);
    // Using Redux
    const dispatch = useDispatch();
    var token = localStorage.getItem("token")

    function openDrawer(){
        setMenuOpen(true)
        setVisible(true)
    }

    function closeDrawer(){
        setMenuOpen(false)
        setVisible(false)
    }

    function logOut() {
        dispatch(logout(token));
    }

    useEffect(()=>{
        if (token === null) {
            // User is signed in.
            setLogin(!login);
            setLoad(load === true);
        } else {

        }
    },[])

    if(window.location.pathname === '/login') {
        return null;
    }
    if(window.location.pathname === '/sign-up') {
        return null;
    } else 
        return (
            <React.Fragment>
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
            <Drawer
                placement= {placement}
                closable={false}
                onClose={closeDrawer}
                visible={visible}
            >
                <Row className="drawer-end ">
                    {/* Log In */}
                    <Row>
                        <Col>
                            <p>{ login === false ? 'Log Out' : 'Log In' }</p>
                        </Col>
                        <Col onClick={closeDrawer}>
                            <button className="menu-round" onClick={logOut}>
                                <a href="/login" >
                                    <AiOutlineUser/>
                                </a>
                            </button>
                        </Col>
                    </Row>
                        
                    {/* Chat Portal */}
                    <Row>
                        <Col>
                            <p>Messages</p>
                        </Col>
                       
                        <Col onClick={closeDrawer}>
                            <button className="menu-round" >
                                <a href="/chat">
                                    <Badge dot={props}>
                                        <BsFillChatSquareFill stroke="white" class="chat-icon" />
                                    </Badge>
                                </a>            
                            </button>
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
                            <a href="/support">
                                <button className="support-round">
                                    <AiOutlineSmile />
                                </button>  
                            </a>
                        </Col>
                    </Row>
        
                </Row>
            </Drawer>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });
  
export default connect(mapStateToProps, { logout })(PushMenu); 