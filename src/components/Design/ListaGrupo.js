import React from 'react';
import { ListGroup, ListGroupItem } from 'reactstrap';


const ListaGrupo = (props) => {
  return (
    <div>
      <ListGroup  className='text-left'  style={{ margin:'30px'}}>
        <ListGroupItem active className='text-center'>{props.Titulo}</ListGroupItem>
        <ListGroupItem>{props.Item1}</ListGroupItem>
        <ListGroupItem>{props.Item2}</ListGroupItem>
        <ListGroupItem>{props.Item3}</ListGroupItem>
        <ListGroupItem>{props.Item4}</ListGroupItem>
      </ListGroup>
      </div>
  );
}

export default ListaGrupo;