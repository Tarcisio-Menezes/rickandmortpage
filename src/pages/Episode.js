import React, { useEffect, useState } from 'react';
import { Card, Form, Container, Row, Col } from 'react-bootstrap';
import Nave from '../components/Nave';
import '../css/Episode.css';
import { getEpisodes, getSearchEpisodes } from '../services/SearchAPI';

function Episode() {

  const [episodes, setEpisodes] = useState([]);
  const [newEpisodes, setNewEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getEpisode = async () => {
     const results = await getEpisodes();
     setEpisodes(results)
    }

    getEpisode() && setLoading(false);
  }, []);

  useEffect(() => {
    const getSearchPerson = async (searchName) => {
     const results = await getSearchEpisodes(newEpisodes);
     setEpisodes(results)
    }

    getSearchPerson() && setLoading(false);
  }, [newEpisodes]);

  // console.log(episodes)

  function listConditinal() {
    if(loading || !episodes) {
      return <p>Carregando...</p>
    } return (
      <ul className="episodes">
      {
        episodes.map((item, index) => <li key={index}>
          <Card style={{ width: '15rem' }}>
            <Card.Body>
              <Card.Title>{item.nome}</Card.Title>
              <Card.Subtitle className="mb-2 text-muted">
                Data de estreia: {item.dataEstreia.substring(10, 0)} Temporada {item.temporadaId}
              </Card.Subtitle>
              <Card.Text>
                <p>{ item.descricao }</p>
                <p>Sinopse: { item.sinopse }</p>
              </Card.Text>
            </Card.Body>
          </Card>
       </li>)
      }
    </ul>
    );
  }

  return (
    <div className="episode-page">
      <Container>
        <Row>
          <Col><Nave /></Col>
        </Row>
          <h1>Episódios</h1>
          <section className="inputs">
            <h3> Pesquise pelo nome do episódio:</h3>
            <Form.Control
            type="text"
            placeholder="Nome do episódio"
            onChange={ (e) => setNewEpisodes((e.target.value).toLowerCase()) }
            />
          </section>
          { listConditinal() }
      </Container>
    </div>
  );
}

export default Episode;