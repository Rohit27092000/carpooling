import { myAxios } from "./BaseUrl";

export const PassengerAdd =(Passenger)=>
{
    return myAxios.post('passengers/addPassengers',Passenger).then((response)=>response.data)
}

export const getPassenger =(userid)=>
{
    console.log(JSON.stringify(userid));

    return myAxios.get(`passengers/getPassByUserId/${userid}`).then((response)=>response.data)
}

