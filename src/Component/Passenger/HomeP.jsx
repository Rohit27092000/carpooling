import React from 'react';
import MyImage from '../../assets/Images/img1.jpeg';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBRow,
  MDBCol,

}
  from 'mdb-react-ui-kit';
import PassengerHomePage from './PassengerHomePage';
function HomeP() {

  return (
    <div>
      <PassengerHomePage />
      <div className='p'>
        <MDBContainer className="my-5">

          <MDBCard>
            <MDBRow className='g-0'>
              <MDBCol md='6'>
                <MDBCardImage src={MyImage} style={{width: '70%'}} />
              </MDBCol>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>
                  <br></br>
                  <br></br>
                  <div className='para'>
                    <span><b>Welcome to CarPool Connect :</b></span>
                    Discover a smarter way to commute. Join our community of carpoolers
                    and make your daily journeys more efficient and eco-friendly.
                    <span><b> Share Rides, Save Time and Money :</b></span>
                    CarPool Connect brings together riders and drivers to share rides,
                    reduce traffic congestion, and cut down on travel costs. Start carpooling today!<br></br>
                    <span><b>Eco-Friendly Commuting :</b></span>
                    Join hands in reducing your carbon footprint. Carpooling not only saves you
                    money but also helps in creating a sustainable future for all.<br />
                    <span><b>Make New Connections :</b></span>
                    Carpooling isn't just about sharing rides; it's about connecting
                    with people in your community. Build friendships while you commute.<br />
                    <span><b>Efficient and Convenient Travel: </b></span>
                    Say goodbye to solo commuting. Our carpooling platform makes it easy to find rides,
                    connect with fellow travelers, and enjoy a more relaxed journey.<br />
                    <span><b>Drive Together, Arrive Together: </b></span>
                    Experience hassle-free commuting. Share rides, reduce stress,
                    and arrive at your destination relaxed and ready to go.
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
export default HomeP;