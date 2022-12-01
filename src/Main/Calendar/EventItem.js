import { useState,useRef } from "react";
const EventItem = ({title,date,id,onRemove,onEdit}) => {

    const [isEdit, setIsEdit] = useState(false);
    const toggleIsEdit = () => {
        setIsEdit(!isEdit);
        // window.location.replace("/")
    }

    const [localContent,setLocalContent] = useState(title)
    const localCotentInput = useRef();

    const handleRemove = () => {
        if(window.confirm(`${id}번째 일정을 삭제하시겠습니까?`)){
            onRemove(id)
        }
    }

    const handleQuitEdit = () => {
        setIsEdit(false);
        setLocalContent(title);
    }

    const handleEdit = () => {
        if(localContent.lenght < 5){
            localCotentInput.current.focus();
            return;
        }

    if(window.confirm(`${id}번 째 일정을 수정하시겠습니까?`)){
        onEdit(id,localContent);
        toggleIsEdit();
    }
}

    return (
        <div className="eventList-modal">
            <div className="content">{isEdit ? (
            <div className="modify">
                <textarea ref={localCotentInput} value={localContent} onChange={(e)=>setLocalContent(e.target.value)}></textarea>
            </div>
            ) : <div className="noModify">
                    <p>{title}</p>
                    <p>{date}</p>
            </div>}
            </div>
            {isEdit ? (
                <div className="modifyConfirm">
                    <button onClick={handleQuitEdit}>수정 취소</button>
                    <button onClick={handleEdit}>수정 완료</button>
                </div>
                ) : (
                <div className="btn">
                    <button onClick={toggleIsEdit}>수정하기</button>
                    <button onClick={handleRemove}>삭제하기</button>
                </div>
                )}
        </div>
        
    )
}

export default EventItem