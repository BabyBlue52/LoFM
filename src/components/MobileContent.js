import React, { useState, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Frame, Page } from "framer";
import { motion }from 'framer-motion';
import ReactPlayer from 'react-player';
import { Link, useLocation } from 'react-router-dom'

import { Chat } from './Chat';
import { ChatButton, PlayButton } from './Button';
import ChannelLinks from './ChannelLinks';
import { ChannelPlaylist } from './ChannelPlaylist';
import { ChannelUploads } from './ChannelUploads';
import ChannelBio from './ChannelBio';

import config from '../apis';

let vids = []
let url = ""

export function MobileContent(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentPage, setCurrentPage] = useState(0);
    const [channelId,setChannelId] = useState("");
    const location = useLocation()

    const [live,setLive] = useState({
        videoId: null,
        song:'',
        artist:'',
    });
    const [uploads, setUploads] = useState([]);

    const [profile, setProfile] = useState({
            id: {channel:'The BootLeg Boy',id: 1},
            name:'loading',
            thumbnail:'https://d1u1amw606tzwl.cloudfront.net/assets/users/avatar-default-96007ee5610cdc5a9eed706ec0889aec2257a3937d0fbb747cf335f8915f09b2.png',
            bio:'Loading...',
            videos:[]
    });
    const links ={
        spotify:'https://open.spotify.com/playlist/71019EDcRamfMmOEEoTdEu?si=XePP-REWQDSuzJT6-SXwSQ',
        soundcloud: 'https://soundcloud.com/dabootlegboy',
        youtube: `https://www.youtube.com/channel/UC0fiLCwTmAukotCXYnqfj0A`
    };
    const song = {
        title:'Do Something',
        artist:'Bob'
    }

    function handlePlay(){
        setIsPlaying(!isPlaying);
    }

    const { api_key, channel_id_1 } = config;
    const width = window.innerWidth
    
    //api calls
    useEffect(() => {
        console.log(location.state.id)
        fetchAPI(videos)
        
        refreshVideos()
        
    }, [ api_key ]);

    
    
    const fetchAPI = (videos) => {
        fetch(videos)
       .then(function(response) {
           // The response is a Response instance.
           // You parse the data into a useable format using `.json()`
           return response.json();
       }).then(function(data){
           // `data` is the parsed version of the JSON returned from the above endpoint.

            setUploads(data.data.items)
       }).then(() => {
            // console.log(uploads)
            // uploads.data.forEach((data) => {
            //     vids.push(data)
            // })
            // console.log(vids)
       })
       
   }

    const videos = `http://localhost/api/creator/youtube/${location.state.id}`
    
    const info = `http://localhost/`
    console.log(uploads)

    async function refreshVideos() {
     
    }
    return(
        <>  
            <Page 
                alignment="center"
                defaultEffect={"none"}
                currentPage={1}
                direction="horizontal"
                directionLock={true}
                dragEnabled={true}
                contentWidth={300}
            >       
                <Frame>
                    <Row className="justify-center">
                        
                    </Row>
                </Frame>
                {/* Spotify Playlists */}
                {/* <Frame size={width}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                        <div className="spacer"></div>
                        <h3>Spotify Playlists</h3>
                        <ChannelPlaylist
                            station={channels[currentPage].spotify}
                        />
                        </Col>
                    </Row>  
                </Frame>         */}
                 
                {/* Recent Uploads */}
                <Frame size={width}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                        <div className="spacer"></div>
                        <h3>Latest Uploads</h3>
                        <div className="vid-scroller">
                             {uploads.map((data) => {
                                return(
                                    <div className="vid-card">
                                        <ChannelUploads
                                            videoThumbnail={data.videoThumbnail}
                                            videoTitle={data.videoTitle}
                                            videoViews={data.views}
                                            publishedAt={data.publishedAt}
                                            link={data.videoId}
                                        /> 
                                    </div>
                                )
                            })}
                        </div>
                        </Col>
                    </Row>  
                </Frame>

                {/* Main Page */}
                <Frame size={width}>
                    <div className="spacer"></div>
                    <Row className="justify-center">
                        <Col className="justify-center" >
                            <ChatButton/>
                        </Col>
                    </Row> 
                    <ChannelLinks
                        soundcloud={links.soundcloud} 
                        spotify={links.spotify}
                        youtube={links.youtube}
                        artist={song.artist}
                        title={song.title}
                       //thumbnail={channels[currentPage].thumbnail}
                        id={profile.id}
                        videoId={live.videoId}
                       // viewers={channels[currentPage].view}
                    />
                    <ChannelBio
                       // name={channels[currentPage].name}
                        bio={profile.bio}
                    />
                    {/* Play Content */}
                    <Row className="justify-center">
                        <Col span={18} className="justify-center">
                            <div onClick={handlePlay}>
                                <PlayButton/>
                            </div>
                        </Col>
                        <Col span={18} className="justify-center">
                            <ReactPlayer 
                                url={url} 
                                playing = {!isPlaying ? false : true}
                                className="yt-player"
                            />
                        </Col>
                    </Row>
                        
                </Frame>
                
                {/* Chat Feature */}
                <Frame size={width}>
                    <div style={{"paddingTop": "40px"}} >
                        <Chat/>
                    </div>
                </Frame>
            </Page>
        </>
    )
}
