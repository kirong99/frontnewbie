import { useEffect, useRef, useState } from "react";
import "./Modal.css";
import DatePicker from 'react-datepicker';

import "react-datepicker/dist/react-datepicker.css";

function ModalBasic({ setModalOpen }) {
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
        content : ""
    })

    const handleChangeState = (e) => {
        console.log(e.target.value);
        setState({
            ...state,
            [e.target.name] : e.target.value
        })
    }
    const handleSubmit = () => {
        console.log(state)
        alert('저장 성공')
    }
    const StartSche = () => {
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
        return (
          <DatePicker
            selected={startDate}
            onChange={date => setStartDate(date)} 
            selectsStart
            startDate={startDate}
            endDate={endDate}
            isClearable
            />
        );
      };

      const EndSche = () => {
        const [startDate, setStartDate] = useState(new Date());
        const [endDate, setEndDate] = useState(new Date());
        return (
          <DatePicker
            selected={endDate}
            onChange={date => setEndDate(date)} 
            selectsStart
            startDate={startDate}
            endDate={endDate}
            minDate={startDate}
            isClearable
            />
        );
      };

    return(
        <div>
            <div className='modal_bg'></div>
            <div className="container">
                <h2 className="text">일정 추가</h2>
                <div className="schedule">
                    <p>일정</p>
                    <input name="content" value={state.content} onChange={(e) => {
                        setState({handleChangeState});
                    }}></input>
                </div>
                <div className="date">
                    <p>시작 날짜<StartSche /></p>
                    <p>종료 날짜<EndSche /></p>
                </div>
                <button className="close" onClick={closeModal}>X</button>
                <button className="addSche" onClick={handleSubmit}>일정 추가</button>
            </div>
        </div>
    )
}

export default ModalBasic;