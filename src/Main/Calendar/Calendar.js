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
      />
    </div>
  )
}

export default Calendar;