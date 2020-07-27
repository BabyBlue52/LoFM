import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { Provider } from 'react-redux';

import { PushMenu } from './components/Menu';
import { AuthContext } from './components/Auth';
import PrivateRoute from "./components/PrivateRoute";
import store from './_redux/createStore';
import { loadUser } from './_redux/actions/authAction';

import RadioTuner from './pages/RadioTuner';
import Dashboard from './pages/Dashboard';
import { LoginPage } from './pages/Login';
import { SignUpPage } from './pages/SignUp';
import { Chat } from './components/Chat'

import 'antd/dist/antd.css';
import './style.scss';


const Desktop = ({ children }) => {
  const isDesktop = useMediaQuery({ minWidth: 1024 })
  return isDesktop ? children : null
}
const Mobile = ({ children }) => {
  const isMobile = useMediaQuery({ maxWidth: 1023 })
  return isMobile ? children : null
}
  
function App() {
   useEffect(() => {
    store.dispatch(loadUser());
   }, [])

    return (
      <React.Fragment>
        <Provider store={store} >
          {/* Mobile Size */}
          <Mobile>
            <AuthContext.Provider>
              <Router>
                <Switch>
                  <div id="app">
                    <div className="sunset-skin">
                      <Route exact path="/" component={RadioTuner} />
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
          <Router>
                <Switch>
                  <div id="app-desktop">
                    <div className="sunset-skin">
                      <Route exact path="/" component={Dashboard} />
                      <Route exact path="/login" component={LoginPage} />
                      <Route exact path="/sign-up" component={SignUpPage}/>
                    </div> 
                  </div>
                </Switch>
              </Router>
        </Desktop>
        </Provider>
      </React.Fragment>
    )
  }

ReactDOM.render( <App/>, document.getElementById('root')); 