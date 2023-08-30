import React from 'react';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,

  MDBRow,
  MDBCol,
  // MDBIcon,
  MDBInput,
}


  from 'mdb-react-ui-kit';
// import HomePageNav from './HomePageNav';

import PassengerHomePage from './PassengerHomePage';
function FindCar() {

  return (
    <div>
      <PassengerHomePage />
      <div className='p'>
        <MDBContainer className="my-5">

          <MDBCard>
            <MDBRow className='g-0'>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>

                  <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b>SEARCH CAR</b></h3>

                  <MDBInput wrapperClass='mb-1' label='From' id='from' type='text' size="md" placeholder='Enter Source' />
                  <MDBInput wrapperClass='sm-1' label='To' id='to' type='text' size="md" placeholder='Enter Destination' />
                  <MDBInput wrapperClass='sm-1' label='To' id='date' type='datetime-local' size="md" placeholder='Enter Date Time' />

                  <div >
                    <button className='btn btn-secondary'>Search</button>
                  </div>
                </MDBCardBody>

              </MDBCol>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
                  <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b><u></u></b></h3>
                  <div className='para'>
                    

                  </div>
                </MDBCardBody>
              </MDBCol>

            </MDBRow>
          </MDBCard>
        </MDBContainer>
      </div>
    </div>
  );
}
export default FindCar;