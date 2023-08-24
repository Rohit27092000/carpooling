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

function CarDetailsPage() {
  return (
    <MDBContainer fluid className='d-flex align-items-center justify-content-center bg-image' style={{backgroundColor: 'blue'}}>
      <div className='mask gradient-custom-3'></div>
      <MDBCard className='m-5' style={{maxWidth: '600px'}}>
        <MDBCardBody className='px-5'>
          <h2 className="text-uppercase text-center mb-5">Car Details </h2>
          <MDBInput wrapperClass='mb-4' label='Enter Comapany' size='lg' id='form1'required type='text'/>
          <MDBInput wrapperClass='mb-4' label='Enter Car model' size='lg' id='form2' required type='text'/>
          <MDBBtn className='mb-4 w-100 gradient-custom-4' size='lg'>Submit </MDBBtn>
        </MDBCardBody>
      </MDBCard>
    </MDBContainer>
  );
}

//export default CarDetailsPage;