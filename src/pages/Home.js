import React, { useEffect, useState, useContext } from 'react';
import Nav from '../components/Nav';
import MainContext from '../context/MainContext';
import { getNamePersons, getNewPersons, getPersons } from '../services/SearchAPI';
import '../css/Home.css';
import Inputs from '../components/Inputs';

function Home() {
  const [loading, setLoading] = useState(true);
  const { 
    persons,
    setPersons,
    newPersons,
    searchName,
    searchStatus,
    } = useContext(MainContext);

  useEffect(() => {
    async function getCharacter() {
      const { results } = await getPersons();
      setPersons(results);
    }
  
    getCharacter() && setLoading(false);
  }, []);

  // console.log(persons);

  useEffect(() => {
    async function getNewCharacter() {
      const { results } = await getNewPersons(newPersons);
      setPersons(results);
    }
    getNewCharacter() && setLoading(false);
  }, [newPersons]);

  useEffect(() => {
    async function getNameCharacter() {
      const { results } = await getNamePersons(searchName, searchStatus);
      setPersons(results);
    }
    getNameCharacter() && setLoading(false);
  }, [searchName, searchStatus]);

  function listConditinal() {
    if(loading || !persons) {
      return <p>Carregando...</p>
    } return (
      <ul>
      {
          persons.map((item, index) => <li key={index}> 
            <img
              src={item.image}
              alt={item.name}
              width="300px"
            /> 
            <p>{item.name}</p>
            <p>Espécie: {item.species} </p>
            <p>Status: {item.status}</p>
            <p>Localização: {item.location.name}</p> 
            </li>)
      }
    </ul>
    );
  }

  return (
    <div>
     <Nav />
      <h1>Bem vindo ao Rick and Mort fã page</h1>
      <h3> Você pode explorar mais personagens alterando os filtros!</h3>
      <Inputs />
      { listConditinal() }
    </div>
  );
}

export default Home;
