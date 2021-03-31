import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { Row, Col, notification } from 'antd';
import { AiOutlineMail, AiOutlineLock, AiOutlineSmile, AiOutlineCamera} from 'react-icons/ai';
import { connect, useDispatch } from 'react-redux';

import * as Yup from "yup";

import Logo from '../img/logo.svg';
import { SignInButton, HomeButton } from '../components/Button';
import { Loader } from '../components/animation';
import { login } from '../_redux/actions/authAction';
import { returnErrors } from '../_redux/actions/messageAction';
import store from '../_redux/createStore';
import { has } from 'lodash';


export function AccountPage(props) {
    const [state, setState] = useState({
        isChecked: false,
        hasAvatar: false 
    })
    const [hasAvatar, setHasAvatar] = useState(false)
    const [showWarning, setShowWarning] = useState(false);
    // Hook for formik 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        }
    });

    const previewImage = () => {
        let oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("uploader").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("upload-preview").src = oFREvent.target.result;
        };
        setHasAvatar(true)
        console.log(state.hasAvatar)
    } 

    const onSubmit = (e) => {
        e.preventDefault();
        console.log("Account Saved")
        saveNotification();
    }

    const saveNotification = () => {
        notification.open({
            message: 'Successfully saved profile',
            className: 'lo-success',
            placement: 'bottomLeft',
            duration: 4.5
          })
    }

    const deleteNotification = () => {
        notification.open({
            message: 'Successfully deleted profile',
            className: 'lo-success',
            placement: 'bottomLeft',
            duration: 4.5
          })
    }
    const toggleWarning = () => {
        setShowWarning(!showWarning)
    }

    const deleteUser = () => {
        deleteNotification();
        window.location = "/"
    }
    if (window.innerWidth < 1024) {
        return (
            <div className="account-mobile">
                <h1>Account Settings</h1>
                <div className="container-mobile">
                    <form onSubmit={onSubmit}>    
                        <Row>
                            <Col span={12} offset={8}>
                            <img />
                            <div className="user-avatar">
                                { hasAvatar ?  <img id="upload-preview" /> : <AiOutlineSmile/> }

                            </div>
                            <button className="camera-btn" type="button">
                                <AiOutlineCamera/>
                                <input type="file" id="uploader" onChange={previewImage} />
                            </button>
                            </Col>
                        </Row>
                        <div className="spacer"/>

                        {/* Username */}
                        <Row className="d-flex column">
                            <Col><h3>Username</h3></Col>
                            <Col><h2><span>@</span>Some_Donkus</h2></Col>
                        </Row>
                        
                        {/* Email */}
                        <Row className="d-flex column">
                            <Col><h3>Email</h3></Col>
                            <Col><h2>name@email.com</h2></Col>
                        </Row>

                        {/* Delete Account */}
                        <Col span={24}>
                            <Row className="account-delete">
                                <h2>Delete Account?</h2>
                                <p> This action will delete all information that you have given LoFM, including email, name, password, playlists, and user settings</p>
                                <Col span={24}>
                                    <button type="button" className="delete-btn" onClick={toggleWarning}><p>Delete Account</p></button>
                                </Col>
                            </Row>    
                            
                        </Col>
                        <div className="spacer"/>

                        <Col span={24}>
                            { showWarning ?
                                <div className="account-delete">
                                    <p>This action cannot be undone</p>
                                    <Col span={24} className="confirm-delete column" style={{"marginLeft":"-5px"}}>
                                        <button type="button" className="delete-btn" onClick={deleteUser}><p> Yes, I'm Sure</p></button>
                                    {/* </Col>
                                    <Col span={24} className="confirm-delete"> */}
                                        <button type="button" className="default-btn"><p onClick={toggleWarning}> No, take me back</p></button>
                                    </Col>
                                </div>    
                                : null
                            }      
                        </Col>
                        <div className="spacer"/>
                        <Row>
                            <Col span={24}>
                                <button type="submit" className="save-btn"><p>Save Settings</p> </button>
                            </Col>
                            <Col span={24}>
                                <Link href="/" style={{"minWidth":"100%"}}>
                                    <button type="button" className="default-btn"><p> Cancel</p> </button>
                                </Link>                        
                            </Col>
                        </Row>
                    </form>
                    <div className="spacer"/>
                </div>
            </div>            
        )
    }
    return (
        <>
        <HomeButton label="Return Home" />
        <div className="account-container">     
            <div className="account-settings _dropShadow">
                <form onSubmit={onSubmit}>  
                    <h1>Account Settings</h1>
                    <Row >
                        <Col span={3}>
                            <img />
                            <div className="user-avatar">
                                { hasAvatar ?  <img id="upload-preview" /> : <AiOutlineSmile/> }

                            </div>
                            <button className="camera-btn" type="button">
                                <AiOutlineCamera/>
                                <input type="file" id="uploader" onChange={previewImage} />
                            </button>
                        </Col>
                        <Col offset={1} span={18} className="column">
                            
                            <div className="d-flex column">
                                <h3 style={{"text-align":"left"}}>username</h3>
                                <h1><span>@</span>SomeDonkus</h1>
                            </div>
                            
                            <div className="d-flex column">
                                <h3 style={{"text-align":"left"}}>email</h3>
                                <p>name@email.com</p>
                            </div>
                        </Col>
                        
                    <Col span={6}>
                        <div className="circle"></div>
                    </Col>
                    <div className="spacer"/>
                    {/* <Col span={24}>
                        <h2>Notifications:</h2>
                    </Col>
                    <Col span={24}>    
                        <Row>    
                        <p>Some Setting the user can change</p>          
                            <input type="radio" value="option1" name="settings"/> <label className={ state.isChecked ? "checked" : ""}>Option 1</label>
                            <input type="radio" value="option2" name="settings"/> <label>Option 2</label>
                        </Row>
                    </Col> */}
                    
                        <Col span={18}>
                            <Row className="account-delete">
                            <h2>Delete Account?</h2>
                            <p> This action will delete all information that you have given LoFM, including email, name, password, playlists, and user settings</p>
                                <Col span={4} offset={17}>
                                    <button type="button" className="delete-btn" onClick={toggleWarning}><p>Delete Account</p></button>
                                </Col>
                                { showWarning ?
                                    <div>
                                        <p>This action cannot be undone</p>
                                        <Col span={24} className="confirm-delete">
                                            <button type="button" className="delete-btn" style={{"marginRight":"30px"}} onClick={deleteUser}><p> Yes, I'm Sure</p></button>
                                            <button type="button" className="default-btn"><p onClick={toggleWarning}> No, take me back</p></button>
                                        </Col>
                                    </div>
                                    
                                    
                                : ""
                                }    
                            </Row>   
                        </Col>
                    </Row>
                    <div className="spacer"/>
                    <Row>
                        <Col span={4} offset={17}>
                            <button type="submit" className="save-btn"> <p>Save Settings</p> </button>
                            <a href="/">
                                <button type="button"className="default-btn"><p> Cancel</p> </button>
                            </a>                        
                        </Col>
                    </Row>
                </form>
                <div className="spacer"/>
            </div>
        </div>
      </>
    );
  };

 
  
  export default AccountPage 