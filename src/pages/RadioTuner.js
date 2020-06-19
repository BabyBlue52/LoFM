import React, { useState, useEffect } from 'react';
import { Page } from 'framer';
import axios from 'axios';
import { notification } from 'antd';

import { BootlegBoy } from './channels/BootlegBoy';
import store from '../_redux/createStore';
import { loadUser } from '../_redux/actions/authAction';

export default function RadioTuner() {
    const welcome = () => {
        notification.open({
          message: `Welcome back,`,
          className: 'lo-welcome',
          placement: 'topRight',
          duration: 4.5,
        });
      };
    
    useEffect(() => {    
        store.dispatch(loadUser());
        axios.get('https://dev.lofifm.com/api/info',{
            header: { Authorization: "Bearer " }
        })
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
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