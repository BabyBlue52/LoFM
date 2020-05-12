import React from 'react';
import { motion } from 'framer-motion';

import Logo from '../img/logo.svg';

export function Loader() {
    return (
        <>  
            <motion.div className="animation-backdrop">
                <div className="logo">
                 <img src={Logo} className="lofm"/>
                 <h3>loading...</h3>    
                </div>
            </motion.div>
        </>
    )
} 