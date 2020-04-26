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

const api = axios.create({
    baseUrl: 'https://randomuser.me/api/'
})

export function BootlegBoy(props) {
    const [data, setData] = useState({
            title:"All Your Gyals Belong to us",
            artist:"Inteus",
            videos:[],
            snippet:"The Bootleg Boy",
            bio:"I'm baby helvetica forage distillery +1 sriracha, bitters vaporware sartorial kale chips polaroid pour-over. Typewriter messenger bag meditation, tacos tilde biodiesel palo santo hexagon post-ironic freegan gochujang.",
    });
    const [profile, setProfile] = useState({
        channel: ""
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
    useEffect(async () => {
      await axios.get('https://randomuser.me/api')
      .then((res) => {
        setProfile({
            channel: res.data.results[0].picture.large,
            name: res.data.results[0].name.first
        });
        console.log(res.data.results[0].picture.large);
        console.log(profile)
      })
     
    }, []);

    return(
        <>  
            <Page 
                alignment="center"
                defaultEffect={"none"}
                currentPage={1}
            >                
                {/* Recent Uploads */}
                <Frame size={500}>
                    <Row className="justify-center">
                        <Col span={20} style={{'flexDirection':'column'}}>
                            <ChannelUploads/>                             
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
            
                    <div className="spacer"></div>
                        <ChannelHolder
                            soundcloud={links.soundcloud} 
                            spotify={links.spotify}
                            youtube={links.youtube}
                            artist={song.title}
                            title={song.title}
                            channel={profile.channel}
                            name={profile.name}
                            bio={data.bio}
                        />
                    <div className="spacer"></div>
                    
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
