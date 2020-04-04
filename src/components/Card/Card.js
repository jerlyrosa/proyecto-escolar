import React from 'react';
import { Card, CardBody,  CardTitle, CardText, CardImg } from 'reactstrap';

const  Tarjeta = (props) => {
  return (
    <div>
      <Card>
        <CardImg   />
        <CardBody>
         <CardTitle>{props.cardTitle}</CardTitle>
          <CardText>{props.cardText} </CardText>
          <CardText>
            <small className="text-muted">Last updated 3 mins ago</small>
          </CardText>
        </CardBody>
      </Card>
      </div>
  );
};


export default Tarjeta;