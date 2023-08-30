import React from 'react';
import '../../Component/User/UserHomePage.css';

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	// NavBtn,

} from '../User/NavbarElements';


const PassengerHomePage = (props) =>
 {
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
			<div>
			 <Nav className='border'>
				<Bars />
				
				<NavMenu >
					<NavLink to='/HomeP' activeStyle>
						<b>Home</b>
					</NavLink>
					<NavLink to='/AboutUsP' activeStyle>
						<b>About Us</b>
					</NavLink>
					<NavLink to='/MyRides' activeStyle>
						<b>My Rides</b>
					</NavLink>
					<NavLink to='/PassengerDetails' activeStyle>
						<b>My Account</b>
					</NavLink>
					<NavLink to='/FindCar' activeStyle>
						<b>Find a Car</b>
					</NavLink>
					<NavLink to='/password' activeStyle>
						<b>Change Password</b>
					</NavLink>
					<NavLink to='/PassengerLogout' activeStyle>
						<b>LogOut</b>
					</NavLink>
				</NavMenu>
			</Nav><br /> 
			
			</div>
		</>
	);
};

export default PassengerHomePage;