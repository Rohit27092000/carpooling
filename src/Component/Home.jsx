import React from 'react';
import {
 
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,
  
}
from 'mdb-react-ui-kit';
import HomePageNav from './HomePageNav';
import './AboutUs.css';
function Home() 
{
  
  return (
    <div>
      <HomePageNav/>
    <div className='p'>
    <MDBContainer className="my-5">

      <MDBCard>
        <MDBRow className='g-0'>

          <MDBCol md='6'>
            <MDBCardImage src=''/>
          </MDBCol>

          <MDBCol md='6'>
            <MDBCardBody className='d-flex flex-column'>
              <h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}> <b><u>Home</u></b></h3>
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
export default Home;