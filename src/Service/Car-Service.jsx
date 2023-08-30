import { myAxios } from "./BaseUrl";

export const CarAdd = (car) =>
{
    console.log(JSON.stringify(car));
    return myAxios.post('/car/addCars',car).then((response)=> response.data)
}

export const getOwnerCar = (id) =>{

    console.log(JSON.stringify(id));
    return myAxios.get(`/car/getByCarOwnerId/${id}`).then((response)=> response.data)
}