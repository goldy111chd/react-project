import React, { Component } from 'react';
    class Signup extends Component {
      state = {

        email: "",
        password: "",
        alert: ''
        }
        
        
        handleSubmit = (e) => {
        
        e.preventDefault();
        const url = 'https://reqres.in/api/register';
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
        }).then(res => res.json()).then((res) => { console.log("llllllllllllll",res)
        if (res.token) {
        alert("Registration is Successfull.");
        this.setState({ alert: <div className="alert alert-success">Register Successfully</div> })
        this.props.history.push("/");
        
        } else {
        this.setState({ alert: <div className="alert alert-danger">Somethong went wrong</div> })
        }
        });
        
        } catch (error) {
        console.error('Error:', error);
        }
        }
        render() {
  return(
    <form class="border-none" onSubmit={this.handleSubmit} >
    {this.state.alert}
    <div id="login-box">
    <div className="lefts">
      <h1>Sign up</h1>
      <input type="text" name="email"value={this.state.email} onChange={(e) => this.setState({ email: e.target.value })}  placeholder="E-mail" />
      <input type="password" name="password" value={this.state.password} onChange={(e) => this.setState({ password: e.target.value })}  placeholder="Password" />
      
      <input type="submit" name="signup_submit" value="Sign me up" />
    </div>
    
    <div className="rights">
      <span className="loginwith">Sign in with<br />social network</span>
      
      <button className="social-signin facebook">Log in with facebook</button>
      <button className="social-signin twitter">Log in with Twitter</button>
      <button className="social-signin google">Log in with Google+</button>
    </div>
    <div className="or">OR</div>
  </div>
  </form>
  )
}
}
export default Signup;