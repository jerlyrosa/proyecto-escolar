import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
// import { Button } from 'reactstrap'


class Title extends Component{
    render() {
      return <h2>{this.props.nombre}</h2>
    }
}

Title.defaultProps = { 
  nombre: 'Titulo Por Defecto'
}



class App extends Component {
  render() {
    
    return (  
          <div className="App">
              
             <Title nombre='Nuevo titulo'/>
             <Title nombre='Nuevo titulo2'/>
             <Title nombre='Nuevo titulo3'/>
             
      </div>
      
    );          
  }
}

export default App;
