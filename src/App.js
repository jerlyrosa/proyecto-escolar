import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap'
// import { Button } from 'react-bootstrap';
import { Container, Row, Col } from 'reactstrap';
import  Navigation  from './components/Navigation'
import  Jum  from './components/Jumbotron'
import  Tarjeta  from './components/Card'


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
          <div className="App">
              
              <Navigation/>
              <br></br>

       <Container> 
      <Row>
        <Col><Jum/></Col>
      </Row>
      <Row>
        <Col><Tarjeta/></Col>
        <Col>Vision</Col>
        <Col>Valores</Col>
        
      </Row>
      </Container>    
             
      </div>
      
    );          
  }
}

export default App;
