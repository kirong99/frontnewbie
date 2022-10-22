import React, { useState, useContext} from "react";
import Note from "./Note";
import SelectColors from "./SelectColor";
import { ColorProvider } from './Color';
import { da } from "date-fns/locale";
import Moment from 'moment'

function Todo( { event }){
    const reset = document.getElementsByClassName("left");
    const [color,setColor] = useState(false);
    const tab = useState('white');
    const reset_note = () => {
      reset = {tab}
    }
    const formatDate = Moment().format('YYYY-MM-DD');
    return(
      <div className='content'>
        <ColorProvider>
          <Note className="gg" />
          <div className="color_revise">
            <button onClick={() => {setColor(!color)}}>노트 색상 수정</button>
            
            <button onClick={reset_note} className="reset_button">초기화</button>
            {color && <SelectColors />}
          </div>
        </ColorProvider>
        <div className='right'>
          <div className='sticker'>
          </div>
          <div>
              {event.map((it, idx)=>(
                <div key={idx}>
                  <div style={{display: formatDate === it.start ? "flex" : "none"}}>일정 : {it.title}</div>
                </div>
              ))}
            </div>
        </div>
      </div>
  )


}



export default Todo;