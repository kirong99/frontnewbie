import React, { useState, useContext} from "react";
import ColorContext, {ColorConsumer} from './Color';
import Note from "./Note";
import SelectColors from "./SelectColor";
import { ColorProvider } from './Color';
import { da } from "date-fns/locale";
import Moment from 'moment'

function Todo( { event }){

    const {state} = useContext(ColorContext);
    // 왼쪽 색상 변경
    const reset = document.getElementsByClassName("left");
    const [color,setColor] = useState(false);
    const tab = useState('white');
    const reset_note = () => {
      reset = {tab}
    }
    const formatDate = Moment().format('YYYY-MM-DD');

    // 오른쪽 색상 변경
    const reset2 = document.getElementsByClassName("right");
    const [postcolor,setPostcolor] = useState(false);
    const tab2 = useState('yellow');
    const reset_post = () => {
      reset2 = {tab2}
    }
    
    return(
      <div className='content'>
        <ColorProvider>
          <Note className="gg" />
          <div className="color_revise">
            <button onClick={() => {setColor(!color)}}>노트 색상 수정</button>
            
            <button onClick={reset_note} className="reset_button">초기화</button>
            {color && <SelectColors />}
          </div>
        
        <div className='right' style={{background: state.postcolor}}>
          <div className='sticker'></div>
          <div>
              {event.map((it, idx)=>(
                <div key={idx}>
                  <div style={{display: formatDate === it.start ? "flex" : "none"}}>일정 : {it.title}</div>
                </div>
              ))}
            </div>
        </div>
        <div className="post_color_revise">
            <button onClick={() => {setPostcolor(!postcolor)}}>포스트잇 색상 수정</button>
            <button onClick={reset_post} className="reset_button">초기화</button>
            {postcolor && <SelectColors />}
          </div>
        </ColorProvider>
      </div>
  )


}



export default Todo;