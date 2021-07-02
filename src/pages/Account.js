import React, { useState } from 'react';
import { Link, Redirect } from 'react-router-dom';
import { useFormik } from 'formik';
import { Row, Col, notification } from 'antd';
import { AiOutlineMail, AiOutlineLock, AiOutlineSmile, AiOutlineCamera} from 'react-icons/ai';
import { connect, useDispatch } from 'react-redux';

import { SignInButton, HomeButton } from '../components/Button';
import { Spinner } from '../components/animation';
import { deleteUser } from '../_redux/actions/authAction';
import store from '../_redux/createStore';


export function AccountPage(props) {
    const [state, setState] = useState({
        emailError: false,
        passwordError: false,
        isAuthenticated: true,       
    })
    const [isLoading, setIsLoading] = useState(false);
    const [hasAvatar, setHasAvatar] = useState(false);
    const [showWarning, setShowWarning] = useState(false);
    const [email, setEmail] = useState(false);
    const [password, setPassword] = useState(false);
    
    // Properly load dispatch REDUX
    const dispatch = useDispatch();

    // Hook for formik 
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
            password2: '',
        }
    });

    const checkPassword = () => {
        if (formik.values.password === formik.values.password2) {
            const updateUser = {
                email: formik.values.email,
                password: formik.values.password 
            }
        } else {
            state.passwordError(true)
        }
    }

    // Preview Thumbnail Avatar
    const previewImage = () => {
        let oFReader = new FileReader();
        oFReader.readAsDataURL(document.getElementById("uploader").files[0]);

        oFReader.onload = function (oFREvent) {
            document.getElementById("upload-preview").src = oFREvent.target.result;
        };
        setHasAvatar(true)
        
    } 

    // Delete Account
    const confirmDelete = () => {
        if (store.getState().auth.token !== null ) {
            setTimeout(function(){
                dispatch(deleteUser);
                deleteNotification();
                window.location = "/"
            }, 2000);
        } else {
            console.log("You aren't logged in")
        }
        
    }

    const onSubmit = (e) => {
        e.preventDefault();
        setIsLoading(true)
        setTimeout(function(){
            saveNotification();   
            setIsLoading(false)
        }, 1750)
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

    const toggleEmail = () => {
        setEmail(!email)
    }

    const togglePassword = () => {
        setPassword(!password)
    }

    if (state.isAuthenticated === false) {
        return  (
            <>
            <HomeButton label="Return Home" />
            <div className="account-container">     
                <div className="account-settings _dropShadow">
                    <Row >
                        <div className="super-spacer"/>
                        <Col span={24} offset={2}>
                            <h1>please Log in to change account settings</h1>
                        </Col>
                    </Row>
                </div>
            </div>
            </>
        );
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
                                <p> This action will delete all information that you have given LoFM, including email, username, password, playlists, and user settings</p>
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
                                        <button type="button" className="delete-btn" onClick={confirmDelete}><p> Yes, I'm Sure</p></button>
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
                                { hasAvatar ?  <img id="upload-preview" loading="lazy" /> : <AiOutlineSmile/> }

                            </div>
                            <button className="camera-btn" type="button">
                                <AiOutlineCamera/>
                                <input type="file" id="uploader" onChange={previewImage} />
                            </button>
                        </Col>
                        <Col offset={1} span={18} className="column">
                            <Row>
                            <div className="d-flex column">
                                <h3>username</h3>
                                <h1><span>@</span>SomeDonkus</h1>
                            </div>
                            </Row>
                            
                            <Row>
                                <Col span={12}>
                                    <div className="d-flex column">
                                        <h3>email</h3>
                                        <div className="account-change d-flex">
                                            <h4>name@email.com</h4>
                                            <button type="button" onClick={toggleEmail} className={email ? 'open' : null}> change?</button>
                                        </div>
                                        { email ? 
                                            <>
                                                <h3>New Email</h3>
                                                <input 
                                                    type="email" 
                                                    name="email" 
                                                    onChange={formik.handleChange} 
                                                    value={formik.values.email}
                                                    className={state.emailError ? 'error-input' : 'account'}
                                                />
                                            </>
                                            : null
                                        }
                                        
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div className="d-flex column">
                                        <h3>password</h3>
                                        <div className="account-change d-flex">
                                            <p>·········</p>
                                            <button type="button" onClick={togglePassword} className={password ? 'open' : null}> change?</button>
                                        </div>
                                        { password ? 
                                            <>
                                                <h3>New Passowrd</h3>
                                                <input 
                                                    name="password" 
                                                    type="password" 
                                                    onChange={formik.handleChange} 
                                                    value={formik.values.password}
                                                    className="account" 
                                                />
                                                <h3 style={{"marginTop":"20px"}}>Confirm Passowrd</h3>
                                                <input 
                                                    name="password2" 
                                                    type="password" 
                                                    onChange={formik.handleChange} 
                                                    value={formik.values.password2} 
                                                    className={state.passwordError ? 'error-input' : 'account'}
                                                />
                                            </>
                                            : null
                                        }
                                    
                                    </div>    
                                </Col>
                            </Row>
                        </Col>
                        <div className="spacer"/>
    
                        {/* Delete Account */}
                        <Col span={18} offset={4}>
                            <Row className="account-delete">
                            <h2>Delete Account?</h2>
                            <p> This action will delete all information that you have given LoFM, including email, username, password, playlists, and user settings</p>
                                <Col span={6} offset={17}>
                                    <button type="button" className="delete-btn" onClick={toggleWarning}><p>Delete Account</p></button>
                                </Col>
                                { showWarning ?
                                    <div>
                                        <p>This action cannot be undone</p>
                                        <Col span={20} className="confirm-delete">
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
                        <Col span={4} offset={16}>
                        <button type="submit" className="save-btn">
                                     <p>
                            {isLoading ? 
                                <Spinner/>
                            : 
                                'Save Settings' 
                            }</p> 
                                </button>
                            
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