import { myAxios } from "../BaseUrl";

export const getCarOwner = (id) =>{

    console.log(JSON.stringify(id));
    return myAxios.get(`/CarOwner/getCarOwnerByUserId/${id}`).then((response)=> response.data)
}

