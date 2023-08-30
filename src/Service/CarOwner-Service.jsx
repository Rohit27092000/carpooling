import { myAxios } from "./BaseUrl";

// export const RegisterCar = (car) =>{

//     console.log(JSON.stringify(car));
//     return myAxios.post('car',user).then((response)=> response.data)
// }

export const getCarOwner = (userId) =>
{
    console.log(JSON.stringify(userId));
    return myAxios.get(`CarOwner/getCarOwnerByUserId/${userId}`).then((response)=> response.data)
}

export const CarOwnerAdd =(CarOwner)=>
{
    return myAxios.post('CarOwner/addCarOwner',CarOwner).then((response)=>response.data)
}

export const getOwnerCar = (id) =>{

    console.log(JSON.stringify(id));
    return myAxios.get(`/car/getByCarOwnerId/${id}`).then((response)=> response.data)
}