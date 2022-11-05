import React, { useContext,useState,useRef } from 'react'
import ColorContext, {ColorConsumer} from './Color';
import option_ico from '../image/option.png';
import Option from './Option';

const Note = () => {
    const {state} = useContext(ColorContext);
    const [option_dropdown, setOption] = useState(false);
    const [todoState,setTodoState] = useState({title:""})

    const [todoData,setTodoDate] = useState();
    const dataId = useRef(0);

    const onCreate = (title) => {
      const newItem = {
        title,
        id: dataId.current
      }
      dataId.current += 1;
      setTodoDate([newItem , ...todoData])
      console.log(todoData)
    }

    const handleChangeState = (e) => {
      setTodoDate({
          ...todoState,
          [e.target.name] : e.target.value,
      })
  }

  const handleSubmit = () => {
      onCreate(todoState.title);
      alert('저장 성공');
      setTodoDate({
          title: "",
      });
  }

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
              <input type="text" name="title" value={todoState.title} onChange={handleChangeState}></input>
              <input type="submit" onClick={handleSubmit}></input>
            </div>
          </div>
    )
}

export default Note;