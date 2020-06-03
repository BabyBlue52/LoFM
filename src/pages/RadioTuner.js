import React, { useState, useEffect } from 'react';
import { Page } from 'framer';
import { notification } from 'antd';

import { BootlegBoy } from './channels/BootlegBoy';
import fire from '../base';

export default function RadioTuner() {
    const [state, setState] = useState({
        isLoggedIn: null,
        displayName: ''
    });

    const user = fire.auth().currentUser;

    const welcomeNotification = () => {
        notification.open({
          message: `Welcome back, @${state.displayName}`,
          className: 'lo-welcome',
          placement: 'topRight',
          duration: 4.5,
        });
      };

    useEffect(() => {
        if(user !== null) {
            setState( state.displayName = user.displayName );
            setTimeout(function(){
                welcomeNotification();
            }, 2500);
        }
        else(
            window.location.href = '/login'
        )
       
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