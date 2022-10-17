import { useEffect, useRef, useState } from "react";
import "./Modal.css";
import DatePicker from 'react-datepicker';

function ModalBasic({ setModalOpen, id, title, content, writer }) {
    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    const modalRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const handler = () => {
            if(modalRef.current && !modalRef.current.contains()){
                setModalOpen(false);
            }
        }
        document.addEventListener('mousedown',handler);

        return() => {
            document.removeEventListener('mousedown',handler);
        }
    })

    const [state, setState] = useState({
        content : "",
        startDate : new Date(),
        date : ""
    })

    return(
        <div>
            <div className='modal_bg'></div>
            <div className="container">
                <h2>일정 추가</h2>
                <div className="">
                    <input></input>
                </div>
                <div>
                    {/* <DatePicker selected={state} onChange={date => setState(date)} /> */}
                </div>
                <button className="close" onClick={closeModal}>X</button>
            </div>
        </div>
    )
}

export default ModalBasic;