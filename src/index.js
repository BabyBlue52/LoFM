import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import { RadioTuner } from './pages/RadioTuner';
import Chat from './pages/Chat';
import './style.scss';

const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}

class App extends React.Component {
  render() {
    return(
      <>
      {/* Mobile Size */}
      <Mobile>
          <div id="app">
            <div className="sunset-skin">
              <Router>
              <Switch>
                <Route exact path="/">
                  <RadioTuner />
                </Route>
                <Route path="/chat">
                  <Chat />
                </Route>
              </Switch>
              </Router>
            </div>
          </div>   
        </Mobile>

       {/* Desktop Size */}
        <Desktop>
          <div id="app">
            <Router>
              <Switch>
                <Route exact path="/">
                  <RadioTuner />
                </Route>
                <Route path="/chat">
                  <Chat />
                </Route>
              </Switch>
            </Router>
          </div>
        </Desktop>
      </>
    )
  }
}

ReactDOM.render( <App/>, document.getElementById('root'));