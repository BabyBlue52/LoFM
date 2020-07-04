import React, { useState, useEffect } from 'react';
import { Row, Col, Spin } from 'antd';
import { Frame, Page } from "framer";
import { motion }from 'framer-motion';
import ReactPlayer from 'react-player';

import { Chat } from '../../pages/Chat';
import { ChatButton, PlayButton } from '../../components/Button';
import ChannelHolder from '../../components/ChannelHolder';
import { ChannelPlaylist } from '../../components/ChannelPlaylist';
import { ChannelUploads } from '../../components/ChannelUploads';
import { GifHandler } from '../../components/GifHandler';
import gif from '../../img/gif/chilledCow.gif';
import config from '../../apis';


export function BootlegBoy(props) {
    const [isPlaying, setIsPlaying] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [live,setLive] = useState({
        videoId: null,
        song:'',
        artist:'',
    });
    const [uploads, setUploads] = useState({
        title:"",
        artist:"",
        videos:[],
        bio:"",
    });
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
    
    //api calls
    useEffect(() => {
        const urls = [
            `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channel_id_1}&key=${api_key}`,
            `https://www.googleapis.com/youtube/v3/search?order=date&part=snippet&channelId=${channel_id_1}&maxResults=2&key=${api_key}`,
            `https://www.googleapis.com/youtube/v3/search?part=snippet&channelId=${channel_id_1}&eventType=live&maxResults=1&type=video&key=${api_key}`
        ]
        
        Promise.all(urls.map(url =>
            fetch(url)
            .then(res => res.json()))
        )           
        .then(data => {
            setProfile({
                name: data[0].items[0].snippet.title,
                bio: data[0].items[0].snippet.description,
                thumbnail: data[0].items[0].snippet.thumbnails.default.url,
                videos: data.items
            })
            setUploads({
                videos: data[1].items
            })
            setLive({
                videoId: data[2].items[0].id.videoId
            })
        })   
        .catch(
            <h1>Error</h1>
        )
    }, [ api_key ]);

    
    const url = `http://youtube.com/watch?v=${live.videoId}`
    return(
        <>  
            <Page 
                alignment="center"
                defaultEffect={"none"}
                currentPage={2}
                direction="horizontal"
                directionLock={true}
                dragEnabled={true}
                contentWidth={300}
            >       
                {/* Spotify Playlists */}
                <Frame size={500}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                        <div className="spacer"></div>
                        <h3>Spotify Playlists</h3>
                        <ChannelPlaylist/>
                        </Col>
                    </Row>  
                </Frame>        
                 
                {/* Recent Uploads */}
                <Frame size={300}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                        <div className="spacer"></div>
                        <h3>Latest Uploads</h3>
                        <div className="vid-scroller">
                            {uploads.videos.map((data, i) => {
                                return(
                                    <div className="vid-card" key={i}>
                                        <ChannelUploads
                                            videoThumbnail={data.snippet.thumbnails.medium.url}
                                            videoTitle={data.snippet.title}
                                            videoViews={data.snippet.views}
                                            publishedAt={data.snippet.publishedAt}
                                            link={data.id.videoId}
                                        /> 
                                    </div>
                                )
                            })}
                        </div>
                        </Col>
                    </Row>  
                </Frame>

                {/* Channel Page */}
                <Frame size={300}>
                    <div className="spacer"></div>
                    <Row className="justify-center">
                        <Col className="justify-center" >
                            <ChatButton/>
                        </Col>
                    </Row> 
                    <ChannelHolder
                        soundcloud={links.soundcloud} 
                        spotify={links.spotify}
                        youtube={links.youtube}
                        artist={song.artist}
                        title={song.title}
                        thumbnail={profile.thumbnail}
                        id={profile.id}
                        name={profile.name}
                        bio={profile.bio}
                        viewers={uploads.view}
                        videoId={live.videoId}
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
                <Frame size={500}>
                    <Row style={{"paddingTop": "40px"}}>
                        <Chat snippet={uploads.snippet} />
                    </Row>
                    <Row className="justify-center gif-player-row">
                        <Col span={24} style={{"paddingTop": "20px"}}>
                            <GifHandler
                                gif={gif}
                                artist={live.artist}
                                title={live.title}
                            />
                        </Col>
                    </Row>   
                </Frame>
            </Page>
        </>
    )
}
