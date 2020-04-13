import React, { useState } from 'react';
import { Row, Col } from 'antd';
import { Frame, Page } from "framer";
import { motion }from 'framer-motion';

import { ChatButton } from '../../components/Button';
import { ChannelHolder } from '../../components/ChannelHolder';
import DataFetching from '../../apis/Youtube';


export function BootlegBoy() {
    const [data, setData] = useState([
        {
            title:"",
            artist:"",
            videos:[]
        }
    ])
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
                    <div className="spacer"></div>
                    <Row className="justify-center">
                        <Col span={18} className="justify-center" > 
                            <ChatButton/>
                        </Col>
                    </Row>  
                    <div className="spacer"></div>
                    <ChannelHolder/>
                    <div className="spacer"></div>
                    <motion.div>

                    </motion.div>
                </Frame>
              
            </Page>
            
                  
        </>
    )
}
