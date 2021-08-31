import React, { useEffect, useState } from 'react';
import Nav from '../components/Nav';
import '../css/Episode.css';
import { getEpisodes } from '../services/SearchAPI';

function Episode() {

  const [episodes, setEpisodes] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getPersons = async () => {
     const { results } = await getEpisodes();
     setEpisodes(results)
    }

    getPersons() && setLoading(false);
  }, []);

  // console.log(episodes)

  function listConditinal() {
    if(loading || !episodes) {
      return <p>Carregando...</p>
    } return (
      <ul>
      {
        episodes.map((item, index) => <li key={index}> 
          <p>{item.name}</p> 
          <p>Date: {item.air_date} </p>
          <p>Episódio: {item.episode}</p>
          </li>)
      }
    </ul>
    );
  }

  return (
    <div className="episodes">
      <Nav />
      <h1>Episódios</h1>
      <p>Em construção...</p>
      { listConditinal() }
    </div>
  );
}

export default Episode;