import React, { useContext,useState,useRef } from 'react'
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
            <div className='addTodo'>
              <input type="text" name="title"></input>
              <input type="submit"></input>
            </div>
          </div>
    )
}

export default Note;