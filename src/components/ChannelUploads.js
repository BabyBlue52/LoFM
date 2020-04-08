import React, { useState } from 'react';
import { Row, Col } from 'antd'; 
import NumberFormat from 'react-number-format';

function VideoContainer() {
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
            
            {videos.map((video, index) => (
                <div>
                <Row key={index} justify="center vid" >
                    <Col span={24}>
                        <a href={video.link} className="overlay">
                            <img className="vid-thumbnail _dropShadow" src={video.thumbnail}/>
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

function RecentUploads() {
    return(
        <>  
            <div className="header">
                <h3>Latest Uploads</h3>
            </div>
            <div className="spacer"></div>        
            <VideoContainer/>
        </>
    )

}

export { RecentUploads }