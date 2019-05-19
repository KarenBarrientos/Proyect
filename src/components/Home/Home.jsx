import React , {Component} from 'react'
import { Link } from 'react-router-dom';
import { Jumbotron, Container, Row, Col, Image, Button } from 'react-bootstrap';
import './Home.css'

export default class Home extends Component {
  render() {
      return (
          <Container>
              <Jumbotron>
                  <h2>Bienvidos a Chofer Sobrio</h2>
                  <p>Esta es la pagina Home!</p>
              </Jumbotron>
              <Link to="/pedirchofer">
                  <Button bsStyle="primary"> Pedir Chofer</Button>
              </Link>
          </Container>
      )
  }
}