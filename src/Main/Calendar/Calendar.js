import React, { useState,useRef } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import Modal from "./Modal/Modal";
import Moment from 'moment';

import events from "./events";


import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

import './style.css'

function Calendar(){
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
        events={events}
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
      <Modal />
      
    </div>
  )
}

export default Calendar;