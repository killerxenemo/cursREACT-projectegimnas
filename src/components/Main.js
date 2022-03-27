import Usuaris from "./Usuaris";
import Semana from "./Semana";
import Tablero from "./Tablero";
import Formulari from "./Formulari";
import React, { Component } from 'react';
import { Container,Col,Row,Navbar,Nav } from 'react-bootstrap';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      usuari:"amartinez",semana:"2022-01-31"
    }

}

  onChangeUsuari=(event)=>{
    this.setState({usuari:event});
    console.log(event);
    //this.render();
  }
  onChangeSemana=(event)=>{
    this.setState({semana:event.toISOString().substring(0,10)});
    console.log(this.state);
  }
  render() {

  return (
    <>
    <Navbar bg="primary" variant="dark">
        <Navbar.Brand href="#home">Curs React - Jose Merino</Navbar.Brand>
        <Nav className="me-auto">
          <Semana  canvi={this.onChangeSemana} />
        </Nav>
        <Nav className="me-auto">
        <Usuaris canvi={this.onChangeUsuari} />
        </Nav>
    </Navbar>
    <Container>
      <Row>
        <Col sm={8}>
        <Tablero name={this.state.usuari} semana={this.state.semana} />       
        </Col>
        <Col sm={4}>
        <Formulari usuari={this.state.usuari} semana={this.state.semana}/>
        </Col>
      </Row>
    </Container>
  
    </>
  );
  }
}
export default Main;
