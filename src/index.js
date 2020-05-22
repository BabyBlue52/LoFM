import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import { Loader } from './components/animation';
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
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    setTimeout(function(){
      setLoading(false);
    }, 0);
  }, []);
  
    return (
      loading ? <Loader/> : 
      <React.Fragment>
        {/* Mobile Size */}
        <Mobile>
          <AuthProvider>
            <Router>
              <div id="app">
                <div className="sunset-skin">
                  <PrivateRoute exact path="/" component={RadioTuner}/>
                  <Route exact path="/login" component={LoginPage} />
                  <Route exact path="/signup" component={SignUpPage}/>
                </div>
              </div>
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