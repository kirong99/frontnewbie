import { useContext, useEffect } from 'react';
import ColorContext from './Color';
import Moment from 'moment'
import '../font.css';

const Post = () => {
    const {state} = useContext(ColorContext);

    const event = JSON.parse(localStorage.getItem("event"))

    
    useEffect(()=>{
      window.localStorage.setItem("postColor",JSON.stringify(state.postcolor))
    },[state.postcolor])
    
    
    const formatDate = Moment().format('YYYY-MM-DD');

    
    useEffect(()=>{
      window.localStorage.setItem("postColor",JSON.stringify(state.postcolor))
    },[state.postcolor])

    useEffect(()=>{
      window.localStorage.setItem("stickerColor",JSON.stringify(state.stickercolor))
    },[state.stickercolor])

    // formatDate === it.date
    return (
        <div className='right' style={{background: state.postcolor}}>
            <div className='sticker' style={{background : state.stickercolor}}>{formatDate}</div>
            <div className="right_box">
                {event && event.map((it,idx)=>( 
                  <div key={idx}>
                    {formatDate === it.date ? <div className="sche" style={{display: "flex", margin: "0 auto 10px"}} >{it.title}</div> : <div className="none" style={{display: "none"}} >{it.title}</div>}
                  </div>
                ))}
          </div>
        </div>
    )
}

export default Post;