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
function SelectUserPage() 
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
              <h3 className="fw-normal my-4 pb-3" style={{letterSpacing: '1px'}}> <b><u>Login As</u></b></h3>
              <div className='para'>

              <button type="submit" class="btn btn-secondary">LoginAsPassenger</button>
                    <br/>
                    <br/>
                <button type="submit" class="btn btn-secondary">LoginAsCarOwner</button>
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
export default SelectUserPage;