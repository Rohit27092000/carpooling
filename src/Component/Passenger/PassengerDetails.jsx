import React, { useEffect, useState } from 'react';
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
import { PassengerAdd } from '../../Service/Passenger-Service';
import PassengerHomePage from './PassengerHomePage';
// import {useForm } from 'react-hook-form'

function PassengerDetails() {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user);
    const userid = user.id;
    console.log(userid);
    const [Data, setData] = useState({
        aadharCard_No: '',
        driving_Licence_No: '',
        user :{
            id: userid,
        }
    });


    useEffect(() => {
        console.log(Data);
    }, [Data])

    // useEffect(() => {
    //     // Call your getPassenger service here and set the fetched data to Data state
    //     getPassenger(userid).then((resp) => {
    //         console.log(resp);
    //         setData(resp);
    //     }).catch((error) => {
    //       console.log(error);
    //     });
    //     console.log(JSON.stringify(Data));
    //   }, [userid]);
      
    // handle change 
    const handleChange = (event, property) => {
        // dynamic setting the value 
        setData({ ...Data, [property]: event.target.value })
    }
    console.log("Data====>"+JSON.stringify(Data));
    const submitForm = (event) => {
        event.preventDefault()
        console.log(Data);
        PassengerAdd(Data).then((resp) => {
            console.log(resp);
            window.alert("passenger Details Updated")
            console.log("success-log");
        }).catch((error) => {
            console.log(error);
            console.log("Errorlog");
        })
    }

    return (
        <div>
            <PassengerHomePage />
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

                                        <h4>Aadhar Number: {Data.aadharCard_No}</h4>

                                        <h4>Driving Licence Number: {Data.driving_Licence_No}</h4>
                                    </div>
                                </MDBCol>

                                <MDBCol md='6'>
                                    <MDBCardBody className='d-flex flex-column'>

                                        <h4 className="fw-normal my-4 pb-3" style={{ letterSpacing: '1px' }}> <b><u>Fill Details</u></b></h4>
                                        <MDBInput wrapperClass='mb-4' label='Aadhar Number ' id='aadharCard_No' type='text' size="lg" placeholder='Enter Aadhar Number' onChange={(e) => handleChange(e, 'aadharCard_No')} />
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
export default PassengerDetails;