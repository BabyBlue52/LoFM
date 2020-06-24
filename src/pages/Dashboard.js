import React, { useState, useEffect } from 'react';
import { useDispatch } from 'redux';
import { Row, Col, Input, Badge } from 'antd';


import { Button } from '../components/Button';
import { DashboardHeader } from '../components/DashboardHeader';

export default function Dashboard(props){
    return(
        <React.Fragment>
            {/** Header bar */}
            <Row>
                <DashboardHeader />
            </Row>
            {/** Dashboard Content */}
            <Row style={{'height':'100%'}}>
                <Col span={6}>
                    <div style={{'width':'100%', 'background':'','height': '100%','paddingTop':'10px'}}>
                        <h1 className="channel-header">#Channels</h1>
                    </div>
                </Col>
                <Col span={12}>
                    <div style={{'width':'100%', 'background':'#beeeef','height': '100%'}}></div>
                </Col>
                <Col span={6}>
                    <div style={{'width':'100%', 'background':'#ffc72c','height': '100%'}}></div>
                </Col>
            </Row>
        </React.Fragment>

    )
}