import React, { useContext,useState,useRef, useEffect } from 'react'
import ColorContext, {ColorConsumer} from './Color';

const Note = () => {
    const {state} = useContext(ColorContext);

    useEffect(()=>{
      window.localStorage.setItem("noteColor",state.color)
    },[state.color])

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