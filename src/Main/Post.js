import { useContext, useEffect, useState } from 'react';
import ColorContext from './Color';
import Moment from 'moment'

const Post = () => {
    const {state} = useContext(ColorContext);
    const postcolor = JSON.parse(localStorage.getItem("postColor"))

    const event = JSON.parse(localStorage.getItem("event"))

    
    useEffect(()=>{
      window.localStorage.setItem("postColor",JSON.stringify(state.postcolor))
    },[state.postcolor])
    
    
    const formatDate = Moment().format('YYYY-MM-DD');
    return (
        <div className='right' style={{background: postcolor}}>
            <div className='sticker' style={{background : state.stickercolor}}>{formatDate}</div>
            <div className="right_box">
                {event && event.map((it, idx)=>(
                  <div key={idx}>
                    <div className="sche" style={{display: formatDate === it.date ? "flex" : "none"}}>{it.title}</div>
                  </div>
                ))}
          </div>
        </div>
    )
}

export default Post;