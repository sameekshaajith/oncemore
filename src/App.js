import React, { useState } from 'react';

import Home from './components/home/Home'
import Projects from './components/projects/Projects'
import Profile from './components/profile/Profile'

import './App.css';

function App() {
  const [headers, setHeaders] = useState(['Home', 'Opportunities'])
  const [display, setDisplay] = useState(0)

  const changeDisplay = (index) => {
    setDisplay(index)
    setHeaders(['Home', 'Oppotunities'])
  }

  const goTo = (tab) => {
    setHeaders(['Home', tab, 'Oppotunities'])
    //for Profile and Work
    setDisplay(1)
  }

  return (
    <div className='app'>
      <div className='toCenter'> 
        <div className='top'>
          <div className='title'>
            <div>
              <h1>Shaji Panikkar</h1>
              <h4>Financial Professional</h4>
            </div>
          </div>
          <div className='headers'>
            {headers.map((item, index) => {
              return <div onClick={() => {changeDisplay(index)}} 
                className={`header ${display === index ? 'currentTab' : ''}`}> {item} </div>
            })}
          </div>
        </div>
      </div>
      <div className='bodyy'>
        <div className='content'>
          {display === 0 ? <Home goTo={goTo}/> : ''}
          {display === 1 && <Profile />}
          {display === 2 ? <Projects /> : ''}
        </div>
      </div>
      <div className='footer'>

      </div>
    </div>
  );
}

export default App;
