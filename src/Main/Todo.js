import React, { useState } from "react";
import option_ico from '../image/option.png';
import OptionNae from './Option';


const test = document.querySelector("color_layer");
function Todo() {
  const [option_dropdown, setOption] = useState(false);
  return (
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
        <div className="option_com">

          <button className="option"
            onClick={() => {
              setOption(!option_dropdown);
            }}
          >
            <img className='option_ico' src={option_ico} alt='option_ico' />
          </button>
        </div>
        {option_dropdown && <OptionNae />}
      </div>
      <div className='right'>
        <div className='sticker'></div>


      </div>
    </div>
  )


}


export default Todo;