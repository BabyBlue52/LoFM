import React, { useState } from 'react';
import { Row, Col } from 'antd';


export function ChannelUploads(props) {
    const videoAnchor = `https://www.youtube.com/watch?v=${props.link}`;
    const postDate = `${props.publishedAt}`;
    if (window.innerWidth < 400 ) {
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
                        <Col>
                            <p><span>{props.videoTitle}</span></p>
                        </Col>
                        <Col>
                            <p className="thin"><span>Posted:</span><span>{postDate}</span></p>
                        </Col>
                    </Row>
                </div>    
            </>
        )
    }
    return (
        <React.Fragment>  
                <Row>
                    <Col>
                        <a href={videoAnchor} className="overlay">
                            <img className="vid-thumbnail _dropShadow" src={props.videoThumbnail} alt=""/>
                        </a>
                    </Col>
                    <Col span={24}>
                        <p><span>{props.videoTitle}</span></p>
                    </Col>
                    <Col>
                        <p className="thin"><span>Posted:</span><span>{postDate}</span></p>
                    </Col>
                </Row>  
        </React.Fragment>
    )
}