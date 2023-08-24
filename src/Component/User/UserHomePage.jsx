import React from 'react';
import './UserHomePage.css';

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,

} from './NavbarElements';


const UserHomePage = (props) => {
	var user = JSON.parse(localStorage.getItem('user'));
	console.log(user);

	// const [user,setuser] = useState({
	// 		firstName:{user:firstName},
	// 		lastName:'',
	// 		mobileNumber:'',
	// 		email:'',
	// 		password:'',

	// 	  });
	return (
		<>
			<div className='name'>
				<h1 style={{ display: 'inline' }}>CAR POOLING SYSTEM</h1>
				<h3 style={{ textAlign: 'right', display: 'inline', position: 'relative', left: '800px' }}><u>  Welcome {user.firstName}</u></h3>
			</div>
			<Nav className='border'>
				<Bars />

				<NavMenu >
					<NavLink to='/Home' activeStyle>
						<b>Home</b>
					</NavLink>
					<NavLink to='/AboutUs' activeStyle>
						<b>About Us</b>
					</NavLink>
					<NavLink to='/FindCar' activeStyle>
						<b>My Rides</b>
					</NavLink>
					<NavLink to='/Admin' activeStyle>
						<b>Administration</b>
					</NavLink>
					<NavLink to='/ProfilePage' activeStyle>
						<b>My Account</b>
					</NavLink>
					<NavLink to='/Findcar' activeStyle>
						<b>Find a Car</b>
					</NavLink>
					<NavLink to='/password' activeStyle>
						<b>Change Password</b>
					</NavLink>
					<NavLink to='/Logout' activeStyle>
						<b>LogOut</b>
					</NavLink>
				</NavMenu>
			</Nav><br />
		</>
	);
};

export default UserHomePage;