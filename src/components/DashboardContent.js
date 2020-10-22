import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineCheck, AiOutlinePlus, AiOutlineArrowLeft, AiOutlineInbox } from 'react-icons/ai';
import { Page } from 'framer';
import { motion } from 'framer-motion';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';

import ChannelLinks from './ChannelLinks';
import { ChannelUploads } from './ChannelUploads';
import ChannelBio from './ChannelBio'
import { ChannelPlaylist } from './ChannelPlaylist';
import store from '../_redux/createStore';

export function DashboardContent(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const first = 1
    const [channels,setChannels] = useState([
        {},
        {
            id: 1,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
            spotify:"",
            youtube:"",
            soundcloud:"",
            bio: "💕Sad Lofi Hip Hop & Chill Beats 💕New songs almost everyday at 7pm EST.  All submissions via Soundcloud DM's, please don't email.",
            videos: [
                {
                    videoTitle: "Some Donkus",
                    videoViews:" 2323",
                    videoId:"",
                    videoThumbnail:"",  
                    publishedAt: "2 Days ago",
                },
                {
                    videoTitle: "Some Donkus",
                    videoViews:" 2323",
                    videoId:"",
                    videoThumbnail:"",  
                    publishedAt: "2 Days ago",
                },{},{},{},{}
            ]
        },
        {
            id: 2,
            title:'Ryan Celcius Sounds',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 3,
            title:'STEEZYASFUCK',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 4,
            title:'Rare',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 5,
            title:'Promoting Sounds',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
    ])
    const [favorite,setFavorite] = useState(false);
    
    useEffect(()=> {
        console.log(store)
    },[])
    
    // Properly load dispatch REDUX
    const dispatch = useDispatch();

    const goBack = () => {
        setCurrentPage(0);
    }

    const handleClick = i => e => {
        if (i < 1 ) {
            console.log(i);
            setCurrentPage(1)
        }
        setCurrentPage(i++)
    }
    


    const toggleFavorite = () => {
        setFavorite(!favorite);
    }
 
    
    return (
        <React.Fragment>
            <Page 
                className="scaling"
                direction="vertical"
                directionLock={true}
                dragEnabled={false}
                currentPage={currentPage}
            >
                <Page>
                    <div className="card-container">
                        <div className="super-spacer"></div>
                    
                        <Row justify="start" className={props.row}>
                        {channels.map((item, i) => {
                            if (i === 0){
                                //Do Nothing
                            } else {
                            return (
                                <Col span={props.span} style={{'flexDirection':'start'}} >
                                    <div key={i} id={item.id} className="artist-card _dropShadow" onClick={handleClick(i)}>
                                        <div className="_lightGradient">
                                            <Row>
                                                <Col span={2}>
                                                    <button className="add-btn" onClick={toggleFavorite}>
                                                        {!favorite ?<AiOutlinePlus/> : <AiOutlineCheck/> }
                                                    </button>
                                                </Col>
                                                <Col offset={17} span={4}>
                                                    <img src={item.thumbnail} className="card-default" alt=""/>
                                                </Col>
                                            </Row>
                                                <h2>{item.title}</h2>
                                                <p>Subscribers<span>{item.subscriberCount}</span></p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }})}
                        </Row>
                    
                    <div className="super-spacer"></div>
                </div>
                </Page>

                <Page                 
                    directionLock={true}
                    dragEnabled={false}
                >
                    
                    <div id="clear-fix" className="page-container">
                        <div className="super-spacer"></div>
                        <Row>
                            <Col span={24}>
                            <button onClick={goBack} className="back-btn">
                                <p><AiOutlineArrowLeft/><span>Return</span></p>
                            </button>
                            </Col>
                        </Row>
                        <div className="spacer"></div>
                        <Row>
                            <Col span={8}>
                                <ChannelLinks
                                    viewers={channels[currentPage].subscriberCount}
                                    thumbnail={channels[currentPage].thumbnail} 
                                />
                            </Col>
                            <Col span={16} className="d-inline" style={{"overflowX":"hidden","overflowY":"scroll","paddingRight":"10px"}}>
                                {/** Channel Bio */}
                                <ChannelBio
                                    bio={channels[currentPage].bio}
                                    name={channels[currentPage].title}
                                />
                                {/** YoutTube Uploads */}
                              
                                <div className="vid-scroller">
                                <h3>Latest Uploads</h3>
                                    <Row align="left">
                                    {channels[1].videos.map((data, i) => {
                                        return(
                                            <Col span={12}>
                                                <motion.div className="vid-card" key={i}>
                                                    <ChannelUploads
                                                        videoThumbnail={data.videoThumbnail}
                                                        videoTitle={data.videoTitle}
                                                        videoViews={data.views}
                                                        publishedAt={data.publishedAt}
                                                        link={data.videoId}
                                                    /> 
                                                </motion.div>
                                            </Col>
                                        )   
                                    })}
                                    </Row>
                                </div>
                                <div className="spacer"></div>
                                {/** Spotify Uploads*/}
                                 <ChannelPlaylist
                                    station={channels[1].spotify}
                                />
                            </Col>
                        </Row>
                    </div>
                </Page>
               
            </Page>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps, {})(DashboardContent)