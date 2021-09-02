import React, { useState, useEffect } from 'react'
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
    <div>
      <Nave />
      <h2>Ooooops, página não encontrada!!</h2>
      <div className="error">
        { randomPerson ?
        <img src={ randomPerson.imagemUrl }
        alt={ `Imagem de um personagem gerado aleatóriamente: ${ randomPerson.nome }` }
        /> : 
        <h2>Carregando...</h2> }
      </div>
    </div>
  );
}

export default ErrorPage;
