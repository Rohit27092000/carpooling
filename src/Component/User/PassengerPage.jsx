import React, { useEffect, useState } from 'react';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput,
}

  from 'mdb-react-ui-kit';
import './Login.css';
// import { Link } from 'react-router-dom';
import UserHomePage from './UserHomePage';
import { Updateuser } from '../../Service/User-Service';
import { Navigate } from 'react-router-dom';
// import {useForm } from 'react-hook-form'


function PassengerPage() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const userid = user.id;

  const [Data, setData] = useState({
    id: {userid},
    firstName: "",
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
    aadharCard_No: '',
    driving_Licence_No: ''
  });

  useEffect(() => {
    console.log(Data);
  }, [Data])

  // handle change 
  const handleChange = (event, property) => {
    // dynamic setting the value 
    setData({ ...Data, [property]: event.target.value })
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log(Data);
    Updateuser(Data).then((resp) => {
      console.log(resp);

      localStorage.setItem('user', JSON.stringify(resp));

      console.log("successfully Update");
      Navigate('/ProfilePage');


    }).catch((error) => {
      console.log(error);
      console.log("Errorlog");
    })
  }
  return (
    <div>
      <UserHomePage />
      <form onSubmit={submitForm}>
        <div className='p'>

          <MDBContainer className="my-5">

            <MDBCard>
              <MDBRow className='g-0'>

                <MDBCol md='6'>
                  <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b><u>Details</u></b></h3>
                  <MDBInput wrapperClass='mb-4' label='Id' id='id' defaultValue={user.id} type='text' size="lg" onChange={(e) => handleChange(e, 'id')} hidden />
                  <MDBInput wrapperClass='mb-4' label='first Name' id='firstName' defaultValue={user.firstName} type='text' size="lg" onChange={(e) => handleChange(e, 'firstName')} />
                  <MDBInput wrapperClass='mb-4' label='Last Name' id='lastName' defaultValue={user.lastName} type='text' size="lg" onChange={(e) => handleChange(e, 'lastName')} />
                  <MDBInput wrapperClass='mb-4' label='Mobile Number' id='mobileNumber' defaultValue={user.mobileNumber} type='text' size="lg" onChange={(e) => handleChange(e, 'mobileNumber')} />
                  <MDBInput wrapperClass='mb-4' label='Email address' id='email' defaultValue={user.email} type='email' size="lg" onChange={(e) => handleChange(e, 'email')} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>
                    <MDBInput wrapperClass='mb-4' label='Password' id='password' defaultValue={user.password} type='password' size="lg" onChange={(e) => handleChange(e, 'password')} />
                    <MDBInput wrapperClass='mb-4' label='Aadhar Number' id='adharno' value={user.aadharCard_No} type='text' size="lg" onChange={(e) => handleChange(e, 'aadharCard_No')} />
                    <MDBInput wrapperClass='mb-4' label='Driving Licence Number' id='dl' value={user.driving_Licence_No} type='text' size="lg" onChange={(e) => handleChange(e, 'driving_Licence_No')} />

                    <button type='button' className='btn btn-warning'>Update</button>
                    <br />
                    <br>
                    </br>
                    <button type='submit' className='btn btn-secondary' >Submit</button>

                  </MDBCardBody>
                </MDBCol>

              </MDBRow>
            </MDBCard>
          </MDBContainer>
        </div>
      </form>
    </div>
  );
}
export default PassengerPage;