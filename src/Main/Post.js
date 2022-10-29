import { useContext, useState } from 'react';
import ColorContext from './Color';
import Moment from 'moment'

const Post = ({dataList}) => {
    console.log(dataList)
    const {state} = useContext(ColorContext);
    const formatDate = Moment().format('YYYY-MM-DD');
    return (
        <div className='right' style={{background: state.postcolor}}>
            <div className='sticker' style={{background : state.stickercolor}}>{formatDate}</div>
            <div class="right_box">
                {/* {events.map((it, idx)=>(
                  <div key={idx}>
                    <div class="sche" style={{display: formatDate === it.start ? "flex" : "none"}}>{formatDate === it.start ? it.title : "일정이 없습니다."}</div>
                  </div>
                ))} */}
          </div>
        </div>
    )
}

export default Post;