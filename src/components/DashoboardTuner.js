import React, {useState } from 'react';
import { Row, Col } from 'antd';
import { Page } from 'framer';


export function DashboardTuner(props) {
    const channels = [
        {title:'1'},{title:'2'},{title:'3'},{title:'4'},{title:'5'}
    ]

    return (
        <React.Fragment>
            <div className="card-container">
                <div className="super-spacer"></div>
                <Row justify="start" >
                {channels.map((item, i) => {
                    return (
                        <Col span={props.span} offset={props.offset}>
                            <div key={i} className="artist-card _dropShadow">
                                <h2>{item.title}</h2>
                            </div>
                        </Col>
                    )
                })}
                </Row>
                <div className="super-spacer"></div>
            </div>
        </React.Fragment>
    )
}