import React, { useState, useEffect } from 'react';
import { Page, Frame } from 'framer';
import axios from 'axios';
import { notification } from 'antd';
import { IoMdArrowRoundUp, IoMdArrowRoundDown } from 'react-icons/io';
import { BootlegBoy } from './channels/BootlegBoy';
import store from '../_redux/createStore';
import { loadUser } from '../_redux/actions/authAction';

import Celcius from '../img/stamp/celcius-stamp.png';
import BootLeg from '../img/stamp/bootleg-stamp.png';

export default function RadioTuner() {
    const [state, setState] = useState({
        displayName: null
    })
    const [stations, setStations] = useState([
        'The Bootleg Boy',
        'Ryan Celcius',
        'The Chilled Cow'
    ])
    const welcomeNotification = () => {
        notification.open({
          message: `Welcome back, ${state.displayName}`,
          className: 'lo-welcome',
          placement: 'topRight',
          duration: 4.5,
        });
      };
    
    useEffect(() => {    
        store.dispatch(loadUser());
        console.log(store.getState())
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
        <div>
            <Page 
                className="scaling"
                direction="vertical"
                directionLock={true}
            >
                <BootlegBoy />
                <Page>
                    {/** Interstitial Frame */}
                    <Frame className="stamp">
                        <IoMdArrowRoundUp/>
                        <h1>{stations[0]}</h1>
                        <img src={BootLeg} />                        
                        <img src={Celcius}/> 
                        <h1>{stations[1]}</h1>  
                        <IoMdArrowRoundDown/>                       
                    </Frame>   
                </Page>
            </Page>
        </div>
    )
}