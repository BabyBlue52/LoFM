import React, { useState } from 'react';
import useAxios from 'axios-hooks';
import { Row, Col, Spin } from 'antd';
import { FaSpotify, FaYoutube, FaSoundcloud, FaPlus } from 'react-icons/fa';
import 'antd/dist/antd.css'; 

import { FavoriteButton } from './Buttons/FavoriteButton';
import '../../src/style.scss';


function ChannelHolder(){
    const [channel, setChannel] = useState();

    const getChannel = () => {
        setChannel("dummy-thick")
    }
    
    //api calls
    const [{data, loading, error }, refetch] = useAxios(

    )
    
    if (loading) return <div><Spin/></div>
    // if (error) return <p>Error!</p>

    return (
        <>  
            <Row type="flex">
                <Col span={8} offset={8} className="justify-center">
                    <div className="channel-gradient _dropShadow">
                        <div className={!channel ? 'channel-default' : ''}></div>
                    </div>
                </Col>
            </Row>
            <Row>
                <Col span={1} offset={13}>
                    <FavoriteButton/>
                </Col>
            </Row> 
            <Row className="">
                <Col span={1} offset={10}>
                    <button className="spotify">
                        <FaSpotify size="1.5rem"/> 
                    </button>
                </Col>
                <Col span={2} className="justify-center">
                    <button className="youtube">
                        <FaYoutube size="1.5rem"/> 
                    </button>
                </Col>
                <Col span={1}>
                    <button className="soundcloud">
                        <FaSoundcloud size="1.5rem"/> 
                    </button>
                </Col>  
            </Row>
        </>
    )
}

export { ChannelHolder };