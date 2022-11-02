import React, { useState, useContext} from "react";
import ColorContext, {ColorConsumer} from './Color';
import Note from "./Note";
import SelectColors from "./SelectColor";
import { ColorProvider } from './Color';
import Moment from 'moment'
import SelectPostColors from "./SelectPostColor";
import Post from "./Post";

function Todo(){

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
    const tab2 = useState('#fefeb2');
    const reset_post = () => {
      reset2 = {tab2}
    }
    
    return(
      <div className='content'>
        <ColorProvider>
          <Note />
          <div className="color_revise">
            <button onClick={() => {setColor(!color)}}>노트 색상 수정</button>
            <button onClick={reset_note} className="reset_button">초기화</button>
            {color && <SelectColors />}
          </div>


          <Post  />
          <div className="post_color_revise">
              <button onClick={() => {setPostcolor(!postcolor)}}>포스트잇 색상 수정</button>
              <button onClick={reset_post} className="reset_button">초기화</button>
              {postcolor && <SelectPostColors />}
          </div>
        </ColorProvider>
        
      </div>
  )


}



export default Todo;