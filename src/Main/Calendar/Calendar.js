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
  const [visible, setVisible] = useState(false);

  const showModal = () => {
    setModalOpen(true);
  };

  const showButton = () => {
    setVisible(true)
  }

  const [data,setDate] = useState(event != null ? event : []);
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

  const onRemove = (targetId) => {
    console.log(`${targetId}가 삭제되었습니다`);
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setDate(newDiaryList)
  }

  const onEdit = (targetId, newContent) => {
    setDate(
      data && data.map((it)=>it.id === targetId ? {...it, title:newContent} : it)
    )
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
            // eventClick={showButton}
            timeZone="Asia/Seoul"
          />
          <Button title={theme === 'light' ? '일반모드' : '다크모드'} click={toggleTheme} />
            <div className='modal'>
                <button className='modal_add' onClick={showModal} >일정 추가</button>
                {modalOpen && <ModalBasic onCreate={onCreate} setModalOpen={setModalOpen} eventList = {data} />}
            </div>

            <div className="event">
              <button onClick={showButton}>일정 목록</button>
              {visible && <EventModal onRemove={onRemove} onEdit={onEdit} setVisible={setVisible} eventList = {data} />}
            </div>
          </div> 

        
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