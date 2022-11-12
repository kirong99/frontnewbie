import React, { useContext,useState,useRef, useEffect } from 'react'
import ColorContext, {ColorConsumer} from './Color';
import NoteEditor from './NoteEditor';
import NoteList from './NoteList';

const Note = () => {
    const {state} = useContext(ColorContext);
    const todoList = JSON.parse(localStorage.getItem("todo")) 
    //JSON 형식으로 todo라는 데이터베이스를 불러오겠다. parse --> 객체 형식으로

    useEffect(()=>{
      window.localStorage.setItem("noteColor",state.color)
    },[state.color])

    const [data, setData] = useState(todoList);
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

    useEffect(()=>{ //웹에서 useEffect안에 있는 명령이 계속 실행 될 수 있게 해주는 것
      window.localStorage.setItem("todo",JSON.stringify(data)) //웹페이지.데이터베이스.저장("이름",저장할 내용)
    },[data]) //어떤 방식으로?

    

    console.log(data);

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