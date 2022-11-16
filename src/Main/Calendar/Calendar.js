import React, { useState,useRef, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";
import ModalBasic from "./Modal/ModalBasic";
import EventModal from "./EventModal";
import styled, { ThemeProvider } from "styled-components";
import { light, dark } from '../theme';
import Button from "../Button";
import '@fullcalendar/common/main.css';
import '@fullcalendar/daygrid/main.css';
import './style.css'


const Calendar = () => {
  const event = JSON.parse(localStorage.getItem("event"))
  const themeData = window.localStorage.getItem("dark")
  const [modalOpen, setModalOpen] = useState(false);
  const [eventOpen, setEventOpen] = useState(false);
  const showModal = () => {
    setModalOpen(true);
  };
  const showEvent = () => {
    setEventOpen(true);
  }
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

  const [themeMode, setThemeMode] = useState(themeData)
  const theme = themeMode === 'light' ? light : dark;

  const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light')

  useEffect(()=>{
    window.localStorage.setItem("dark",themeMode)
  },[themeMode])

  // const url = "http://google.com/"

  // if(themeMode === 'dark'){
  //   document.getElementsByClassName("fc-col-header-cell-cushion")[0].style.color = '#fff';
  // }

  return(
    <ThemeProvider theme={theme}>
        <S.Main>
        <div className="App" id="calendar" style={{color: theme === 'dark' ? "#fff" : "000"}}>
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
            eventClick={showEvent}
            timeZone="Asia/Seoul"
          />
          <div className='modal'>
              <button className='modal_add' onClick={showModal} >일정 추가</button>
              {modalOpen && <ModalBasic onCreate={onCreate} setModalOpen={setModalOpen}/>}
          </div>
          <div className="modal-event">
            {eventOpen && <EventModal setEventOpen={setEventOpen}/>}
          </div>
        </div>
        <Button title={theme === 'light' ? '일반모드' : '다크모드'} click={toggleTheme} />
      </S.Main>
    </ThemeProvider>
    
  )
}

export default Calendar;

const S ={};


  


S.Main = styled.div`
  width :100%;
  height:100vh;
  background-color: ${props => props.theme.colors.bgColor}
`