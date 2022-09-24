import React from "react";
import Join from './Join.js';
import './login.css';
import '../App.css';
import { Link} from 'react-router-dom';

function Login() {

  return(
    <div className="login">
        <h2>로그인</h2>
        <ul className="login_form">
            <li><p>ID</p><input id='id' onkeyup='printId()'/></li>
            <li><p>PW</p><input id='pw' onkeyup='printPw()'/></li>
        </ul>
        <ul className="login_menu">
            <li><input type="checkbox" name="remember" value="ID_re" onclick='getCheckboxValue()'/>아이디 저장</li>
            <li>아이디, 비밀번호 찾기</li>
            <li><Link to="/Join">회원가입</Link></li>
        </ul>
        <div className="line"></div>
        <h2>간편 로그인</h2>
        <div className="kakao easy_login">카카오 1초 로그인/회원가입</div>
        <div className="naver easy_login">네이버 로그인</div>
    </div>
)}



export default Login;
