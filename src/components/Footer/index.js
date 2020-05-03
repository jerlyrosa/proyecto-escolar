import React, { Component } from 'react';
import { Container,Row,Col } from 'reactstrap';
class Footer extends Component {

	render() {
		return (
			<div >
				
				<footer  className="py-5 bg-dark text-white-50 ">
					<div className=" text-center">
						<Container>
							<Row>
								<Col>
								 <Col >Telefono: 809-297-0114</Col>
								 <Col>Direccion: Los hornos, La Vega</Col>
								</Col>
						    </Row>
							<Col  style={{ padding:'10px'}}>Copyright &copy; Jerly</Col>
						</Container>
					</div>
				</footer>
			
			</div>
		);
	}
}

export default Footer;
