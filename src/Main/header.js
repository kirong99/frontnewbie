import React from 'react';
import '../header.css';
import '../App.css';
import logo from '../image/today_logo.png';
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
                        <li className='on'><Link to="/Todo" className='link'>Home</Link></li>
                        <li><Link to="/Calendar" className='link'>Calender</Link></li>
                    </ul>
                    {/* <div className='login_ico'>
                        <Link to="/login">
                            <img src={login} alt='login'/>
                        </Link>
                    </div> */}
                </div>
            </div>
            <main><Outlet /></main>
		</div>
	);
};

export default Header;
