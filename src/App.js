import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import  Navigation  from './components/NarBar/Navigation';
import Body from './components/body/index'
import Footer from './components/Footer/index';
// import Iconos from './components/Icons/index';


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
              <div className="header" class=" fixed-top ">
                  <Navigation  />   
                  
			       </div>
             <div className="Cintenedor" >
                  <Navigation  />   
                  
			       </div>
           <br />
            <div className="body">
                 <Body />
                 {/* < Iconos/> */}
            </div>
            <br />
            <div className="footer">
                 <Footer/>
            </div>
        
      </div>
      
    );          
  }
}

export default App;
