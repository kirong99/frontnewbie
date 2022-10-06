import React, { useState } from "react";
import { AiFillCaretRight,AiFillCaretLeft } from 'react-icons/ai';
import { format, addMonths, subMonths } from 'date-fns';
import '../Calendar/Calendar.css';
//날짜 함수 집합 라이브러리 - date-fns 설치
//아이콘 라이브러리 - react-icons 설치

const CalendarHeader = ({currentMonth, prevMonth,nextMonth}) => {
    return(
        <div className='header-cont'>
            <div className='prev'>
                <button className="btn"><AiFillCaretLeft className="icon" /></button>
            </div>
            <div className='month'>
                <span>{format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월</span>
            </div>
            <div className='next'>
                <button className="btn"><AiFillCaretRight className="icon" /></button>
            </div>
        </div>
    );
};

function Calendar(){
    const [currentMonth, setCurrentMonth] = useState(new Date());
    const [selectedDate, setSelectedDate] = useState(new Date());
// 오늘의 날짜를 가져오는 것 --> new Date();

    const prevMonth = () => {
        setCurrentMonth(subMonths(currentMonth, 1));
    }

    const nextMonth = () => {
        setCurrentMonth(addMonths(currentMonth, 1));
    }

    return(
        <div className="Calendar">
            <div className="cal-header">
                <CalendarHeader
                    currentMonth={currentMonth}
                    prevMonth={prevMonth}
                    nextMonth={nextMonth}
                />
            </div>
            <div className="days"></div>
            <div className="body"></div>
        </div>
    )
}

export default Calendar;