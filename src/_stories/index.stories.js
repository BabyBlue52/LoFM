import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import { ChannelHolder } from '../components/ChannelHolder';
import { RecentUploads } from '../components/ChannelUploads';
import { GifHandler } from '../components/GifHandler'; 
import { ChatButton, PlayButton } from '../components/Buttons/ChatButtons';
import { SoundWave } from '../components/animation';

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