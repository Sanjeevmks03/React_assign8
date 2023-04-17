import React, { Component } from 'react'
import axios from 'axios'
export class Postrequest extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         first_name:"",
         last_name:"",
         phone_number:"",
         email:""
      }
    }
    changehandler=(e)=>{
        this.setState({
            [e.target.name]:e.target.value
        })
    }
    submithandler=e=>{
        e.preventDefault()
        console.log(this.state)
        axios.post('https://run.mocky.io/v3/a2eebe62-c28f-478d-a8e3-523e589eb31f',this.state)
        .then(response=>{
            console.log(response)
        })
        .catch(error =>{
            console.log(error)
        })
    }
  render() {
    const {first_name,last_name,phone_number,email}=this.state
    return (
      <div >
        <h1>From Post Request</h1>
        <div className='row' >
            <div className='col-4'></div>
            <div className='col'>
                <form onSubmit={this.submithandler} >
                    <div className="form-group">
                    <label >First Name: </label>
                    <input type="text" name="first_name" value={first_name} className="form-control" onChange={this.changehandler}/>
                    </div>
                    <div className="form-group">
                    <label >Last Name: </label>
                    <input type="text" name="last_name" value={last_name} className="form-control" onChange={this.changehandler}/>
                    </div>
                    <div className="form-group">
                    <label >Email:  </label>
                    <input type="email" name="email" value={email} className="form-control" onChange={this.changehandler}/>
                    </div>
                    <div className="form-group">
                    <label >Phone Number: </label>
                    <input type="text" name="phone_number" value={phone_number} className="form-control" onChange={this.changehandler}/>
                    </div>

                    <button type="submit" className="btn btn-warning mt-3">submit</button>
                </form>
            </div>
            <div className='col-4'></div>
            
        </div>
        
      </div>
    )
  }
}

export default Postrequest