import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap'
// import { Button } from 'react-bootstrap';
// import {  Col } from 'reactstrap';
import  Navigation  from './components/NarBar/Navigation';
// import  Jum  from './components/Jumbotron/Jumbotron';
// // import  Tarjeta  from './components/Card';
// import  Alerta  from './components/Alert/Alert';
import Body from './components/body/index'


// class Title extends Component{
//     render() {
//       return <h2>{this.props.nombre}</h2>
//     }
// }

// Title.defaultProps = { 
//   nombre: 'Titulo Por Defecto'
// }


             

class App extends Component {
  render() {
    
    return (  
          <div className="app">
              
  
              <div className="header">
              <Navigation/>

			</div>
      <div className="body">
        <Body />
      </div>
         
      </div>
      
    );          
  }
}

export default App;
