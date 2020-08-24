import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { FaSpotify, FaYoutube, FaSoundcloud } from 'react-icons/fa';
import { connect, useDispatch } from 'react-redux'; 

import { FavoriteButton } from './Button';
import { SongHandler } from './GifHandler';
import playlistAction from '../_redux/actions/playlistAction';
import actionTypes from '../_redux/actionTypes';
import store from '../_redux/createStore';

function ChannelLinks(props){
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
    if (window.innerWidth < 1024) {
        return (
            <div style={{'maxWidth':'400px','margin':'auto'}}>  
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
            </div>
        )
    }
        return (
            <React.Fragment>
                <Row justify="start">
                    <Col span={24} className="d-inline">
                            {/* Channel Profile */}
                            <div>
                                <div className="channel-gradient _dropShadow" style={{"margin":"0 auto  0 20px"}}>
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
    (ChannelLinks);