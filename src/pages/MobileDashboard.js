import React, { useState, useEffect } from 'react';
import { Row, Col, notification } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

import 'swiper/swiper.scss';

export default function MobileDashboard(){

    const [channels, setChannels] = useState([
        {
            id:"1",
            name:"Steezyazfuck sdf",
            thumbnail:"",
            followers:23
        },
        {
            id:"2",
            name:"The Bootleg Boy",
            thumbnail:""
        },
        {
            id:"3",
            name:"Ryan Celsius Sounds",
            thumbnail:""
        },
        {
            id:"4",
            name:"The Bootleg Boy",
            thumbnail:""
        },
    ]) 
    const adjustable = 3
    
    useEffect(()=> {
        console.log('Make API request')
    },[])
    
    return (
        <div className="mobile-dashboard">
            <Row>
                <h1 className='mobile-header'>Who's Playing</h1>
                <div className="spacer"></div>
            </Row>
            {/** Most Popular */}
            <Row>
                <h1>Most Popular</h1>
            </Row>
            <Swiper
                spaceBetween={10}
                slidesPerView={adjustable}
            >
                <SwiperSlide className="starter"></SwiperSlide>
                {channels.slice(0, 9).map((channel, i) => {
                    return(
                        <SwiperSlide key={i} className="channel-cover">
                             <Link to='/radio' >
                                <img src={channel.thumbnail} />
                                <p>{channel.name}</p>
                                <p className="followers">
                                    {channel.followers}
                                    <span>followers</span>
                                </p>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
                <div className="spacer"></div>
            
            {/** Trending */}
            <Row>
                <h1>Trending Channels</h1>
            </Row>
            <Swiper
                spaceBetween={10}
                slidesPerView={adjustable}
            >
                <SwiperSlide className="starter"></SwiperSlide>
                {channels.slice(0, 9).map((channel, i) => {
                    return(
                        <SwiperSlide key={i} className="channel-cover">
                            <Link to='/radio' >
                                <img src={channel.thumbnail} />
                                <p>{channel.name}</p>
                                <p className="followers">
                                    {channel.followers}
                                    <span>followers</span>
                                </p>
                            </Link>
                        </SwiperSlide>
                    )
                })}
            </Swiper>
        </div>
    )
}