import React from 'react';
import { Row, Col } from 'antd';

export default function ChannelBio(props) {
    if (window.innerWidth < 1024 ) {
        return (
            <div style={{"maxWidth":"500px","margin":"0 auto"}}>
                {/** Bio */}
                <Row type="flex" className="justify-center">
                    <Col span={18} className="channel-bio" >  
                        <h1 className="channel">{props.name}</h1>
                        <h3>{props.viewers}</h3>
                    </Col>
                    <Col span={18} className="channel-bio" >           
                        <p>{props.bio}</p>
                    </Col>
                </Row>

                {/** Marquee */}
                <Row className="justify-center">
                    <Col span={18} style={{"flexDirection":"column"}}>
                        <div className="divider"></div>
                        <marquee scrollamount={2}> <p>T h a n k s &nbsp; f o r &nbsp; L i s t e  n i n g <span>😏</span></p> </marquee>
                        <div className="divider"></div>
                    </Col>
                </Row>
            </div>
        )
    } return (
        <React.Fragment>
            <Row>
                {/** Channel Info */}
                <Col>
                <div className="channel-info">
                    <h1 className="channel">{props.name}</h1>
                    <div className="channel-bio" >                
                        <p>{props.bio}</p>
                    </div>
                </div>
                </Col>
            </Row>
        </React.Fragment>
    )
}