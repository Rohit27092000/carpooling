import React from 'react';
  import {
 
    MDBContainer,
    MDBCard,
    MDBCardBody,
    
    MDBRow,
    MDBCol,
    MDBIcon,
    MDBInput,
  }
  
 
from 'mdb-react-ui-kit';
import HomePageNav from './HomePageNav';
import './AboutUs.css';
import UserHomePage from './User/UserHomePage';
function FindCar() 
{
  
  return (
    <div>
      <UserHomePage/>
    <div className='p'>
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
          <MDBCardBody className='d-flex flex-column'>

<h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}> <b>SIGN INTO YOUR ACCOUNT</b></h3>

  <MDBInput wrapperClass='mb-1' label='From' id='from' type='text' size="md" placeholder='Enter Source' />
  <MDBInput wrapperClass='sm-1' label='To' id='to' type='text' size="md"  placeholder='Enter Destination'/>



</MDBCardBody>

          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}> <b><u>Find Car</u></b></h3>
              <div className='para'>
                Welcome to [Car Pooling System], your go-to platform for convenient and eco-friendly
                 commuting solutions. Our mission is to revolutionize the way you travel by 
                 connecting people who are headed in the same direction, reducing traffic congestion,
                  lowering carbon emissions, and saving you money.

                  At [Car Pooling System], we provide a user-friendly interface
                   that connects drivers with available seats to passengers
                    who are heading in the same direction. Our advanced algorithm
                     ensures optimal matches based on routes, preferences, and schedules,
                      making your daily commute smoother and more rewarding.

                
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