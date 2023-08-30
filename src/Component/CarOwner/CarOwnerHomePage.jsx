import React from 'react';
import '../../Component/User/UserHomePage.css';

import {
	Nav,
	NavLink,
	Bars,
	NavMenu,
	// NavBtn,

} from '../../Component/NavbarElements';


const CarOwnerHomePage = (props) => 
{
	var CarOwner = JSON.parse(localStorage.getItem('user'));
	console.log(CarOwner);

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
				<h3 style={{ textAlign: 'right', display: 'inline', position: 'relative', left: '800px' }}><u>  Welcome {CarOwner.firstName}</u></h3>
			</div>
			 <Nav className='border'>
				<Bars />
				<NavMenu >
					<NavLink to='/HomeC' activeStyle>
						<b>Home</b>
					</NavLink>
					<NavLink to='/AboutUsC' activeStyle>
						<b>About Us</b>
					</NavLink>
					<NavLink to='/CarRegister' activeStyle>
						<b>CarRegister</b>
					</NavLink>
					<NavLink to='/CarOwnerAccount' activeStyle>
						<b>My Account</b>
					</NavLink>
					<NavLink to='/CreateTrip' activeStyle>
						<b>Create Trip</b>
					</NavLink>
					<NavLink to='/password' activeStyle>
						<b>Change Password</b>
					</NavLink>
					<NavLink to='/CarOwnerLogout' activeStyle>
						<b>LogOut</b>
					</NavLink>
				</NavMenu>
			</Nav><br /> 
		
		</>
	);
};

export default CarOwnerHomePage;