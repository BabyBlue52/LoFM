import { configure } from '@storybook/react';

function loadStories() {
    require('../src/_stories/index.stories');
}

configure(loadStories, module);