import React, { useState } from 'react';
import { Row, Col } from 'antd'; 
import NumberFormat from 'react-number-format';

export function VideoContainer() {
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

    return(
        <>
            {videos.slice(0,2).map((video, index) => (
                <div key={index} className="vid-card">
                    <Row>
                        <Col span={24} className="justify-center">
                            <a href={video.link} className="overlay">
                                <img className="vid-thumbnail _dropShadow" src={video.thumbnail} alt=""/>
                            </a>
                        </Col>
                    </Row>
                    <Row className="vid-title">
                        <Col span={24}>
                            <p><span>{video.title}</span></p>
                        </Col>
                        <Col span={24}>
                            <p className="thin">
                                <NumberFormat displayType={'text'} value={video.views} thousandSeparator={true} />
                                views
                            </p>
                        </Col>
                        <Col span={24}>
                            <p className="thin"><span>Posted:</span><span>{video.publishedAt}</span></p>
                        </Col>
                    </Row>
                </div>
            ))}
        </>
    )
}

function ChannelUploads() {
    return(
        <>  
           
            <Row>
                <Col span={24} style={{'flexDirection':'column'}}>
                    <div className="spacer"></div>
                    <h3>Latest Uploads</h3>
                    <div className="vid-scroller">
                        <VideoContainer/>
                    </div>
                    
                </Col>   
            </Row>        
        </>
    )

}

export { ChannelUploads }