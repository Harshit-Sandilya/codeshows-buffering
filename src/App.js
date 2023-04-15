import './App.css';
// import React from 'react';
import home from './images/home.png';
import event from './images/events.png';
function App() {
  return (
    <div className='navbar'>
      <div className='logo'>CodeShows</div>
      <div className='menu'>
        <div className='home'>
          <img src={home} alt=''></img>
          <p>Home</p>
          <div className='events'>
            <img src={event} alt=''></img>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
