import React, { Component } from 'react'
import './signIn.scss'
import FormInput from '../formInput/FormInput.jsx'
import CustomButton from '../customButton/CustomButton.jsx'


 class SignIn extends Component {

  constructor(props) {
    super(props)

    this.state = {

      email:'', 
      password: ''

    }
  }


handleSubmit =(e)=>{
e.preventDefault() 
this.setState({email:'',  password:''})
}
handleChange =(e)=>{
  
  const {value,name} = e.target;  
  this.setState({[name]:value})
  }


  render() {
    return (
      <div className="sign-in" >
        <h2>I already have a account</h2> 
        <span>Sign in with your email and password</span>   
        
        <form onSubmit={this.handleSubmit} >
          <FormInput 
          name = "email" 
          type="email" 
          id='email' 
          value={this.state.email} 
          handleChange={this.handleChange}
          label='email'
          required/>
          

          <FormInput 
          name = "password" 
          type="password" 
          id='password' 
          value={this.state.password} 
          handleChange={this.handleChange}
          label="Password"
          required/>
      

          <CustomButton type="submit"> Sign In </CustomButton>      
        
        </form>
      </div>
    )
  }
}

export default SignIn
  