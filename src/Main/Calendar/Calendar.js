import React from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";

import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';

import './style.css'

function Calendar(){
  return(
    <div className="App">
      <FullCalendar
        defaultView="dayGridMonth"
        plugins={[ dayGridPlugin ]}
        headerToolbar={{
          left:'prev,next today',
          center: 'title',
          right: 'year,dayGridMonth,dayGridWeek,dayGridDay'
        }}
        events={[
          { title: 'event1', date: '2022-10-11'},
          { title: 'event2', date: '2022-10-12'}
        ]}
        titleFormat={function(date){
          return date.date.year + "년" + (date.date.month+1) + "월";
        }}
        columnHeaderText={function(date){
          var weekList=['일','월','화','수','목','금','토'];
          return weekList[date.getDay()];
        }}
        
      />
      <div className="plan">
        <button className="add">일정 추가</button>
      </div>
    </div>
  )
}

export default Calendar;