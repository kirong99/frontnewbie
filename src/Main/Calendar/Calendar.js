import React, { useState,useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalBasic from "./Modal/ModalBasic";
import Post from "../Post";

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

import './style.css'
import LocalStorage from "./LocalStorage";



const Calendar = () => {
  const event = JSON.parse(localStorage.getItem("event"))
  const [modalOpen, setModalOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };

  const [data,setDate] = useState(event);
  const dataId = useRef(0);
    const onCreate = (title,date) => {
      const newItem = {
        title,
        date,
        id: dataId.current
      }
      dataId.current += 1;
      setDate([newItem , ...data])
      console.log(data)
  }

  useEffect(()=>{
    window.localStorage.setItem("event",JSON.stringify(data))
  }, [data])

  return(
    <div className="App" id="calendar">
      <FullCalendar
        initialView="dayGridMonth"
        plugins={[ dayGridPlugin,timeGridPlugin,interactionPlugin ]}
        headerToolbar={{
          left:'prev,next today',
          center: 'title',
          right: 'prevYear,dayGridMonth,timeGridWeek,timeGridDay,nextYear'
        }}
        events={data && event}
        titleFormat={function(date){
          const day = document.querySelector("fc-timeGridDay-button");
          if(day){
          return (
            date.date.year + "년" + (date.date.month+1) + "월" + date.date.day + "일"
            )
          }else{
            return(
              date.date.year + "년 " + (date.date.month+1) + "월"
            )
          }
        }}
        editable={true}
        selectable={true}
        locale="ko"
        navLinks={true}
        droppable={true}
        dateClick={function(e){
          console.log(e.dateStr)
        }}
        eventClick={function(arg){
          alert(arg.event.title)
          alert(arg.event.start)
        }}
        timeZone="Asia/Seoul"
      />
      <div className='modal'>
          <button className='modal_add' onClick={showModal} >일정 추가</button>
          {modalOpen && <ModalBasic onCreate={onCreate} setModalOpen={setModalOpen}/>}
      </div>
      <LocalStorage value={ data } />
    </div>
    
  )
}

export default Calendar;