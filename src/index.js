import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { Provider } from 'react-redux';
import store from './store';

import RadioTuner from './pages/RadioTuner';
import { Menu } from './components/Menu';
import './style.scss';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}


function App() {

    return(
      <Provider store={store}>
        {/* Mobile Size */}
        <Mobile>
          <div id="app">
            <div className="sunset-skin">
              <RadioTuner/>
              <Menu/>
            </div>
          </div>
        </Mobile>

        {/* Desktop Size */}
        <Desktop>
          <div id="app-desktop">
            <RadioTuner/>
            <Menu/>
          </div>
        </Desktop>
      </Provider>
    )
  }

ReactDOM.render( <App/>, document.getElementById('root')); 