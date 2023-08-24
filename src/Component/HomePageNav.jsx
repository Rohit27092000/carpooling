import React from 'react';
// import Home from './Home';
import {
Nav,
NavLink,
Bars,
NavMenu,
// NavBtn,
// NavBtnLink,
} from './NavbarElements';
import './HomePageNav.css';

const HomePageNav = () => {
return (
	<>
	<div>
		
	<div className='name'>
		<h1>CAR POOLING SYSTEM</h1>
	</div>
	<Nav className='border'>
		<Bars />
		<NavMenu >
		<NavLink to='/home' activeStyle>
			<b>Home</b>
		</NavLink>
		<NavLink to='/AboutUs' activeStyle>
			<b>About Us</b>
		</NavLink>
		<NavLink to='/findcar' activeStyle>
			<b>Find a Car</b>
		</NavLink>
		<NavLink to='/register' activeStyle>
			<b>Register</b>
		</NavLink>
		<NavLink to='/login' activeStyle>
			<b>Login</b>
		</NavLink>
		<NavLink to='/contactus' activeStyle>
			<b>Contact Us</b>
		</NavLink>
		</NavMenu>
	</Nav>
	</div>
	</>
	
);
};
export default HomePageNav;