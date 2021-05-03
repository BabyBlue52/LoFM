import React, { useState, useEffect } from 'react';
import { Row, Col, notification } from 'antd';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Link } from 'react-router-dom';
import Logo from '../img/logo.svg';

import 'swiper/swiper.scss';


export default function MobileDashboard(){
    const [channels, setChannels] = useState([]);
    const [state, setState] = useState({
        displayName: null
    })

    const adjustable = 3
    const url = "https://dev.lofifm.com/api/creators"

    const channelSelect = i => e => {
        console.log(i)
    }
    

    const welcomeNotification = () => {
        notification.open({
          message: `Welcome back, ${state.displayName}`,
          className: 'lo-welcome',
          placement: 'topRight',
          duration: 4.5,
        });
      };

    useEffect(()=> {
        
        fetchAPI(url);

        if(state.displayName !== null) {
            setState(state.displayName = state.displayName)
            setTimeout(function(){
                welcomeNotification();
            }, 2500);
        } else {
            setState(state.displayName = 'Anonymous');
        }
    },[])


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


  
    return (
        <React.Fragment>
            <Row>
                <h1 className='mobile-header'>Who's Playing</h1>
                <div className="spacer"></div>
            </Row>
            <div className="mobile-dashboard">
                
                {/** Most Popular */} 
                <Row>
                    <h1>Most Popular</h1>
                </Row>
                <Swiper
                    spaceBetween={10}
                    slidesPerView={adjustable}
                >
                    <SwiperSlide className="starter" />
                    {channels.map((item, i) => {
                        return(
                            <SwiperSlide key={i} className="channel-cover">
                                <Link to={`/radio/${item.id}`} >
                                    <img src={item.thumbnail} />
                                    <p>{item.creator_name}</p>
                                    <p className="followers">
                                        {item.followers}
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
                    <SwiperSlide className="starter" />
                       {channels.map((item, i) => {
                    return(
                        <SwiperSlide key={i} className="channel-cover">
                            <Link to={`/radio/${item.id}`} >
                                <img src={item.thumbnail} />
                                <p>{item.creator_name}</p>
                                <p className="followers">
                                    {item.followers}
                                    <span>followers</span>
                                </p>
                            </Link>
                        </SwiperSlide>
                    )
                })}
                </Swiper>
                <div className="spacer"></div>
            </div>
        </React.Fragment>
    )
}