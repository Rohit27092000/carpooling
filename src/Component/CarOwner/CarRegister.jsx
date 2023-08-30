import React, { useEffect, useState } from 'react';
import { MDBContainer, MDBCard, MDBCardBody, MDBRow, MDBCol, MDBInput } from 'mdb-react-ui-kit';
import { CarAdd } from '../../Service/Car-Service';
import { getCarOwner } from '../../Service/CarOwner-Service';
import CarOwnerHomePage from './CarOwnerHomePage';

function CarRegister()
{
  const user = JSON.parse(localStorage.getItem('user'));
  const userId = parseInt(user.id);
  console.log(userId);

  const [carOwnerIds, setCarOwnerIds] = useState(0);

  const [carData, setCarData] = useState({
      carOwner: {
          carOwnerId: ''
      },
      company: '',
      model: '',
      carNo: '' 
  
  });
  useEffect(()=>{
    console.log(carData);
  },[carData]);

  useEffect(() => {
    getCarOwner(userId).then((resp) => {
        console.log(resp);
        setCarOwnerIds(parseInt(resp.carOwnerId));
      }).catch((error) => {
        console.log(error);
      });

      setCarData({
        carOwner: {
          carOwnerId: carOwnerIds
      },
      })

  }, [userId,carOwnerIds]);

  const handleChange = (event, property) => {
    // dynamic setting the value 
    setCarData({ ...carData, [property]: event.target.value })
  };

  const submitForm = (event) => {
    event.preventDefault();
    CarAdd(carData)
      .then((resp) => {
        console.log(resp);
        localStorage.setItem('car', JSON.stringify(resp));
        console.log('success-log');
      })
      .catch((error) => {
        console.log(error);
        console.log('Errorlog');
      });
  };

  return (
    <div>
      <CarOwnerHomePage />
      <form onSubmit={submitForm}>
        <div className='p'>
          <MDBContainer className='my-5'>
            <MDBCard>
              <MDBRow className='g-0'>
                <MDBCol md='6'>
                  <h3 className='fw-normal my-4 pb-3' style={{ letterSpacing: '1px' }}>
                    <b>
                      <u>Car Registration</u>
                    </b>
                  </h3>
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Car Number'
                    id='carNumber'
                    type='text'
                    size='lg'
                    placeholder='Enter Car Number'
                    onChange={(e) => handleChange(e, 'car_no')}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Car Company'
                    id='carCompany'
                    type='text'
                    size='lg'
                    placeholder='Enter Car Company'
                    onChange={(e) => handleChange(e, 'company')}
                  />
                  <MDBInput
                    wrapperClass='mb-4'
                    label='Car Model'
                    id='carModel'
                    type='text'
                    size='lg'
                    placeholder='Enter Car Model'
                    onChange={(e) => handleChange(e, 'model')}
                  />
                </MDBCol>
                <MDBCol md='6'>
                  <MDBCardBody className='d-flex flex-column'>
                    {/* Add additional input fields, buttons, etc. if needed */}
                    <button type='reset' className='btn btn-warning'>
                      Reset
                    </button>
                    <br />
                    <button type='submit' className='btn btn-secondary'>
                      Submit
                    </button>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </MDBContainer>
        </div>
      </form>
    </div>
  );
}

export default CarRegister;