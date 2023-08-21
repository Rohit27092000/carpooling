import axios from 'axios';

const GetUser = "http://localhost:8080/api/users/1";

class login {

    async loginUser(){

        return await axios.get(GetUser);
    }
}

export default new login()