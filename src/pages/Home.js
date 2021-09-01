import React, { useEffect, useState, useContext } from 'react';
import Nav from '../components/Nav';
import MainContext from '../context/MainContext';
import { getPersons, getNamePersons } from '../services/SearchAPI';
import '../css/Home.css';
import Inputs from '../components/Inputs';

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
      <ul>
      {
          persons.map((item, index) => <li key={index}> 
            <img
              src={item.imagemUrl}
              alt={item.descricao}
            /> 
            <p>{item.nome}</p>
            <p>{item.descricao}</p>
            { item.personalidade && <p> Personalidade: {item.personalidade} </p> }
            { item.categoria && <p> Categoria: {item.categoria} </p> }
            { item.idade && <p> Idade: {item.idade} </p> }
            { item.descricao && <p>Descricao: {item.descricao }</p>}
            { item.frase && <p>Frase mais conhecida: {item.frase}</p> } 
            </li>)
      }
    </ul>
    );
  }

  return (
    <div>
     <Nav />
      <h1>Encontre os personagens de Irmão do Jorel</h1>
      <Inputs />
      { listConditinal() }
    </div>
  );
}

export default Home;
