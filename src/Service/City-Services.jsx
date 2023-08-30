import { myAxios } from "./BaseUrl";

export const getCityByName = (cityName) =>{

    console.log(JSON.stringify(cityName));
    return myAxios.get(`/city/getByCityName/${cityName}`).then((response)=> response.data)
}

export const getCityList = () =>{

    console.log(JSON.stringify());
    return myAxios.get("/city/getAllCities").then((response)=> response.data)
}