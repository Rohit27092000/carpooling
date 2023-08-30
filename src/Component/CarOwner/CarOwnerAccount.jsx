import React, { useEffect, useState } from 'react';
import { getCarOwner,CarOwnerAdd } from '../../Service/CarOwner-Service';
import {

    MDBContainer,
    MDBCard,
    MDBCardBody,
    MDBRow,
    MDBCol,
    MDBInput,
}

    from 'mdb-react-ui-kit';
// import './Login.css';
import CarOwnerHomePage from './CarOwnerHomePage';
// import {useForm } from 'react-hook-form'

function CarOwnerAccount() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const userid = user.id;

  
    const [Data, setData] = useState({
        adharCard_No: '',
        driving_Licence_No: '',
        user :{
            id: userid,
        }
    });
       useEffect(() => {
    console.log(Data);
  }, [Data])

  useEffect(() => {
    getCarOwner(userid)
      .then((resp) => {
        console.log(resp);
        setData({
            adharCard_No: resp.adharCard_No,
            driving_Licence_No: resp.driving_Licence_No,
            user :{
                id: userid,
            }
        })
      })
      .catch((error) => {
        console.log(error);
      });
  }, [userid]);
      
    const handleChange = (event, property) => {

        setData({ ...Data, [property]: event.target.value })
    }
    console.log("Data---->"+JSON.stringify(Data));
    const submitForm = (event) => {
        event.preventDefault()
        console.log(Data);
        CarOwnerAdd(Data).then((resp) => {
            console.log(resp);
            console.log("success-log");
        }).catch((error) => {
            console.log(error);
            console.log("Errorlog");
        })
    }

    return (
        <div>
            <CarOwnerHomePage />
            <form onSubmit={submitForm}>
                <div className='p'>
                    <MDBContainer className="my-5">

                        <MDBCard>
                            <MDBRow className='g-0'>

                                <MDBCol md='6'>
                                <h1 style={{textAlign:'center'}}>Account Details</h1>
                                    <div style={{ textAlign: 'left',paddingLeft:'50px' ,paddingTop:'20px'}}>
                                       
                                        <h4>First Name:   {user.firstName}</h4>
                                        <h4>Last Name:  {user.lastName}</h4>

                                        <h4>Mobile Number: {user.mobileNumber}</h4>

                                        <h4>Email: {user.email}</h4>

                                        <h4>Aadhar Number: {Data.adharCard_No}</h4>

                                        <h4>Driving Licence Number: {Data.driving_Licence_No}</h4>
                                    </div>
                                </MDBCol>

                                <MDBCol md='6'>
                                    <MDBCardBody className='d-flex flex-column'>

                                        <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b><u>Fill Details</u></b></h4>
                                        <MDBInput wrapperClass='mb-4' label='Aadhar Number ' id='adharCard_No' type='text' size="lg" placeholder='Enter Aadhar Number' onChange={(e) => handleChange(e, 'adharCard_No')} />
                                        <MDBInput wrapperClass='mb-4' label='Driving License Number' id='driving_Licence_No' type='text' size="lg" placeholder='Enter Driving License' onChange={(e) => handleChange(e, 'driving_Licence_No')} />
                                        <button type='submit' className='btn btn-secondary' >Submit</button>

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
export default CarOwnerAccount;