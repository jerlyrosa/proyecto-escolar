import React, { Component } from "react";
import {   Container } from 'reactstrap';
import ValidatedLoginForm from "./ValidatedLoginForm";


class Login extends Component {
  render() {
    
    return (  
      <div className="login  mx-auto w-50 p-3 text-center">
        <Container className="themed-container" fluid="sm">
      <h1> Log in</h1>
      <ValidatedLoginForm />
      
      </Container>
    </div>


   
    );          
  }
}

export default Login;