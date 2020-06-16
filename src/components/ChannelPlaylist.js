import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';

import { PlaylistButton } from '../components/Button';
import config from '../apis.js';

export function ChannelPlaylist(props) {
    const [spotify, setSpotify] = useState({

    })
    const { secret_key, client_id } = config;
    const link = 'https://google.com';

    useEffect(() => {
        const urls = [
         
        ]
        fetch('https://accounts.spotify.com/api/token', {
            method: 'POST', 
            data: {
                grant_type: 'authorization_code',
                client_id: `${client_id}`,
                client_secret: `${secret_key}`
            },
            headers: {
                'Content-Type':'application/x-www-form-urlencoded'
            }
        }).then(res => {
            console.log(res);
        })
       
    }, [])
    return (
        <React.Fragment>
            <div className="playlist-container">
                <Row >
                    <Col span={24}>
                    <img className="playlist-thumbnail"/>
                    </Col>
                    <Col span={24}>
                        <h3>Bob, Do Something</h3>
                    </Col>
                    <Col span={12} offset={2}>
                        <PlaylistButton playlist={link}/>
                    </Col>
                </Row>
            </div>
        </React.Fragment>
    )
}