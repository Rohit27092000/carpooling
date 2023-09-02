import { useEffect, useState } from 'react';
import {
  MDBContainer,
  MDBCard,
  MDBCardBody,
  MDBRow,
  MDBCol,
  MDBInput
} from 'mdb-react-ui-kit';
import { getCarOwner } from '../../Service/CarOwner-Service';
import { getCityList } from '../../Service/City-Services';
import { getOwnerCar } from '../../Service/Car-Service';
import { makeTrip } from '../../Service/TripService';
import CarOwnerHomePage from '../CarOwner/CarOwnerHomePage';
function TripCreate() {
  const user = JSON.parse(localStorage.getItem('user'));
  console.log(user);
  const id =parseInt(user.id);
  
  const [tripData, setTripData] = useState({
      carOwner: {
          carOwnerId :''
      },
      car: {
          car_Id : ''
          },
      sourceCity: {
          city_Id : ''
      },
      destinationCity: {
          city_Id: ''
      },
      seats_offer : '',
      total_cost : '',
      tripDate : ''
  
  });
  const [carOwnerIds, setCarOwnerIds] = useState(0)
  const [cityList, setCityList] = useState([])
  const [sourceCityId, setSourceCityId] = useState(0)
  const [destinationCityId, setDestinationCityId] = useState(0)
  const [carList, setCarList] = useState([])
  const [carId, setCarId] = useState(0)
  useEffect(() => {
    getCarOwner(id)
      .then((resp) => {
        // carOwnerIds = a;
        console.log(resp);
        setCarOwnerIds(parseInt(resp.carOwnerId));

        setTripData({
          carOwner :{
            carOwnerId: carOwnerIds 
          },
          car: {
            car_Id: carId
          },
          sourceCity: {
            city_Id: sourceCityId
          },
          destinationCity: {
            city_Id: destinationCityId
          },
          })
      }) 
      .catch((error) => {
        console.log(error);
        console.log("Errorlog");
      });

      getCityList().then((city)=>{
        console.log(city);
        setCityList(city);
        console.log("getCity");
      }).catch((error)=>{
        console.log(error);
        console("city-Error");
      })

      getOwnerCar(carOwnerIds).then((ownerCars)=>{
        console.log(ownerCars);
        setCarList(ownerCars);
        console.log("GetCARS")
      }).catch((error)=>{
        console.log(error);
      })

  }, [carOwnerIds, sourceCityId, destinationCityId, carId]);

  console.log("carId=======>"+carId);
  // console.log("carOwner----------->"+carOwnerIds);
  console.log("CityList===>"+JSON.stringify(carList));
  // console.log("CityList===>"+JSON.stringify(cityList));
  console.log("Trip"+JSON.stringify(tripData));
  
  useEffect(()=>{ 
  },[tripData]);
  const handleChange = (event, property) => {
    // dynamic setting the value 
    setTripData({ ...tripData, [property]: event.target.value })
  }
console.log(sourceCityId);

const Createtrip = (event) => {
  event.preventDefault();
  makeTrip(tripData)
    .then((resp) => {
      console.log(resp);
    })
    .catch((error) => {
      console.log(error);
    });
};
  return (
    <div>
        <CarOwnerHomePage />
      <form onSubmit={Createtrip}>
        <div className='p'>
          <MDBContainer className='my-5'>
            <MDBCard>
              <MDBCardBody>
                <MDBRow className='g-0'>
                  <MDBCol md='6'>
                    <h3 className='fw-normal my-4 pb-3' style={{ letterSpacing: '1px' }}>
                      <b>
                        <u>Create Trip</u>
                        <MDBInput wrapperClass='mb-4'  id='id' defaultValue={user.id} type='text' size="lg" hidden />
                        <MDBInput wrapperClass='mb-4' label='first Name' id='firstName' value={user.firstName} type='text' size="lg"  />
                        <MDBInput wrapperClass='mb-4' label='Last Name' id='lastName'  value={user.lastName} type='text' size="lg" />
                        <div>
                          <h2>Select Car:</h2>
                           <select label='Car' onChange={e=>setCarId(e.target.value)}>
                             <option>Select Car</option>
                            {(carList).map((car)=>(
                           <option value={car.car_Id} >{car.company} {car.model}</option>
                           ))}
                          </select>
                          </div>
                            <div>
                            <h2>Select a Source City:</h2>
                           <select label='Source City' onChange={e=>setSourceCityId(e.target.value)}>
                            <option>Select City</option>
                            {(cityList).map((val)=>(
                           <option value={val.city_Id} >{val.cityName}</option>
                           ))}
                          </select>
                          </div>
                          <div>
                          <h2>Select a Destination City:</h2>
                           <select label='Destination City' onChange={e=>setDestinationCityId(e.target.value)}>
                            <option>Select City</option>
                            {(cityList).map((val)=>(
                           <option value={val.city_Id} >{val.cityName}</option>
                           ))}
                          </select>
                          </div>
                          <MDBInput wrapperClass='mb-4' label='seats Available' id='seat_available' type='text' size="lg" onChange={(e)=>handleChange(e,'seats_offer')}  />
                          <MDBInput wrapperClass='mb-4' label='total cost' id='total_cost' type='text' size="lg" onChange={(e)=>handleChange(e,'total_cost')}  />
                          <MDBInput wrapperClass='mb-4' label='tripDate' id='tripDate' type='date' size="lg" onChange={(e)=>handleChange(e,'tripDate')} placeholder='yyyy-mm-dd'  />
                          
                      </b>
                    </h3>
                  <button type='submit'>Submit</button>
                  </MDBCol>
                </MDBRow>
              </MDBCardBody>
            </MDBCard>
          </MDBContainer>
        </div>
      </form>
    </div>
  );
}

export default TripCreate;