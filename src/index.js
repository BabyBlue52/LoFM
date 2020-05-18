import React, { useState, useEffect } from 'react';
import ReactDOM from 'react-dom';
import { useMediaQuery } from 'react-responsive';
import { Provider } from 'react-redux';

import { Loader } from './components/animation';
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
      </React.Fragment>
    )
  }

ReactDOM.render( <App/>, document.getElementById('root')); 