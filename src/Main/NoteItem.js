import { useRef, useState } from "react";

const NoteItem = ({onEdit, onRemove, todo, id}) => {
    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => setIsEdit(!isEdit);
    const[localTodo, setLocalTodo] = useState(todo);
    const localTodoInput = useRef();

    const handleRemove = () => {
        onRemove(id);
        // if(window.confirm(`${id}번째 todo를 정말 삭제하시겠습니까?`)){
        //     onRemove(id);
        // }
    };

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalTodo(todo);
    }

    const hanldeEdit = () => {
        if(localTodo.length < 2 ){
            localTodoInput.current.focus();
            return;
        }
        onEdit(id, localTodo);
            toggleIsEdit();
        // if(window.confirm(`${id}번째 todo를 수정하시겠습니까?`)){
        //     onEdit(id, localTodo);
        //     toggleIsEdit();
        // }
    };

    return(
        <div className="NoteEditor">
            <div className="Todo_list">
                {isEdit ? (<><input ref={localTodoInput} value={localTodo} onChange={(e)=>setLocalTodo(e.target.value)} /></>) : (<>{todo}</>)}
            </div>
            {isEdit ? (<>
            <button onClick={handleQuitEdit}>취소</button>
            <button onClick={hanldeEdit}>완료</button></>) :
            (<>
            <button onClick={handleRemove}>삭제</button>
            <button onClick={toggleIsEdit}>수정</button>
            </>)}
            
        </div>
    );
}

export default NoteItem;