import React, { Component } from 'react'
import Login from '../Services/Login'
class First extends Component {
constructor(props) {
    super(props)
    this.state ={
            users:[]
    }
}
    componentDidMount(){
        Login.loginUser().then((res) => {
            this.setState({users:res.data});
        }).catch((err) =>{
            console.log("error");
        })
    }

    render() {
        return (
            <div>
                 <form>
  <div class="mb-3">
    <label for="exampleInputEmail1" class="form-label"></label>
    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"/>
  </div>
  <div class="mb-3">
    <label for="exampleInputPassword1" class="form-label">Password</label>
    <input type="password" class="form-control" id="exampleInputPassword1"/>
  </div>
  <div class="mb-3 form-check">
    <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
  </div>
  <button type="submit" class="btn btn-primary">Submit</button>
   </form>
            </div>
        )
    }
}
export default First