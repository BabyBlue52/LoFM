import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import { useMediaQuery } from 'react-responsive';

import RadioTuner from './pages/RadioTuner';
import Chat from './pages/Chat';
import SearchPage from './pages/Search';
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
      <>

      )}
        {/* Mobile Size */}
        <Mobile>
          <div id="app">
            <div className="sunset-skin">
              <Router>
                <Switch>
                  <Route exact path="/" component={RadioTuner}/>
                  <Route path="/chat" component={Chat}/>
                  <Route path="/search" component={SearchPage}/>
                </Switch>
              </Router>
              <Menu/>
            </div>
          </div>
      </Mobile>

        {/* Desktop Size */}
        <Desktop>
          <div id="app-desktop">
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

ReactDOM.render( <App/>, document.getElementById('root')); 