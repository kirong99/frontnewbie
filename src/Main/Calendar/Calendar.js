import React, { useState } from "react";
import { AiFillCaretRight,AiFillCaretLeft } from 'react-icons/ai';
import { format, addMonths, subMonths, endOfWeek } from 'date-fns';
import { startOfMonth, endOfMonth, startOfWeek } from "date-fns";
import { isSameMonth, isSameDay, addDays, parse } from "date-fns";
import '../Calendar/Calendar.css';
//날짜 함수 집합 라이브러리 - date-fns 설치
//아이콘 라이브러리 - react-icons 설치

//header
const CalendarHeader = ({currentMonth, prevMonth,nextMonth}) => {
    return(
        <div className='header-cont'>
            <div className='prev'>
                <button className="btn"><AiFillCaretLeft className="icon" onClick={prevMonth} /></button>
            </div>
            <div className='month'>
                <span>{format(currentMonth, 'yyyy')}년 {format(currentMonth, 'M')}월</span>
            </div>
            <div className='next'>
                <button className="btn"><AiFillCaretRight className="icon" onClick={nextMonth} /></button>
            </div>
        </div>
    );
};

//week
const CalendarWeeks = () => {
    const days = [];
    const date = ['일','월','화','수','목','금','토'];

    for(let i = 0; i < 7; i++) {
        days.push(
            <div className="col" key={i}>
                <span>{date[i]}</span>
            </div>,
        );
    };

    return <div className="days row">{days}</div>
}

//body
const CalendarDays = ({ currentMonth, selectedDate, onDateClick }) => {
    const monthStart = startOfMonth(currentMonth);
    const monthEnd = endOfMonth(monthStart);
    const startDate = startOfWeek(monthStart);
    const endDate = endOfWeek(monthEnd);

    const rows = [];
    let days = [];
    let day = startDate;
    let formattedDate = '';

    while(day <= endDate) {
        for(let i = 0; i< 7; i++){
            formattedDate = format(day, 'd');
            const cloneDay = day;
            days.push(
                <div
                    className={`cell ${!isSameMonth(day, monthStart) ? 'disabled' : isSameDay(day,selectedDate) ? 'selected' : format(currentMonth, 'M') !== format(day,'M')? 'not-valid':'valid'}`}
                    key={day}
                    onClick={() => onDateClick(parse(cloneDay))}
                    >
                <span className={format(currentMonth, 'M') !== format(day,'M')?'text not-valid':''}>{formattedDate}</span>
                </div>,
            );
            day=addDays(day,1);
        }
        rows.push(
            <div className="row" key={days}>{days}</div>
        );
        days=[];
    }
    return <div className="body">{rows}</div>
}

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

    const onDateClick = (day) => {
        setSelectedDate(day);
    }

    return(
        <div className="Calendar">
            <CalendarHeader
                currentMonth={currentMonth}
                prevMonth={prevMonth}
                nextMonth={nextMonth}
            />
            <CalendarWeeks />
            <CalendarDays
                currentMonth={currentMonth}
                selectedDate={selectedDate}
                onDateClick={onDateClick}
            />
        </div>
    )
}

export default Calendar;