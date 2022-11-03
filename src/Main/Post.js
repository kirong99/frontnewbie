import { useContext, useState } from 'react';
import ColorContext from './Color';
import Moment from 'moment'

const Post = () => {

    const event = JSON.parse(localStorage.getItem("event"));
    const {state} = useContext(ColorContext);
    const formatDate = Moment().format('YYYY-MM-DD');
    return (
        <div className='right' style={{background: state.postcolor}}>
            <div className='sticker' style={{background : state.stickercolor}}>{formatDate}</div>
            <div class="right_box">
                {event && event.map((it, idx)=>(
                  <div key={idx}>
                    <div class="sche" style={{display: formatDate === it.date ? "flex" : "none"}}>{it.title}</div>
                  </div>
                ))}
          </div>
        </div>
    )
}

export default Post;