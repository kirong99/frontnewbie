import React, { useState, useContext, useEffect} from "react";
import ColorContext, {ColorConsumer} from './Color';
import Note from "./Note";
import SelectColors from "./SelectColor";
import { ColorProvider } from './Color';
import SelectPostColors from "./SelectPostColor";
import Post from "./Post";
import styled, { ThemeProvider } from "styled-components";
import { light, dark } from './theme';
import Button from "./Button";

function Todo(){
    const themeData = window.localStorage.getItem("dark")
    const {state} = useContext(ColorContext);
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
    
    return(
      <ThemeProvider theme={theme}>
        <S.Main>
          <div className="content">
            <ColorProvider>
              <Note />
              <div className="color_revise">
                <button onClick={() => {setColor(!color)}}>노트 색상 수정</button>
                {color && <SelectColors />}
              </div>

              <Post />
              <div className="post_color_revise">
                  <button onClick={() => {setPostcolor(!postcolor)}}>포스트잇 색상 수정</button>
                  {postcolor && <SelectPostColors />}
              </div>
            </ColorProvider>
            <Button title={theme === 'light' ? '일반모드' : '다크모드'} click={toggleTheme} />
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