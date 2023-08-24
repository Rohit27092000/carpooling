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
import { Link } from 'react-router-dom';
import { Register } from '../../Service/User-Service';
import HomePageNav from '../HomePageNav';
// import {useForm } from 'react-hook-form'

function UserRegister() {
  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',
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
    Register(Data).then((resp) => {
      console.log(resp);
      console.log("success-log");


    }).catch((error) => {
      console.log(error);
      console.log("Errorlog");
    })
  }

  return (
    <div>
      <HomePageNav />
      <form onSubmit={submitForm}>
        <div className='p'>
          <MDBContainer className="my-5">

            <MDBCard>
              <MDBRow className='g-0'>

                <MDBCol md='6'>
                  <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b><u>Register</u></b></h3>
                  <MDBInput wrapperClass='mb-4' label='First Name' id='firstName' type='text' size="lg" placeholder='Enter First Name' onChange={(e) => handleChange(e, 'firstName')} />
                  <MDBInput wrapperClass='mb-4' label='Last Name' id='lastName' type='text' size="lg" placeholder='Enter Last Name' onChange={(e) => handleChange(e, 'lastName')} />
                  <MDBInput wrapperClass='mb-4' label='Mobile Number' id='mobileNumber' type='text' size="lg" placeholder='Mobile Number' onChange={(e) => handleChange(e, 'mobileNumber')} />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>
                    <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" placeholder='Enter Email Address' onChange={(e) => handleChange(e, 'email')} />
                    <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" placeholder='Enter Password' onChange={(e) => handleChange(e, 'password')} />

                    {/* <MDBBtn className="mb-4 px-5" color='dark' size='lg'>Submit</MDBBtn> */}
                    <button type='reset' className='btn btn-warning'>Reset</button>
                    <br />
                    <button type='submit' className='btn btn-secondary' >Submit</button>
                    <br />
                    <Link to="/Login">
                      <p>Already Have An Account <a href="#!">Login</a></p>
                    </Link>

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
export default UserRegister;