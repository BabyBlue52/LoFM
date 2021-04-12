import React, { useState } from 'react';
import { motion }from 'framer-motion';
import { Spin } from 'antd';
import { LoadingOutlined } from '@ant-design/icons';

import Logo from '../img/logo.svg';

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
    }
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

function Loader() {
  const containerTransition = {
      end: {
        transition: {
          staggerChildren: 0.6
        }
      }
  }
  const fill = {
    start: {
      opacity: 0.05
    },
    end: {
      opacity:1
    }
  }

  const bottom = {
    start: {
        width: "0px",
    },
    end: {
        width: "100%"
    }
  }

  const right = {
    start: {
        height: "0px",
    },
    end: {
        height: "100%"
    }
  }

  const top = {
    start: {
        width: "0px",
    },
    end: {
        width: "100%"
    }
  }

  const left = {
    start: {
        height: "0px",
    },
    end: {
        height: "calc(100% - 55px)"
    }
  }

  const barTransition = {
      duration: 0.75,
      ease: "easeInOut"
  }
  const fillTransition = {
    duration: 2.7,
      ease: "easeInOut"
  }
 
  return (
        <>  
            <motion.div
            animate="end"
            variants={containerTransition} 
            className="animation-backdrop"
            >
                <motion.div variants={bottom} transition={barTransition} className="border-bot"/>
                <motion.div variants={right} transition={barTransition} className="border-right"/>
                <motion.div variants={top} transition={barTransition} className="border-top"/>
                <motion.div variants={left} transition={barTransition} className="border-left"/>
                <motion.div 
                variants={fill} 
                initial="start" 
                animate="end" 
                transition={fillTransition} 
                className="logo"
                >
                 <img src={Logo} className="lofm"/>
                 <h3>loading...</h3>    
                </motion.div>
            </motion.div>
        </>
    )
}



function Spinner() {
  const antIcon = <LoadingOutlined style={{ fontSize: 20 }} spin />
  return (
    <>
    <Spin indicator={antIcon}/>
    </>
  )
}


export { SoundWave, Loader, Spinner };
