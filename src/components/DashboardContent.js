import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineCheck, AiOutlinePlus, AiOutlineArrowLeft } from 'react-icons/ai';
import { Page } from 'framer';
import { motion } from 'framer-motion';
import _ from 'lodash';

import ChannelLinks from './ChannelLinks';
import { ChannelUploads } from './ChannelUploads';
import ChannelBio from './ChannelBio'
import { ChannelPlaylist } from './ChannelPlaylist';

export function DashboardContent(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const [channels,setChannels] = useState([
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
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 3,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 4,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
        {
            id: 5,
            title:'The Bootleg Boy',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            subscriberCount: 23,
        },
    ])
    const goBack = () => {
        setCurrentPage(0);
    }

    const handleClick = (event) => {
        console.log(event.target.id)
        setCurrentPage(1)
    }
    const ContainingRow = () => {
        return(
            <div className="card-container">
                <div className="super-spacer"></div>
                <Row justify="start" className={props.row}>
                </Row>
            </div>
        )   
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
                            return (
                                <Col span={props.span} style={{'flexDirection':'start'}} >
                                    <div key={i} id={item.id} className="artist-card _dropShadow" onClick={handleClick}>
                                        <div className="_lightGradient">
                                            <Row>
                                                <Col span={2}>
                                                    <button className="add-btn">
                                                         <AiOutlinePlus/>
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
                        })}
                        </Row>
                    
                    <div className="super-spacer"></div>
                </div>
                </Page>

                {/**  Find out how to change the 0 programmatically */}
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
                                    viewers={channels[0].subscriberCount}
                                    thumbnail={channels[0].thumbnail} 
                                />
                            </Col>
                            <Col span={16} className="d-inline" style={{"overflowX":"hidden","overflowY":"scroll","paddingRight":"10px"}}>
                                {/** Channel Bio */}
                                <ChannelBio
                                    bio={channels[0].bio}
                                    name={channels[0].title}
                                />
                                {/** YoutTube Uploads */}
                              
                                <div className="vid-scroller">
                                <h3>Latest Uploads</h3>
                                    <Row align="left">
                                    {channels[0].videos.map((data, i) => {
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
                                    station={channels[0].spotify}
                                />
                            </Col>
                        </Row>
                    </div>
                </Page>
               
            </Page>
        </React.Fragment>
    )
}