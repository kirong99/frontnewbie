import React, { useState,useRef } from 'react';
import DatePicker from 'react-datepicker';
import "./Modal.css";
import moment from 'moment';
import "react-datepicker/dist/react-datepicker.css";

const ModalBasic = ({ setModalOpen, onCreate }) => {
    const [startDate, setStartDate] = useState(new Date());
    const time = moment(startDate).format('YYYY-MM-DD');
    const today = moment(new Date()).format('YYYY-MM-DD');
    console.log(time)

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
        // const [endDate, setEndDate] = useState(new Date());
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
            // endDate={endDate}
            isClearable
            />
        );
      };

    //   const EndSche = () => {
    //     const [startDate, setStartDate] = useState(new Date());
    //     const [endDate, setEndDate] = useState(new Date());
    //     return (
    //       <DatePicker
    //         selected={endDate}
    //         onChange={date => setEndDate(date)} 
    //         selectsStart
    //         startDate={startDate}
    //         endDate={endDate}
    //         // minDate={startDate}
    //         isClearable
    //         />
    //     );
    //   };

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
                    시작 날짜<StartSche />
                    {/* <p>종료 날짜<EndSche /></p> */}
                </div>
                <button className="close" onClick={closeModal}>X</button>
                <button className="addSche" onClick={handleSubmit}>일정 추가</button>
            </div>
        </div>
    )
}

export default ModalBasic;
