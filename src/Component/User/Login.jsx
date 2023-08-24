import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';

import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  MDBIcon,
  MDBInput,
}

  from 'mdb-react-ui-kit';
import './Login.css';

import { SignUp } from '../../Service/User-Service';
import HomePageNav from '../HomePageNav';

const Login = () => {
  const navigate = useNavigate();

  const [Data, setData] = useState({
    firstName: '',
    lastName: '',
    mobileNumber: '',
    email: '',
    password: '',

  });

  localStorage.setItem('Data', JSON.stringify(Data));

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
    SignUp(Data).then((resp) => {
      console.log(resp);

      localStorage.setItem('user', JSON.stringify(resp));

      console.log("success-log");
      navigate('/SignUp');


    }).catch((error) => {
      console.log(error);
      console.log("Errorlog");
    })
  }


  // const handleRedirect = () => {
  //   window.location.href = '/Login/SignUp'; // Replace with your target route
  // };

  return (
    <div>
      <HomePageNav />
      <form onSubmit={submitForm}>
        <div className='p'>
          <MDBContainer className="my-5">

            <MDBCard>
              <MDBRow className='g-0'>

                <MDBCol md='6'>
                  <MDBCardImage src='' />
                </MDBCol>

                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>

                    <div className='d-flex flex-row mt-2'>
                      <MDBIcon fas icon="cubes fa-3x me-3" style={{ color: '#ff6219' }} />
                      <span className="h1 fw-bold mb-0">Logo</span>
                    </div>

                    <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b>SIGN INTO YOUR ACCOUNT</b></h3>

                    <MDBInput wrapperClass='mb-4' label='Email address' id='email' type='email' size="lg" placeholder='Enter Email Address' onChange={(e) => handleChange(e, 'email')} />
                    <MDBInput wrapperClass='mb-4' label='Password' id='password' type='password' size="lg" placeholder='Enter Password' onChange={(e) => handleChange(e, 'password')} />

                    <button type="submit" class="btn btn-secondary"  >SignUp</button>

                    <a className="small text-muted" href="#!">Forgot password?</a>

                    <div className='text-center'>
                      <Link to="/Register">
                        <p>Not a member? <a href="#!">Register</a></p>
                      </Link>
                    </div>

                    <div className='d-flex flex-row justify-content-start'>
                      <a href="#!" className="small text-muted me-1">Terms of use.</a>
                      <a href="#!" className="small text-muted">Privacy policy</a>
                    </div>

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
export default Login;