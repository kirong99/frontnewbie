import React, { useContext,useState,useRef, useEffect } from 'react'
import ColorContext, {ColorConsumer} from './Color';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

const Note = () => {
    const {state} = useContext(ColorContext);

    useEffect(()=>{
      window.localStorage.setItem("noteColor",state.color)
    },[state.color])

    const [data, setData] = useState([]);
    const dataId = useRef(0);
    const onCreate = (todo) => {
      const newItem = {todo,id : dataId.current,};
      dataId.current += 1;
      setData([newItem, ...data]);
    };
    const onRemove = (targetId) => {
      console.log(`${targetId}가 삭제되었습니다.`);
      const newNoteList = data.filter((it) => it.id !== targetId);
      setData(newNoteList);
    }
    const onEdit = (targetId, newTodo) => {
      setData(
        data.map((it) => 
        it.id === targetId ? { ...it, todo:newTodo } : it)
      );
    };

    return(
          <div className='left' style={{background: state.color}}>
            <div className='sp'>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
              <div><div className='line'></div><div className='circle'></div></div>
            </div>
            <div className='addTodo'>
              <NoteEditor onCreate={onCreate}/>
              <NoteList onEdit={onEdit} onRemove={onRemove} notelist={data}/>
            </div>
          </div>
    )
}

export default Note;