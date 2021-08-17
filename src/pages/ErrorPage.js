import React, { useState, useEffect } from 'react'
import Nav from '../components/Nav';
import { getRamdonPersons } from '../services/SearchAPI';
import '../css/ErrorPage.css';

function ErrorPage() {

  const [randomPersons, setRandomPersons] = useState("");

  // Retirado de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min;
  }

  useEffect(() => {
    async function RandomPerson() {
      const { image } = await getRamdonPersons(getRandomInt(1,184));
      setRandomPersons(image);
    }
    RandomPerson();
  }, []);

  // console.log(getRandomInt(1,9));

  return (
    <div>
      <Nav />
      <h2>Ooooops, página não encontrada!!</h2>
      <div className="error">
      { randomPersons ?  
          <img src={ randomPersons } alt="random avatar from page not found" width="300px"/> :
         <h2>Carregando...</h2> }
      </div>
    </div>
  );
}

export default ErrorPage;
