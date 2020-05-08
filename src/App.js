import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  Navigation  from './components/NarBar/Navigation';
import Body from './components/body/index'
import Footer from './components/Footer/index';
import Iconos from './components/Social-Narbar/index';




class App extends Component {
  render() {
    
    return (  
          <div className="app">


              <div className="header" class=" fixed-top ">
                  <Navigation  />    
                  
			       </div>
             <div className="Contenedor" >
                   <Navigation  />  
			       </div>        
           <br />
            <div className="body">
                 <Iconos />
                 <Body />
                 
            </div>
            <br />
            <div className="footer">
                 <Footer />
                 
                
            </div>       
        
      </div>
      
    );          
  }
}


export default App;

