import React from 'react';
import { Link } from 'react-router-dom';
import MyImage from '../../src/assets/Images/img2.jpeg';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  // MDBIcon,
  MDBInput,
}


  from 'mdb-react-ui-kit';
// import HomePageNav from './HomePageNav';
import './AboutUs.css';
import UserHomePage from './HomePageNav';
function FindCar() {

  return (
    <div>
      <UserHomePage />
      <div className='p'>
        <MDBContainer className="my-5">

          <MDBCard>
            <MDBRow className='g-0'>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>

                  <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b>Search Car</b></h3>

                  <MDBInput wrapperClass='mb-1' label='From' id='from' type='text' size="md" placeholder='Enter Source' />
                  <MDBInput wrapperClass='sm-1' label='To' id='to' type='text' size="md" placeholder='Enter Destination' />
                  <div className='text-center'>
                      <Link to="/Login">
                         <p>Search</p>
                      </Link>
                    </div>
                </MDBCardBody>

              </MDBCol>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
                   <MDBCardImage src={MyImage}  style={{width:'90%'}}/>
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