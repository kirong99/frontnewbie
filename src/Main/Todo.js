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
    const [color,setColor] = useState(false);

    const formatDate = Moment().format('YYYY-MM-DD');

    // 오른쪽 색상 변경
    const [postcolor,setPostcolor] = useState(false);
    
    return(
      <div className='content'>
        <ColorProvider>
          <Note />
          <div className="color_revise">
            <button onClick={() => {setColor(!color)}}>노트 색상 수정</button>
            {/* <button className="reset_button">초기화</button> */}
            {color && <SelectColors />}
          </div>

          <Post />
          <div className="post_color_revise">
              <button onClick={() => {setPostcolor(!postcolor)}}>포스트잇 색상 수정</button>
              {/* <button className="reset_button">초기화</button> */}
              {postcolor && <SelectPostColors />}
          </div>
        </ColorProvider>
        
      </div>
  )


}



export default Todo;