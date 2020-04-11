import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Frame, Page } from "framer";
import { ChatButton } from '../components/Button';

export function RadioTuner() {
    return(
        <>
            <Page 
                alignment="center"
                defaultEffect={"none"}
                currentPage={1}
            >                
                <Frame size={500}>
                    <Row>
                        <Col span={24}>
                            <h1>Recently Uploaded</h1>                             
                        </Col>
                    </Row>  
                </Frame>
                <Frame size={500}>
                    <Row>
                        <Col span={18} className="justify-center"> 
                            <ChatButton/>  
                        </Col>
                    </Row>  
                </Frame>
              
            </Page>
                  
        </>
    )
}
