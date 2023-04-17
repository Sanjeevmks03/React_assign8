import React, { Component } from 'react'
import axios from 'axios'

export class Getrequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         posts:[],
         errormsg:""
      }
    }
    componentDidMount(){
        axios.get('https://run.mocky.io/v3/a2eebe62-c28f-478d-a8e3-523e589eb31f ')
        .then(response=>{
            console.log(response.data)
            this.setState({
                posts:response.data
            })
        })
        .catch(error=>{
            console.log(error)
            this.setState({
                errormsg:"error retrieving data...."
            })
        })
    }
  render() {
    const {posts,errormsg}=this.state
    return (
      <div>
        <h1>From Get Request</h1>
        {
          
            <ul>
              <li>First_name: {posts.first_name}</li>
              <li>Last Nmae: {posts.last_name}</li>
              <li>Contact: {posts.phone_number}</li>
              <li>Email: {posts.email}</li>
              <li>Gender: {posts.gender}</li>
          </ul>
        }
        {
            errormsg?<div style={{color:"red"}}>{errormsg}</div>:null
        }
      </div>
    )
  }
}

export default Getrequest