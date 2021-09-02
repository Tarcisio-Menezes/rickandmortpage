import React, { useState, useEffect } from 'react'
import { Container, Row, Col, Card } from 'react-bootstrap';
import { getRandomInt } from '../services/RandomNumber';
import { getRandomPerson } from '../services/SearchAPI';
import Nave from '../components/Nave';
import '../css/ErrorPage.css';

function ErrorPage() {

  const [randomPerson, setRandomPerson] = useState([]);

  useEffect(() => {
    async function RandomPerson() {
      const result = await getRandomPerson(getRandomInt(1, 109));
      console.log(result)
      setRandomPerson(result);
    }
    RandomPerson();
  }, []);

  return (
    <div className="error-page">
      <Container>
        <Row>
          <Col><Nave /></Col>
        </Row>
        <h2>Ooooops, página não encontrada!!</h2>
        { randomPerson ? 
        <Card style={{ width: '15rem' }}>
          <Card.Img variant="top" src={ randomPerson.imagemUrl } />
          <Card.Body>
          <Card.Text> { randomPerson.nome } não encontrou a página!</Card.Text>
          </Card.Body>
        </Card> : 
        <h2>Carregando...</h2> }
      </Container>
    </div>
  );
}

export default ErrorPage;
