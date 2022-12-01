import React, { useState, useContext, useEffect, useCallback} from "react";
import ColorContext from './Color';
import Note from "./Note";
import SelectColors from "./SelectColor";
import { ColorProvider } from './Color';
import SelectPostColors from "./SelectPostColor";
import Post from "./Post";
import styled, { ThemeProvider } from "styled-components";
import { light, dark } from './theme';
import Button from "./Button";
import moment from "moment";
import "./todo.css"

function Todo(){
    const themeData = window.localStorage.getItem("dark")
    // 왼쪽 색상 변경
    const [color,setColor] = useState(false);

    // 오른쪽 색상 변경
    const [postcolor,setPostcolor] = useState(false);

    const [themeMode, setThemeMode] = useState(themeData)
    const theme = themeMode === 'light' ? light : dark;

    const toggleTheme = () => setThemeMode(themeMode === 'light' ? 'dark' : 'light')

    useEffect(()=>{
      window.localStorage.setItem("dark",themeMode)
    })

    const today = moment().format('YYYY-MM-DD');

    const exportTxt = useCallback(()=>{
      let fileName = today + "이벤트.txt";
      let output = window.localStorage.getItem("event");
      const element = document.createElement('a');
      const file = new Blob([output],{
        type:'text/plain',
      });
      element.href = URL.createObjectURL(file)
      element.download = fileName;
      document.body.appendChild(element);
      element.click();
    })

    const onFileChange = (e) => {
      let file = e.target.files[0];
      let fileReader = new FileReader();
      fileReader.onload = () => {
        console.log(fileReader.result);
        localStorage.setItem("event",fileReader.result)  
      };
      fileReader.readAsText(file);
      window.location.replace("/")
    }
    
    return(
      <ThemeProvider theme={theme}>
        <S.Main>
          <div className="content">
            <ColorProvider>
              <Note />
              <div className="color_revise">
                <button onClick={() => {setColor(!color)}} style={{color: themeMode === "dark" ? "#fff" : "#000"}}>노트 색상 수정</button>
                {color && <SelectColors />}
              </div>

              <Post />
              <div className="post_color_revise">
                  <button onClick={() => {setPostcolor(!postcolor)}} style={{color: themeMode === "dark" ? "#fff" : "#000"}}>포스트잇 색상 수정</button>
                  {postcolor && <SelectPostColors />}
              </div>
            </ColorProvider>
            <Button title={theme === 'light' ? '일반모드' : '다크모드'} click={toggleTheme} />
            <div className="file-button">
              <button className="save-button" onClick={() => exportTxt()}>저장</button>
              <label for="input-file" className="input-file-button">불러오기</label>
              <input type="file" onChange={onFileChange.bind(this)} style={{display:"none"}} id="input-file" />
            </div>
          </div>
        </S.Main>
      </ThemeProvider>
  )


}



export default Todo;

const S ={};

S.Main = styled.div`
  width :100%;
  height:100vh;
  background-color: ${props => props.theme.colors.bgColor}
`