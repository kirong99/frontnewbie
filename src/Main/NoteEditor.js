import { useState, useRef } from "react";

const NoteEditor = ({onCreate}) => {
    const todoinput = useRef();
    const [state, setState] = useState ({todoinput:"",});
    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        });
    };
    const handleSubmit = () => {
        if (state.todo.length < 2){
            todoinput.current.focus();
            return;
        }
        onCreate(state.todo);
        // alert("저장성공");
        setState({todo:""});
    };

    return(
        <div className="NoteEditor">
            <input ref={todoinput} name="todo" value={state.todo} onChange={handleChangeState} />
            <button onClick={handleSubmit}>저장</button>
        </div>
    )
}

export default NoteEditor; 