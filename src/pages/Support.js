import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { MdClose } from 'react-icons/md'
import { HomeButton } from '../components/Button';
import Logo from '../img/logo.svg';

export default function SupportPage(props) {
    const [state, setState ] = useState();
    const link = "https://uploads-ssl.webflow.com/5c14e387dab576fe667689cf/5cbed8a433a3f45a772abaf5_SupportMe_blue.png"
    const gif = "https://thumbs.gfycat.com/IncredibleNimbleDore-size_restricted.gif"
    if (window.innerWidth < 1024) {
        return (
            <div className="support-container">
                <Row type="flex">
                    <button className="back-btn" onClick={props.onCloseSupport}>
                        <MdClose style={{'fill':'red'}}/>
                    </button>
                    <Col span={24}>
                        <h3> Please support us</h3>
                    </Col>
                    <Col span={24}>
                    <a href='https://ko-fi.com/H2H223K32' target='_blank'><img height='36' style={{'border':'0px','height':'36px'}} src={link} alt='Support us at ko-fi.com' /></a>
                    </Col>
                </Row>
            </div>
        )
    }
    return (
        <div className="white-out">
            <HomeButton label="Return Home"/>
            <div className="support-header">
               <h3> Go Back</h3>
            </div>
            <div className='support-gif _noBorder'>
                <img src="https://thumbs.gfycat.com/IncredibleNimbleDore-size_restricted.gif" loading="lazy"/>
            </div>
            <div className="support-desktop">
            <h3> Thanks for the support</h3>
            <p>To keep the lights on around here, we rely on solely donations.</p><p>We appreciate our the chill nature of our audience and the lovely content creators. Becasue of this we do not run ads on our platform.</p>
            <a id="support" href='https://ko-fi.com/H2H223K32' target='_blank'><img height='36' style={{'border':'0px','height':'36px'}} src={link} alt='Support us at ko-fi.com' /></a>
            </div>
            <img src={Logo} className="lofm-stamp" loading="lazy"/>
        </div>
    )
}
