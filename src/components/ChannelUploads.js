import React, { useState } from 'react';
import { Row, Col } from 'antd';


export function ChannelUploads(props) {
    const [videos,setVideos] = useState([
        {
            thumbnail: 'http://i3.ytimg.com/vi/8InG7AbJwdc/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=8InG7AbJwdc',
            title: 'ZappBeats - I NEVER SWITCH',
            views: 4235,
            publishedAt: '1 Week ago'
        },
        {
            thumbnail: 'http://i3.ytimg.com/vi/h4QfKW4ab18/maxresdefault.jpg',
            link: 'https://www.youtube.com/watch?v=h4QfKW4ab18',
            title: 'VON STORM - MADE YO MAMA CRYWhatever',
            views: 3991,
            publishedAt: '6 Days ago'
        },      
    ]);

    const videoAnchor = `https://www.youtube.com/watch?v=${props.link}`;
    const postDate = `{props.publishedAt}`;
    return(
        <>  
          <div className="vid-card">
                <Row>
                    <Col span={24} className="justify-center">
                        <a href={videoAnchor} className="overlay">
                            <img className="vid-thumbnail _dropShadow" src={props.videoThumbnail} alt=""/>
                        </a>
                    </Col>
                </Row>
                <Row className="vid-title">
                    <Col offset={1}>
                        <p><span>{props.videoTitle}</span></p>
                    </Col>
                    <Col offset={1}>
                        <p className="thin"><span>Posted:</span><span>{postDate}</span></p>
                    </Col>
                </Row>
            </div>    
        </>
    )
}