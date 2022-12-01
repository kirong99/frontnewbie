import React, { useState } from 'react';
import DatePicker, { registerLocale } from 'react-datepicker';
import "./Modal.css";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";
import ko from "date-fns/locale/ko"

const ModalBasic = ({ setModalOpen, onCreate, eventList }) => {
    console.log(eventList)
    const [startDate, setStartDate] = useState(new Date());
    const time = moment(startDate).format('YYYY-MM-DD');
    const today = moment(new Date()).format('YYYY-MM-DD');
    console.log(time)
    registerLocale("ko",ko)

    // 모달 끄기 
    const closeModal = () => {
        setModalOpen(false);
    };

    const [state, setState] = useState({
        title : "",
        date : time,
    })

    const handleChangeState = (e) => {
        setState({
            ...state,
            [e.target.name] : e.target.value,
        })
    }

    const handleSubmit = () => {
        onCreate(state.title, state.date);
        alert('저장 성공');
        setState({
            title: "",
            date: today
        });
    }
    const StartSche = () => {
        return (
          <DatePicker
            selected={startDate}
            onChange={(date) => {
                setStartDate(date)
                const dates = moment(date).format('YYYY-MM-DD')
                setState({
                    ...state,
                    date : dates
                })
            }} 
            selectsStart
            startDate={startDate}
            isClearable
            locale={ko}
            dateFormat="yyyy년 MM월 dd일"
            />
        );
      };

    return(
        <div>
            <div className='modal_bg'></div>
            <div className="container">
                <h2 className="text">일정 추가</h2>
                <div className="schedule">
                    일정
                    <input name="title" value={state.title} onChange={handleChangeState}></input>
                </div>
                <div className="date">
                    날짜<StartSche />
                </div>
                <button className="close" onClick={closeModal}>X</button>
                <button className="addSche" onClick={handleSubmit}>일정 추가</button>
            </div>
        </div>
    )
}

export default ModalBasic;
