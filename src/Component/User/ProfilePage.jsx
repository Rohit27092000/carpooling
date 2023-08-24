// ProfilePage.js

import React from 'react';
import { Link } from 'react-router-dom';
// import axios from './axiosInstance'; // Import your Axios instance

function ProfilePage() {
  var user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
 

  return (
    <div>
      <h2>Profile Page</h2>
      
        <div>
          <p>First Name: {user.firstName}</p>
          <p>Last Name: {user.lastName}</p>
          <p>Email: {user.email}</p>
          <p>Mobile Number: {user.mobileNumber}</p>
          <Link to="/Edituser">
          <button>Edit Profile</button>
          </Link>
        </div>
    </div>
  );
}

export default ProfilePage;