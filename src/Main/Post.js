import { useContext, useState } from 'react';
import ColorContext from './Color';
import Moment from 'moment'

const Post = ({event}) => {
    const {state} = useContext(ColorContext);
    const formatDate = Moment().format('YYYY-MM-DD');
    return (
        <div className='right' style={{background: state.postcolor}}>
            <div className='sticker' style={{background : state.stickercolor}}>{formatDate}</div>
            <div>
                {event.map((it, idx)=>(
                  <div key={idx}>
                    <div style={{display: formatDate === it.start ? "flex" : "none"}}>일정 : {formatDate === it.start ? it.title : "일정이 없습니다."}</div>
                  </div>
                ))}
              </div>
          </div>
    )
}

export default Post