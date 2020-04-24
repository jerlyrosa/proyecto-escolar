import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';
import {Badge} from 'reactstrap';

const Tarjeta = (props) => {
  return (
    <div>
      <Card style={{ width: '16rem ', marginBottom:'50px', marginTop:'50px'}}>
        <CardImg top width="100%" src={props.CardImg} alt="Card image cap" />
        <CardBody>
          <CardTitle>{props.CardTitle}</CardTitle>
          <CardSubtitle><Badge color="primary" pill>{props.CardSubtitle}</Badge></CardSubtitle>
          <CardText>{props.CardText}</CardText>
          <Button>{props.Button}</Button>
        </CardBody>
      </Card>
    </div>
  );
};

export default Tarjeta;