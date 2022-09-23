import React from 'react';
import '../header.css';
import '../App.css';
import logo from '../image/today_logo.png';
import login from '../image/login.png';
import { Link,Outlet } from 'react-router-dom';

const Header = () => {
	return (
		<div className='wrap'>
            <div className='header'>
                <div className='header-width'>
                    <div className='logo'>
                        <img className='logo_img' src={logo} alt='logo'/>
                    </div>
                    <ul className='menu'>
                        <li className='on'><a>Home</a></li>
                        <li><a>Calender</a></li>
                    </ul>
                    <div className='login'>
                        <Link to="/login">
                            <img className='login' src={login} alt='login'/>
                        </Link>
                    </div>
                </div>
            </div>
            <main><Outlet /></main>
		</div>
	);
};

export default Header;
