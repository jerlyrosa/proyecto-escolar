import React, { Component } from 'react';

// import  Navigation  from './NarBar/Navigation';
import  Jum  from '../Jumbotron/Jumbotron';
// import  Tarjeta  from './components/Card';
import  Alerta  from '../Alert/Alert';
import {  Col } from 'reactstrap';


class Body extends Component {
    render() {
      
      return ( 
       
      <div className="body">
           
    <Col> <Jum
      title='Bienvenidos'
      text='Este un sitio web disenado para mostrar...'
/>  </Col>




<Col><Alerta
    color='dark'
    text=' Algunos de los productos que ofrecemos'
    textButton='ver mas'
/></Col>  

</div>

      );
    }
}

export default Body;