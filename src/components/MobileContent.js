import React, { useState, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Frame, Page } from 'framer';
import { Link } from 'react-router-dom';
import ReactPlayer from 'react-player';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { MdRadio } from 'react-icons/md';

import { Chat } from './Chat';
import { ChatButton, PlayButton } from './Button';
import ChannelLinks from './ChannelLinks';
import { ChannelPlaylist } from './ChannelPlaylist';
import { ChannelUploads } from './ChannelUploads';
import ChannelBio from './ChannelBio';


export function MobileContent(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [currentPage, setCurrentPage] = useState(3)
    const [channels,setChannels] = useState([])

    const [live,setLive] = useState({
        videoId: null,
        song:'',
        artist:'',
    });

    const links ={
        spotify:'https://open.spotify.com/playlist/71019EDcRamfMmOEEoTdEu?si=XePP-REWQDSuzJT6-SXwSQ',
        soundcloud: 'https://soundcloud.com/dabootlegboy',
        youtube: `https://www.youtube.com/channel/UC0fiLCwTmAukotCXYnqfj0A`
    };

    let home = 3
    let chat = 4

    function handlePlay(){
        setIsPlaying(!isPlaying);
    }
    
    function handleChat(){
        setCurrentPage(chat)
    }
    
    function handleReturn() {
        console.log("GO home roger")
        setCurrentPage(home)
    }

    const width = window.innerWidth

    //api calls
    useEffect(() => {

        console.log(width)
    }, []);


    
    const url = `http://youtube.com/watch?v=${live.videoId}`
    
    return(
        <>  
            
            <Page 
                alignment="center"
                defaultEffect={"none"}
                currentPage={currentPage}
                direction="horizontal"
                directionLock={true}
                dragEnabled={true}
                contentWidth={300}
                momentum={false}
            >       
                <Frame>
                    <Row className="justify-center">
                        
                    </Row>
                </Frame>
                {/* Spotify Playlists */}
                <Frame size={width}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                            <div className="spacer"></div>
                            <h3>Spotify Playlists</h3>
                    
                        </Col>
                    </Row>  
                </Frame>        
                 
                {/* Recent Uploads */}
                <Frame size={width}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                        <div className="spacer"></div>
                        <h3>Latest Uploads</h3>
                        <div className="vid-scroller">
                            {/* {channels[currentPage].videos.map((data, i) => {
                                return(
                                    <div className="vid-card" key={i}>
                                        <ChannelUploads
                                            videoThumbnail={data.videoThumbnail}
                                            videoTitle={data.videoTitle}
                                            videoViews={data.views}
                                            publishedAt={data.publishedAt}
                                            link={data.videoId}
                                        /> 
                                    </div>
                                )
                            })} */}
                        </div>
                        </Col>
                    </Row>  
                </Frame>

                {/* Main Page */}
                <Frame size={width}>
                    <div className="spacer"></div>
                    <Row className="justify-center">
                        <Col className="justify-center" >
                            <div onClick={handleChat}>
                                <ChatButton name={channels.name}/>
                            </div>
                        </Col>
                    </Row> 
                    <ChannelLinks
                        soundcloud={links.soundcloud} 
                        spotify={links.spotify}
                        youtube={links.youtube}
                        artist={channels.name}
                        title={channels.title}
                        thumbnail={channels.thumbnail}
                        id={channels.id}
                        videoId={channels.videoId}
                        // viewers={channels[currentPage].view}
                    />
                    {/* <ChannelBio
                        name={channels[currentPage].name}
                        bio={channels.bio}
                    /> */}
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
                    
                        <button className="back-btn" onClick={handleReturn}>
                            <AiOutlineArrowLeft/>
                        </button>
                        <Chat />
                </Frame>
            </Page>
        </>
    )
}
