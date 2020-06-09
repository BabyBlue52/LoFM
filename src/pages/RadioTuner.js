import React, { useState, useEffect } from 'react';
import { Page } from 'framer';
import { notification } from 'antd';
import axios from 'axios';
import { BootlegBoy } from './channels/BootlegBoy';
import fire from '../base';

export default function RadioTuner() {
    const [state, setState] = useState({
        isLoggedIn: null,
        displayName: null
    });


    const welcomeNotification = () => {
        notification.open({
          message: `Welcome back, @${state.displayName}`,
          className: 'lo-welcome',
          placement: 'topRight',
          duration: 4.5,
        });
      };

    useEffect(() => {    
        axios.get('https://dev.lofifm.com/api/info',{
            header: { Authorization: "Bearer " }
        })
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            console.log('');
        }) 
        // if(state.displayName !== null) {
        //     setState(state.displayName = state.displayName)
        //     setTimeout(function(){
        //         welcomeNotification();
        //     }, 2500);
        // } else {
        //     setState(state.displayName = 'Anonymous');
        // }
        
       
    }, []);

    return( 
        <>
            <Page 
                className="scaling"
                direction="vertical"
                directionLock={true} 
            >
                <BootlegBoy />
                <Page > <h1>The Chilled Cow</h1></Page>
            </Page>
        </>
    )
}