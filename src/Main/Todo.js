import React from "react";
import option from '../image/option.png';

function Todo(){
/*  <script>
 const option_button = function(){
    $('#option').click(function(){
      if($('#option').css("display") == "none"){
        $('#option_layout').show();
      }
    })
  }
</script> */
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
          <div className="option" id="option">
            <img className='option_ico' src={option} alt='option'/>
          </div>
          <div id="option_layout">
              <button id="revise">내용 수정하기</button>
              <button id="color_revise">색상 수정하기</button>
          </div>
          
        </div>
        <div className='right'>
          <div className='sticker'></div>
        
          
        </div>
      </div>
    )

    
}


export default Todo;