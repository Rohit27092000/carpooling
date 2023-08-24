import React from 'react';
import './HomePage.css';
import {
  MDBBtn,
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCheckbox
}
from 'mdb-react-ui-kit';

function CarOwnerPage() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundColor: 'blue'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">CarOwner Details </h2>
          <MDBInput wrapperClass='mb-4' label='Enter Aadhar Number' size='lg' id='form1'required type='text'/>
          <MDBInput wrapperClass='mb-4' label='Enter Driving Licence Number' size='lg' id='form2' required type='email'/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Submit </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

//export default CarOwnerPage;