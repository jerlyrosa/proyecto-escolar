import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';

const Paginacion = (props) => {
  return (
    <Pagination size="lg" color="primary">
      <PaginationItem active>
        <PaginationLink  first herf="/productos" />
      </PaginationItem>
      <PaginationItem>
        <PaginationLink  previous herf="/productos" />
      </PaginationItem>
      <PaginationItem >
        <PaginationLink href="/productos">
          1
        </PaginationLink>
      </PaginationItem>
      <PaginationItem >
        <PaginationLink href="/productos/pag2">
          2
        </PaginationLink>
      </PaginationItem>
      <PaginationItem >
        <PaginationLink href="/productos/pag3">
          3
        </PaginationLink>
      </PaginationItem>
      <PaginationItem>
        <PaginationLink next href="#" />
      </PaginationItem>
      <PaginationItem active>
        <PaginationLink last href="#" />
      </PaginationItem >
    </Pagination>
  
  
  
  
  );
  
}



export default Paginacion;