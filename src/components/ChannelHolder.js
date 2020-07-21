import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux'; 
import 'antd/dist/antd.css';

import { FavoriteButton } from './Button';
import { SongHandler } from './GifHandler';
import playlistAction from '../_redux/actions/playlistAction';
import actionTypes from '../_redux/actionTypes';
import store from '../_redux/createStore';

function ChannelHolder(props){
    const [isFavorited,setIsFavorited] = useState(false); 
    const dispatch = useDispatch();
    
    // Change REDUX state of channel in playlist
    function handleFavorite(){
        if (isFavorited === false) {
            setIsFavorited(!isFavorited);
            dispatch(playlistAction.addChannel(props.name));
            console.log(store.getState());

        } else {
            setIsFavorited(!isFavorited);
            //dispatch(playlistAction.deleteChannel(props.id));
            
            console.log('removed');
            console.log(store.getState());
        }
        
    }

    useEffect(() =>{
        
    },[])
    if (window.innerWidth < 400) {
        return (
            < div style={{'maxWidth':'400px','margin':'auto'}}>  
                {/* Channel Profile */}
                <Row type="flex">
                    <Col span={8} className="justify-center" style={{"margin":"0 auto"}}>
                        <div className="channel-gradient _dropShadow">
                            <img src={props.thumbnail} className="channel-default"/>
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col span={1} offset={14}>
                        <div onClick={handleFavorite}>
                            <FavoriteButton channelName={props.id}/>
                        </div>
                    </Col>
                </Row> 

                {/* Channel Links */}
                <Row className="">
                    <Col span={2} offset={8} className="justify-center">
                        <a href={props.spotify} target="_blank">
                            <button className="spotify" >
                                <FaSpotify size="24px" fill="white"/> 
                            </button>
                        </a>
                    </Col>
                    <Col span={4} className="justify-center">
                        <a href={props.youtube} target="_blank">
                            <button className="youtube" >
                                <FaYoutube size="24px" fill="white"/> 
                            </button>
                        </a>
                    </Col>
                    <Col span={2}>
                        <a href={props.soundcloud} target="_blank">
                            <button className="soundcloud" >
                                <FaSoundcloud size="24px" fill="white"/> 
                            </button>
                        </a>
                    </Col>  
                </Row>
                
                {/* Channel Info */}
                <Row type="flex" className="justify-center">
                    <h1 className="channel">{props.name}</h1>
                    <h3>{props.viewers}</h3>
                    <Col span={20} className="channel-bio" >                
                        <p>{props.bio}</p>
                    </Col>
                </Row>

                {/* Marquee */}
                <Row className="justify-center">
                    <Col span={18} style={{"flexDirection":"column"}}>
                        <div className="divider"></div>
                        <marquee scrollamount={2}> <p>T h a n k s &nbsp; f o r &nbsp; L i s t e  n i n g <span>😏</span></p> </marquee>
                        <div className="divider"></div>
                    </Col>
                </Row>
            </div>
        )
    }
        return (
            <React.Fragment>
                <Row justify="start" >
                    <Col span={8} className="d-inline">
                            {/* Channel Profile */}
                            <div >
                                <div className="channel-gradient _dropShadow" style={{"margin":"0 auto"}}>
                                    <img src={props.thumbnail} className="channel-default"/>
                                </div>
                                <div onClick={handleFavorite} className="favorite-dash">
                                    <FavoriteButton channelName={props.id}/>
                                </div>
                            </div>
                            
                            {/* Channel Links */}
                            <div className="social-icons">
                                <a href={props.spotify} target="_blank">
                                    <button className="spotify">
                                        <FaSpotify size="36px" fill="white"/>
                                        <h3>Spotify</h3> 
                                    </button>
                                </a>
                                <a href={props.youtube} target="_blank">
                                    <button className="youtube" >
                                        <FaYoutube size="36px" fill="white"/>
                                        <h3>YouTube</h3> 
                                    </button>
                                </a>
                                <a href={props.soundcloud} target="_blank">
                                    <button className="soundcloud" >
                                        <FaSoundcloud size="36px" fill="white"/> 
                                        <h3> SoundCloud</h3>
                                    </button>
                                </a>
                            </div>
                    </Col>
                    <Col span={16}>
                         {/* Channel Info */}
                        <div>
                            <h1 className="channel">{props.name}</h1>
                            <h3>{props.viewers}</h3>
                            <div className="channel-bio" >                
                                <p>{props.bio}</p>
                            </div>
                        </div>
                    </Col>
                </Row>
            </React.Fragment>
        )

}

const mapStateToProps = ({state, ownProps}) => {
    return {
        favorited: true,
        channel: state
    }
}

const mapDispatchToProps = {
    ...actionTypes,
}

export default connect(
    mapStateToProps, 
    mapDispatchToProps)
    (ChannelHolder);