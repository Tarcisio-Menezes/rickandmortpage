import React from 'react';
import Nav from '../components/Nav';
import '../css/About.css'

function About() {

  // Retirado de https://developer.mozilla.org/pt-BR/docs/Web/JavaScript/Reference/Global_Objects/Math/random
  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min)) + min;
  // }

  // useEffect(() => {
  //   async function RandomPerson() {
  //     const { image } = await getRamdonPersons(getRandomInt(1,184));
  //     setRandomPersons(image);
  //   }
  //   RandomPerson();
  // }, []);

  return (
    <div>
      <Nav />
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
        href="https://rickandmortyapi.com/"
        target="_blank" rel="noreferrer"
      > 
        rickandmortyapi
      </a>
      <div className="about-image">
         <h2>Carregando...</h2>
      </div>
    </div>
  );
}

export default About;