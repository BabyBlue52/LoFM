import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { Frame, Page } from "framer";
import { motion }from 'framer-motion';
import axios from 'axios';

import Chat from '../../pages/Chat';
import { ChatButton } from '../../components/Button';
import { ChannelHolder } from '../../components/ChannelHolder';
import { ChannelUploads } from '../../components/ChannelUploads';
import { GifHandler } from '../../components/GifHandler';
import gif from '../../img/gif/chilledCow.gif';
import config from '../../apis';


export function BootlegBoy(props) {
    const [data, setData] = useState({
            title:"All Your Gyals Belong to us",
            artist:"Inteus",
            videos:[],
            bio:"I'm baby helvetica forage distillery +1 sriracha, bitters vaporware sartorial kale chips polaroid pour-over. Typewriter messenger bag meditation, tacos tilde biodiesel palo santo hexagon post-ironic freegan gochujang.",
    });
    const [profile, setProfile] = useState({
        name:'bingus',
        thumbnail:'',
        bio:'',
        videos:[
            {
                thumbnails:'',
            },
            {}
        ]
    });
    const links ={
        spotify:'https://open.spotify.com/playlist/71019EDcRamfMmOEEoTdEu?si=XePP-REWQDSuzJT6-SXwSQ',
        soundcloud: 'https://soundcloud.com/dabootlegboy',
        youtube: 'https://www.youtube.com/channel/UC0fiLCwTmAukotCXYnqfj0A'
    };
    const song = {
        title:'Do Something',
        artist:'Bob'
    }

    //api calls
    useEffect(() => {
        const { api_key, channel_id_1 } = config;
        
        const apiCall = `https://www.googleapis.com/youtube/v3/channels?part=snippet&id=${channel_id_1}&key=${api_key}`
        fetch(apiCall)
        .then(result  => result.json()) 
        .then( data => {
            setProfile({
                name: data.items[0].snippet.title,
                thumbnail: data.items[0].snippet.thumbnails.default.url,
                bio: data.items[0].snippet.description,
                videos: data.items
            });
        })
        
        // const searchAPI = `https://www.googleapis.com/youtube/v3/search?key=${api_key}&id=${channel_id_1}&part=snippet,id&order=date&maxResults=2`
        // fetch(searchAPI)
        // .then(result  => result.json()) 
        // .then( data => {
        //     setProfile({
        //         videos: data.items
        //     });
        // })

    }, []);

    return(
        <>  
            <Page 
                alignment="center"
                defaultEffect={"none"}
                currentPage={0}
            >                
                {/* Recent Uploads */}
                <Frame size={500}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                        <div className="spacer"></div>
                        <h3>Latest Uploads</h3>
                        <div className="vid-scroller">
                            {profile.videos.map((profile, i) => {
                                return(
                                    <div className="vid-card" key={i}>
                                        <ChannelUploads
                                            videoThumbnail={profile.videoThumbnails}
                                        />
                                    </div>
                            )})}
                        </div>
                        </Col>
                    </Row>  
                </Frame>

                {/* Channel Page */}
                <Frame size={500}>
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
                        artist={song.title}
                        title={song.title}
                        channel={profile.thumbnail}
                        name={profile.name}
                        bio={profile.bio}
                        viewers={data.view}
                    />
                    
                </Frame>
                {/* Chat Feature */}
                <Frame size={500}>
                    <Row style={{"paddingTop": "40px"}}>
                        <Chat snippet={data.snippet} />
                    </Row>
                    <Row className="justify-center gif-player-row">
                        <Col span={24} style={{"paddingTop": "20px"}}>
                            <GifHandler
                                gif={gif}
                                artist={data.artist}
                                title={data.title}
                            />
                        </Col>
                    </Row>   
                </Frame>
            </Page>
        </>
    )
}
