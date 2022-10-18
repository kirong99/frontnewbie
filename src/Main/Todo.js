import React, { useState, useContext} from "react";
import Note from "./Note";
import SelectColors from "./SelectColor";
import { ColorProvider } from './Color';

function Todo(){
    const reset = document.getElementsByClassName("left");
    const [color,setColor] = useState(false);
    const tab = useState('white');
    const reset_note = () => {
      reset = {tab}
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
        </ColorProvider>
        <div className='right'>
          <div className='sticker'></div>
        </div>
      </div>
  )


}



export default Todo;