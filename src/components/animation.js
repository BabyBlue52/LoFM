import React, { useState } from 'react';
import { motion, useAnimation }from 'framer-motion';
import { MdMoveToInbox } from 'react-icons/md';


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
     
    const noVariant = {
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
          style={{display:"flex",transform:"scaleY(-1)", maxHeight:"20px",minHeight:"20px"}}
        >
          <motion.div className="bar" variants={barVariant} transition={barTransition}  />
          <motion.div className="bar" variants={barVariant} transition={barTransition} />
          <motion.div className="bar" variants={barVariant} transition={barTransition} />
          <motion.div className="bar" variants={barVariant} transition={barTransition} />
        </motion.div>
        </>
      ) 
}

export { SoundWave };
