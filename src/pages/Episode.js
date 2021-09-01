import React, { useEffect, useState } from 'react';
import { Form } from 'react-bootstrap';
import Nav from '../components/Nav';
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
  }, [newEpisodes, setNewEpisodes]);

  console.log(episodes)

  function listConditinal() {
    if(loading || !episodes) {
      return <p>Carregando...</p>
    } return (
      <ul>
      {
        episodes.map((item, index) => <li key={index}> 
          <p>{item.nome}</p> 
          <p>Data de estreia: {item.dataEstreia.substring(10, 0)} - temporada {item.temporadaId} </p>
          <p>Descrição: {item.descricao}</p>
          <p>Sinopse: {item.sinopse}</p>
          </li>)
      }
    </ul>
    );
  }

  return (
    <div className="episodes">
      <Nav />
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
    </div>
  );
}

export default Episode;