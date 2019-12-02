import React, { Component } from 'react';
class Login extends Component {
    constructor(props){
        super(props);
        if(localStorage.token){
        this.props.history.push('/')
        }
      }
      state = {
        email: "",
        password: "",
        token: '',
        alert: ''
      }
    
      handleSubmit =(e)=> {
       
    e.preventDefault();
        const url = 'https://reqres.in/api/login';
        const data = {
          email: this.state.email,
          password: this.state.password
        };
    
        try {
         fetch(url, {
            method: 'POST', 
            body: JSON.stringify(data),
            headers: {
              'Content-Type': 'application/json'
            }
          }).then(res=> res.json()).then( res=> 
          {
            if(res.token){
              localStorage.setItem('token', res.token);
              this.props.history.push('/about')
              window.location.reload()
              this.setState({ alert: <div className="alert alert-success">Login Successfully</div> })
              alert("Login Successfully")
            }
            else{
              this.setState({ alert: <div className="alert alert-sm alert-danger">Please enter valid username or password</div> })
            }
          });
              
        } catch (error) {
          console.error('Error:', error);
        }
      }
    
    render() {
    return(
      <form action="/" class="main-head">
      
    
      <div class="container">
        <label for="uname"><b>Username</b></label>
        <input type='email' className="login-p" value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })} name='email' placeholder='email' />
    
        <label for="psw"><b>Password</b></label>
        <input type='password' className="login-p" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })} name='password' placeholder='password' />
            
        <button class="btn-Cls" onClick={this.handleSubmit}> Sign In</button>
      
      </div>
    
      {/* <div class="container" >
        <button type="button" class="cancelbtn">Cancel</button>
        <span class="psw">Forgot <a href="/">password?</a></span>
      </div> */}
    </form>
    
    
    
   
    )
  }
}


export default Login;