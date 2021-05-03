import React, { useState, useEffect } from 'react';
import { Page } from 'framer';
import axios from 'axios';

import { MobileContent } from '../components/MobileContent';
import store from '../_redux/createStore';
import { loadUser } from '../_redux/actions/authAction';

export default function RadioTuner() {

    useEffect(() => {    
        // Check if user is signed in 
        if (store.getState().auth.user != null) {
            store.dispatch(loadUser());
            axios.get(`${process.env.REACT_APP_BASE_URL}/api/info`,{
                header: { Authorization: "Bearer " }
            })
            .then( res => {
                console.log(res);
            })
            .catch(err => {
                console.log(err);
            })
        } else {
            console.log("Not Signed In");
        }
               
    }, []);
    
    return( 
        <div>
            <Page 
                className="scaling"
                direction="vertical"
                directionLock={true}
            >
                <MobileContent />
           
            </Page>
        </div>
    )
}