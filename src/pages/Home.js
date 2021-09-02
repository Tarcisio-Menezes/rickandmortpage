import React, { useEffect, useState, useContext } from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import Nave from '../components/Nave';
import MainContext from '../context/MainContext';
import { getPersons, getNamePersons } from '../services/SearchAPI';
import '../css/Home.css';
import Inputs from '../components/Inputs';
import logo from '../images/logo';

function Home() {
  const [loading, setLoading] = useState(true);
  const { 
    persons,
    setPersons,
    searchName,
    } = useContext(MainContext);

  useEffect(() => {
    async function getCharacter() {
      const results = await getPersons();
      setPersons(results);
    }
  
    getCharacter() && setLoading(false);
  }, []);

  // console.log(persons);

  useEffect(() => {
    async function getNameCharacter() {
      const results = await getNamePersons(searchName);
      setPersons(results);
    }
    getNameCharacter() && setLoading(false);
  }, [searchName]);

  function listConditinal() {
    if(loading || !persons) {
      return <p>Carregando...</p>
    } return (
      <ul className="home-persons">
      {
        persons.map((item, index) => <li key={index}>
          <Card 
            style={{ width: '15rem' }}
          >
            <Card.Img 
              variant="top"
              src={item.imagemUrl}
              alt={item.descricao}
            />
          <Card.Body>
            <Card.Title>{item.nome}</Card.Title>
            <Card.Text>
              <p>{ item.descricao }</p>
              { item.idade && <p> Idade: {item.idade} </p> }
              { item.categoria && <p> Categoria: {item.categoria} </p> }
              { item.personalidade && <p> Personalidade: {item.personalidade} </p> }
            </Card.Text>
          </Card.Body>
          <Card.Footer>
            { item.frase && <p>Frase mais conhecida: {item.frase}</p> } 
          </Card.Footer>
          </Card>
       </li>)
      }
    </ul>
    );
  }

  return (
    <div className="home-page">
      <Container fluid="md">
        <Row>
          <Col> <Nave /> </Col>
        </Row>
        <section>
            <img src={ logo } alt="logo" width="30%" />
            <h1>Encontre os personagens!</h1>
          </section>
          <Inputs />
          { listConditinal() }
      </Container>
    </div>
  );
}

export default Home;
