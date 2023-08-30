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
// import './Login.css';
import { PassengerAdd, getPassenger } from '../../Service/Passenger-Service';
import PassengerHomePage from './PassengerHomePage';
// import {useForm } from 'react-hook-form'

function PassengerDetails() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const userid = user.id;
  const [Data, setData] = useState({
    aadharCard_No: '',
    driving_Licence_No: '',
    user: {
      id: userid,
    }
  });


  useEffect(() => {
    console.log(Data);
  }, [Data])

  useEffect(() => {
    getPassenger(userid)
      .then((resp) => {
        console.log(resp);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userid]);


  const handleChange = (event, property) =>
  {
    setData({ ...Data, [property]: event.target.value })
  }

  const submitForm = (event) => {
    event.preventDefault()
    console.log(Data);
    getPassenger(Data).then((resp) => {
      console.log(resp);
      localStorage.setItem('passenger', JSON.stringify(resp));
      console.log("success-log");
    }).catch((error) => {
      console.log(error);
      console.log("Errorlog");
    })
  }

  return (
    <div>
      <PassengerHomePage />
        <div className='p'>
          <MDBContainer className="my-5">

            <MDBCard>
              <MDBRow className='g-0'>

                <MDBCol md='6'>
                  <h1><u>Details</u></h1>
                  <div style={{ textAlign: 'center' }}>
                    <h4>FirstName: {user.firstName}</h4>
                    <h4>LastName:  {user.lastName}</h4>

                    <h4>MobileNumber: {user.mobileNumber}</h4>

                    <h4>Email: {user.email}</h4>

                    <h4>AadharNumber: {user.firstName}</h4>
                  </div>
                </MDBCol>
                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>
                    <MDBInput wrapperClass='mb-4' label='Aadhar Number ' id='aadharCard_No' type='text' size="lg" placeholder='Enter Aadhar Number' onChange={(e) => handleChange(e, 'aadharCard_No')} />
                    <MDBInput wrapperClass='mb-4' label='Driving License Number' id='driving_Licence_No' type='text' size="lg" placeholder='Enter Driving License' onChange={(e) => handleChange(e, 'driving_Licence_No')} />
                    <button type='submit' className='btn btn-secondary' >Submit</button>

                  </MDBCardBody>
                </MDBCol>

              </MDBRow>
            </MDBCard>
          </MDBContainer>
        </div>
    </div>
  );
}
export default PassengerDetails;