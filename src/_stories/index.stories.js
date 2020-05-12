import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import { ChannelHolder } from '../components/ChannelHolder';
import { RecentUploads } from '../components/ChannelUploads';
import Modal from '../components/Modal';
import { GifHandler } from '../components/GifHandler'; 
import { ChatButton, PlayButton, GoogleButton } from '../components/Button';
import { SoundWave, Loader } from '../components/animation';
import { Menu } from '../components/Menu';
import { ChatBubble } from '../components/ChatBubble';

storiesOf("App", module)
  .add('Mobile View', () => (
    <div>
    </div>
  ))

/*
===============
  Animations
===============
*/
storiesOf("Animations", module)
  .add('SoundWave', () =>(
    <div className="story-container">
      <SoundWave/>
    </div>
  ))
  .add('Loader', () =>(
    <div className="" style={{'maxHeight':'100%'}}>
      <Loader/>
    </div>
  ))


/*
===============
    Components
===============
*/
storiesOf("Components", module)
  .add('Channel Holder', () => (
    <div className="story-container">
      <ChannelHolder/>
    </div>
  ))

  .add('Gif Handler', () => (
    <div className="story-container">
      <GifHandler/>
    </div>
  ))
  .add('Video Container', () => (
    <div className="story-container">
      <RecentUploads/>
    </div>
  ))
  .add('Modal', () => (
    <div className="story-container">
      <Modal/>
    </div>
  ))
  .add('Menu', () => (
    <div className="story-container" >
      <Menu/>
    </div>
  ))
  .add('Single Chat', () => (
    <div className="story-container" >
      <ChatBubble />
    </div>
  ))

/*
================
    Buttons
================
*/
storiesOf("Buttons", module)
.add('ChatButton', () => (
  <div class="story-container">
      <ChatButton/>
  </div>
))
.add('PlayButton', () => (
  <div class="story-container">
      <PlayButton/>
  </div>
))
.add('GoogleButton', () => (
  <div class="story-container">
      <GoogleButton/>
  </div>
))