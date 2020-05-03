import React from 'react';
import { Media } from 'reactstrap';
import img3 from  '../Img/img3.jpg'
const Multimedia = () => {
  return (
    <Media>
      <Media left src={this.props.Media}>
       
      </Media>
      <Media body>
        <Media heading>
          Media heading
        </Media>
        Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at, tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate fringilla. Donec lacinia congue felis in faucibus.
      </Media>
    </Media>
  );
};

export default Multimedia;