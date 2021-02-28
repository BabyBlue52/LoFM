import React, { useState, useEffect } from 'react';
import { Row, Col } from 'antd';
import { AiOutlineCheck, AiOutlinePlus, AiOutlineArrowLeft, AiOutlineInbox } from 'react-icons/ai';
import { Page } from 'framer';
import _ from 'lodash';
import { connect, useDispatch } from 'react-redux';

import ChannelLinks from './ChannelLinks';
import { ChannelUploads } from './ChannelUploads';
import ChannelBio from './ChannelBio'
import { ChannelPlaylist } from './ChannelPlaylist';
import store from '../_redux/createStore';

export function DashboardContent(props) {
    const [currentPage, setCurrentPage] = useState(0)
    const [channels,setChannels] = useState([])
    const [favorite,setFavorite] = useState(false);
    let pageSize = 4
    
    const url = "http://localhost/api/creators"

    useEffect(()=> {
        
        fetchAPI(url) 
    },[]);
    
    channels.unshift({});

    // Workaround from the unshift fix later
    if (channels.length > pageSize){
        channels.shift();
    }

    // Properly load dispatch REDUX
    const dispatch = useDispatch();


    const fetchAPI = (url) => {
        fetch(url)
       .then(function(response) {
           // The response is a Response instance.
           // You parse the data into a useable format using `.json()`
            return response.json();
       }).then(function(data) {
           // `data` is the parsed version of the JSON returned from the above endpoint.
            setChannels(data.data)
       })
    }

    // Populate an empty object first in array
    const unShift = () => {  
        let newArray = _.uniqBy(channels, "id")
        console.log([newArray])
        newArray.shift();
        setChannels(newArray)
    }

    const goBack = () => {
        setCurrentPage(0);
        unShift();   
    }

    const handleClick = i => e => {
        if (i < 1 ) {
            console.log(i);
            setCurrentPage(1)
        }
        setCurrentPage(i++)
    }

    const toggleFavorite = () => {
        setFavorite(!favorite);
    }
 
    
    return (
        <React.Fragment>
            <Page 
                className="scaling"
                direction="vertical"
                directionLock={true}
                dragEnabled={false}
                currentPage={currentPage}
            >
                <Page>
                    <div className="card-container">
                        <div className="super-spacer"></div>
                    
                        <Row justify="start" className={props.row}>
                        {channels.map((item, i) => {
                            if (i === 0){
                                //Do Nothing
                            } else {
                            return (
                                <Col key={i} span={props.span} style={{'flexDirection':'start'}} >
                                    <div id={item.id} className="artist-card _dropShadow" onClick={handleClick(i)}>
                                        <div className="_lightGradient">
                                            <Row>
                                                <Col span={2}>
                                                    <button className="add-btn" onClick={toggleFavorite}>
                                                        {!favorite ?<AiOutlinePlus/> : <AiOutlineCheck/> }
                                                    </button>
                                                </Col>
                                                <Col offset={17} span={4}>
                                                    <img src={item.thumbnail} className="card-default" alt=""/>
                                                </Col>
                                            </Row>
                                                <h2>{item.creator_name}</h2>
                                                <p>Subscribers<span>12</span></p>
                                        </div>
                                    </div>
                                </Col>
                            )
                        }})}
                        </Row>
                    
                    <div className="super-spacer"></div>
                </div>
                </Page>

                <Page                 
                    directionLock={true}
                    dragEnabled={false}
                >
                    
                    <div id="clear-fix" className="page-container">
                        <div className="super-spacer"></div>
                        <Row>
                            <Col span={24}>
                            <button onClick={goBack} className="back-btn">
                                <p><AiOutlineArrowLeft/><span>Return</span></p>
                            </button>
                            </Col>
                        </Row>
                        <div className="spacer"></div>
                        <Row>
                            <Col span={8}>
                                <ChannelLinks                                  
                                     thumbnail={channels[currentPage]} 
                                />
                            </Col>
                            <Col span={16} className="d-inline channel-page">
                                {/** Channel Bio */}
                                <ChannelBio
                                    // bio={channels[currentPage].bio}
                                    // name={channels[currentPage].creator_name}
                                />
                                {/** YoutTube Uploads */}
                              
                                <div className="vid-scroller">
                                <h3>Latest Uploads</h3>
                                    <Row align="left">
                                    {/* {channels[1].videos.map((data, i) => {
                                        return(
                                            <Col span={12}>
                                                <motion.div className="vid-card" key={i}>
                                                    <ChannelUploads
                                                        videoThumbnail={data.videoThumbnail}
                                                        videoTitle={data.videoTitle}
                                                        videoViews={data.views}
                                                        publishedAt={data.publishedAt}
                                                        link={data.videoId}
                                                    /> 
                                                </motion.div>
                                            </Col>
                                        )   
                                    })} */}
                                    </Row>
                                </div>
                                <div className="spacer"></div>
                                {/** Spotify Uploads*/}
                                 <ChannelPlaylist
                                    // station={channels[1].spotify}
                                />
                            </Col>
                        </Row>
                    </div>
                </Page>
               
            </Page>
        </React.Fragment>
    )
}
const mapStateToProps = (state) => ({
    isAuthenticated: state.auth.isAuthenticated,
  });

export default connect(mapStateToProps, {})(DashboardContent)