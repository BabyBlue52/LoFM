import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { PushMenu } from './components/Menu';
import { AuthContext } from './components/Auth';
import PrivateRoute from "./components/PrivateRoute";

import RadioTuner from './pages/RadioTuner';
import { LoginPage } from './pages/Login';
import { SignUpPage } from './pages/SignUp';
import { Chat } from './pages/Chat'

import './style.scss';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 768 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 767 })
  return isMobile ? children : null
}


function App(props) {
    const existingTokens = JSON.parse(localStorage.getItem("tokens"));
    const [authTokens, setAuthTokens] = useState(existingTokens);
    
    const setTokens = (data) => {
      localStorage.setItem("tokens", JSON.stringify(data));
      setAuthTokens(data);
    }
    return (
      <React.Fragment>
      
        {/* Mobile Size */}
        <Mobile>
          <AuthContext.Provider value={{ authTokens, setAuthTokens: setTokens }}>
            <Router>
              <Switch>
                <div id="app">
                  <div className="sunset-skin">
                    <Route exact path="/" component={RadioTuner}/>
                    <Route exact path="/login" component={LoginPage} />
                    <Route exact path="/sign-up" component={SignUpPage}/>
                    <PrivateRoute exact path="/chat" component={Chat}/>
                  </div> 
                </div>
              </Switch>
            </Router>
            <PushMenu/>
          </AuthContext.Provider>
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