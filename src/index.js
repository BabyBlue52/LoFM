import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PushMenu } from './components/Menu';
import { AuthProvider } from './components/Auth';
import PrivateRoute from "./components/PrivateRoute";

import RadioTuner from './pages/RadioTuner';
import { LoginPage } from './pages/Login';
import { SignUpPage } from './pages/SignUp';

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
    return (
      <React.Fragment>
        {/* Mobile Size */}
        <Mobile>
          <AuthProvider>
            <Router>
              <Switch>
                <div id="app">
                  <div className="sunset-skin">
                    <Route exact path="/" component={RadioTuner}/>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/sign-up" component={SignUpPage}/>
                  </div> 
                </div>
              </Switch>
            </Router>
            <PushMenu/>
          </AuthProvider>
        </Mobile>

        {/* Desktop Size */}
        <Desktop>
          <div id="app-desktop">
            <RadioTuner/>
            <PushMenu/>
          </div>
        </Desktop>
      </React.Fragment>
    )
  }

ReactDOM.render( <App/>, document.getElementById('root')); 