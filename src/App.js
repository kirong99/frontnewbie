import React from 'react';
import Header from './header.js';
import './App.css';
import './main.css';

function App() {
  return(
    <div>
      <Header/>
      <div className='content'>
        <div className='left'>
          <div className='sp'>
            <div><div className='line'></div><div className='circle'></div></div>
            <div><div className='line'></div><div className='circle'></div></div>
            <div><div className='line'></div><div className='circle'></div></div>
            <div><div className='line'></div><div className='circle'></div></div>
            <div><div className='line'></div><div className='circle'></div></div>
            <div><div className='line'></div><div className='circle'></div></div>
          </div>
          
        </div>
        <div className='right'>
          <div className='sticker'></div>
        
          
        </div>
      </div>
    </div>
  )
}

export default App;
