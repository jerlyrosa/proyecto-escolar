import React, { Component } from 'react';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import Productos from '../Productos/index';
import Inicio from '../Inicio/index';
import Nosotros from '../Nosotros/index'


class Body extends Component {
    render() {
      
      return ( 
       
      <div className="body">
  <Router>
       <Route exact path="/productos" component={Productos} />
       <Route exact path="/inicio" component={Inicio} />
       <Route exact path="/nosotros" component={Nosotros} />

</Router>
           
   

</div>

      );
    }
}

export default Body;