import { myAxios } from "../BaseUrl";

export const getOwnerCar = (id) =>{

    console.log(JSON.stringify(id));
    return myAxios.get(`/car/getByCarOwnerId/${id}`).then((response)=> response.data)
}