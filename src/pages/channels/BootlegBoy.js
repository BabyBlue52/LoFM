import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Frame, Page } from "framer";
import { motion }from 'framer-motion';

import { ChatButton } from '../../components/Button';
import { ChannelHolder } from '../../components/ChannelHolder';
import { ChannelUploads } from '../../components/ChannelUploads';
import DataFetching from '../../apis/Youtube';


export function BootlegBoy() {
    const [data, setData] = useState({
            title:"",
            artist:"",
            videos:[],
            channel:"The Bootleg Boy",
            bio:"I'm baby helvetica forage distillery +1 sriracha, bitters vaporware sartorial kale chips polaroid pour-over. Typewriter messenger bag meditation, tacos tilde biodiesel palo santo hexagon post-ironic freegan gochujang."
    });

    const links ={
        spotify:'https://open.spotify.com/playlist/71019EDcRamfMmOEEoTdEu?si=XePP-REWQDSuzJT6-SXwSQ',
        soundcloud: 'https://soundcloud.com/dabootlegboy',
        youtube: 'https://www.youtube.com/channel/UC0fiLCwTmAukotCXYnqfj0A'
    };
    const song = {
        title:'uhuhDo Something',
        artist:'Bob'
    }
    return(
        <>
            <Page 
                alignment="center"
                defaultEffect={"none"}
                currentPage={0}
            >                
                <Frame size={500}>
                    <Row className="justify-center">
                        <Col span={24} style={{'flexDirection':'column'}}>
                            <ChannelUploads/>                             
                        </Col>
                    </Row>  
                </Frame>
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
                            artist={song.artist}
                            title={song.title}
                            channel={data.channel}
                            bio={data.bio}
                        />
                    <div className="spacer"></div>
                    
                </Frame>
              
            </Page>
            
                  
        </>
    )
}
