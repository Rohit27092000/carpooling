import { myAxios } from "./BaseUrl";

export const SignUp = (user) =>{

    console.log(JSON.stringify(user));
    return myAxios.post('/User/loginUser',user).then((response)=> response.data)
}

export const Register = (user) => {

    return myAxios.post('/User/registerUsers',user).then((response)=>response.data)
}

export const Passenger =(Passenger)=>
{
    return myAxios.post('/Passenger/addPassengers',Passenger).then((response)=>response.data)
}

export const Updateuser = (user) =>
{
    return myAxios.put('/User/UpdateUser',user).then((response)=>response.data)
}