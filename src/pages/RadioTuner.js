import React, { useState, useEffect } from 'react';
import { Page, Frame } from 'framer';
import axios from 'axios';

import { IoMdArrowRoundUp, IoMdArrowRoundDown } from 'react-icons/io';
import { MobileContent } from '../components/MobileContent';
import store from '../_redux/createStore';
import { loadUser } from '../_redux/actions/authAction';

export default function RadioTuner() {

    const [stations, setStations] = useState([
        'The Bootleg Boy',
        'Ryan Celcius',
        'The Chilled Cow'
    ])

    useEffect(() => {    
        store.dispatch(loadUser());
        console.log(store.getState())
        axios.get(`${process.env.REACT_APP_BASE_URL}/api/info`,{
            header: { Authorization: "Bearer " }
        })
        .then( res => {
            console.log(res);
        })
        .catch(err => {
            console.log(err);
        })
       
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