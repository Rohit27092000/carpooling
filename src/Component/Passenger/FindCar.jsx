import React ,{useState, useEffect} from 'react';
import {

  MDBContainer,
  MDBCard,
  MDBCardBody,

  MDBRow,
  MDBCol,
  MDBInput,
}
  from 'mdb-react-ui-kit';

import PassengerHomePage from './PassengerHomePage';
import { getTrip } from '../../Service/TripService/FindCar-Service';

function FindCar() {

  const [city, setCity] = useState({
    SourceCity:'',
    DestinationCity:'',
    datetrip:''
  })

 

  const [requestTrip, setRequestTrip] = useState({
      sourceCity: {
          cityName: ''
      },
      destinationCity: {
          cityName:''
      },
      tripDate: ''
  });

  useEffect(() => {
    console.log(city);
  setRequestTrip({
      sourceCity: {
          cityName: city.SourceCity
      },
      destinationCity: {
          cityName: city.DestinationCity 
      },
      tripDate: city.datetrip,
    })
  },[city])

  
  useEffect(()=>{
    console.log(requestTrip);
  },[requestTrip])


    // handle change 
  const CityChange = (event, property) => {
    // dynamic setting the value 
    setCity({ ...city, [property]: event.target.value })
  }


  const submitForm = (event) => {
    event.preventDefault()
    console.log(requestTrip);

    getTrip(requestTrip).then((resp) => {
      console.log(resp);
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
        <form onSubmit={submitForm} >
        <MDBContainer className="my-5">

          <MDBCard>
            <MDBRow className='g-0'>

              <MDBCol md='6'>
                <MDBCardBody className='d-flex flex-column'>

                  <h3 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b>SEARCH TRIP</b></h3>

                  <MDBInput wrapperClass='mb-1' label='From' id='from' type='text' size="md" placeholder='Enter Source' onChange={(e) => CityChange(e, 'SourceCity')}/>
                  <MDBInput wrapperClass='sm-1' label='To' id='to' type='text' size="md" placeholder='Enter Destination' onChange={(e) => CityChange(e, 'DestinationCity')} />
                  <MDBInput wrapperClass='sm-1' label='To' id='date' type='date' size="md" placeholder='Enter Date Time' onChange={(e) => CityChange(e, 'datetrip')} />

                  <div >
                    <button className='btn btn-secondary' >Search</button>
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
        </form>
      </div>
      
    </div>
  );
}
export default FindCar;