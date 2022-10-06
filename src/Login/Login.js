import React, { useState } from "react";
import './login.css';
import '../App.css';
import { Link, withRouter } from 'react-router-dom';

function Login(props) {

    const [Id, setId] = useState('');
    const [Password, setPassword] = useState('');



  return(
    <div className="login">
        <h2>로그인</h2>
        <form className="login_form">
            <div className="login_input login_id"><label>ID</label><input id='id' onkeyup='printId()' name="id" /></div>
            <div className="login_input login_pw"><label>PW</label><input id='pw' onkeyup='printPw()' name="password"  /></div>
            <div className="login_input"><button className="login_btn">Login</button></div>
        </form>
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
