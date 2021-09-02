import React, { useState, useEffect } from 'react';
import Nave from '../components/Nave';
import { getRandomInt } from '../services/RandomNumber';
import { getRandomPerson } from '../services/SearchAPI';
import '../css/About.css'

function About() {

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
      <h2>
        Se você gostou do projeto, me ajude a mantê-lo!
        Entre em contato por:
      </h2>
      <br />
        <a 
          href="https://github.com/Tarcisio-Menezes"
          target="_blank" rel="noreferrer"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/tarc%C3%ADsio-menezes/"
          target="_blank" rel="noreferrer"
        > 
          Linkedin 
        </a>
      <br />
      <h2> Agradecimento ao site: </h2> 
      <a 
        href="http://www.irmaodojorel.com/"
        target="_blank" rel="noreferrer"
      > 
        irmaodojorel.com/
      </a>
      <div className="about-image">
        { randomPerson ?
        <img src={ randomPerson.imagemUrl }
        alt={ `Imagem de um personagem gerado aleatóriamente: ${ randomPerson.nome }` }
        /> : 
        <h2>Carregando...</h2> }
      </div>
    </div>
  );
}

export default About;