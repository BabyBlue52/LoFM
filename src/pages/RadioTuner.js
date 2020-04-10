import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Frame, Page } from "framer";

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
                        <Col span={24}>
                            <h1>Radio Tuner</h1>   
                        </Col>
                    </Row>  
                </Frame>
              
            </Page>
                  
        </>
    )
}
