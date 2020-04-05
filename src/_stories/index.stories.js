import React from 'react';

import { storiesOf } from '@storybook/react';
//import { action } from '@storybook/addon-actions';
import { ChannelHolder } from '../components/ChannelHolder';
import { ChatButton } from '../components/Buttons/ChatButtons';
import { GifHandler } from '../components/GifHandler'; 
import { SoundWave } from '../components/animation';

storiesOf("App", module)
  .add('Mobile View', () => (
    <div>
    </div>
  ))

storiesOf("Animations", module)
  .add('SoundWave', () =>(
    <div className="story-container">
      <SoundWave/>
    </div>
  ))
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

storiesOf("Buttons", module)
.add('ChatButton', () => (
  <div class="story-container">
      <ChatButton/>
  </div>
))