import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import About from './components/About';
import Apidatashow from './components/Apidatashow';
import Login from './components/Login';
import Signup from './components/Signup';
import{BrowserRouter,Route}from 'react-router-dom'
class App extends React.Component {
  render(){
  return (
    <BrowserRouter>
  
      <Navbar />
      <Route  exact path="/" component={About} />
      <Route  path="/About" component={About} />
      <Route  path="/Apidatashow" component={Apidatashow} />
      <Route  path="/Login" component={Login} />
      <Route  path="/Signup" component={Signup} />
      
    </ BrowserRouter>
  );
}
}

export default App;

