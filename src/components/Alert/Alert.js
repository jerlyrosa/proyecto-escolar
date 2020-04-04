import React from 'react';
import { Alert } from 'reactstrap';
import { Button } from 'reactstrap';

const Alerta = (props) => {
    return (
      <div>

        <Alert color={props.color}>
         <br></br><br></br>
          {props.text}
          <br></br>
          <br></br>
          <Button color="secondary" size="lg">{props.textButton}</Button>
        </Alert>
      </div>
    );
  };
  
  export default Alerta;