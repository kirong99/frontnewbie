import React, { useContext,useState } from 'react'
import ColorContext, {ColorConsumer} from './Color';
import option_ico from '../image/option.png';
import Option from './Option';

const Note = () => {
    const {state} = useContext(ColorContext);
    const [option_dropdown, setOption] = useState(false);

    return(
          <div className='left' style={{background: state.color}}>
            <div className='sp'>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
            </div>
            <div className="option_com">
              <button  className="option" onClick={() => {setOption(!option_dropdown);}}>
              <img className='option_ico' src={option_ico} alt='option_ico'/> 
              </button>
              {option_dropdown && <Option />}
            </div>
          </div>
    )
}

export default Note