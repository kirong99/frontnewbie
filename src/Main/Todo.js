import React, { useState, useContext} from "react";
import option_ico from '../image/option.png';
import OptionNae from './Option';
import ColorContext, {ColorConsumer} from './Color';


function Todo(){
  const {state} = useContext(ColorContext);
 const [option_dropdown, setOption] = useState(false);

    return(
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
          <div className="option_com" style={{background: state.color,}}>

            <button  className="option" onClick={() => {setOption(!option_dropdown);}}>
             <img className='option_ico' src={option_ico} alt='option_ico'/> 
            </button>

            {option_dropdown && <OptionNae />}
          </div>

        </div>
        
      <div className='right'>
        <div className='sticker'></div>


      </div>
    </div>
  )


}



export default Todo;