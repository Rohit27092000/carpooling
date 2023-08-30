import { myAxios } from "../BaseUrl";

export const makeTrip = (trip) =>{

    console.log(JSON.stringify(trip));
    return myAxios.post('/trips/addTrip',trip).then((response)=> response.data)
}
