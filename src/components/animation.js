import React, { useState } from 'react';
import { motion }from 'framer-motion';


function SoundWave() {
    const containerTransition = {
        start: {
            transition: {
              staggerChildren: 0.3
            }
          },
          end: {
            transition: {
              staggerChildren: 0.3
            }
          }
      }
      
    const barVariant = {
        start: {
            height: "8px",
        },
        end: {
            height: "20px"
        }
    }
     
    const barTransition = {
        duration: 0.9,
        yoyo: Infinity,
        ease: "easeInOut"
    };
      return (
        <>
        <motion.div
          initial="start"
          animate="end"
          variants={containerTransition}
          className="bar-container"
        >
          <motion.div className="bar" variants={barVariant} transition={barTransition}  />
          <motion.div className="bar" variants={barVariant} transition={barTransition} />
          <motion.div className="bar" variants={barVariant} transition={barTransition} />
          <motion.div className="bar" variants={barVariant} transition={barTransition} />
          <motion.div className="bar" variants={barVariant} transition={barTransition} />
        </motion.div>
        </>
      ) 
}

export { SoundWave };
