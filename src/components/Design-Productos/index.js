import React, { Component } from "react";
import Jum from '../Design/Jumbotron'
import Multimedia from './Multimedia'


class InterfazProducto extends Component {
    render() { 
      return (     
          <div className="interfazProducto">
            <h1>InterfazProducto</h1>
            
            
            <Jum/>
            <Multimedia/>
            </div>
      );}
    }


export default InterfazProducto;