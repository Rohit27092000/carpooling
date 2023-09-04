import { myAxios } from "../BaseUrl";


export const getTrip = (trip) =>{

    console.log(JSON.stringify(trip));
    return myAxios.post('/trips/getTripByCity',trip).then((response)=> response.data)
}