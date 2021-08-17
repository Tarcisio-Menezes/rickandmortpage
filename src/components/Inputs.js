import React, { useContext } from 'react';
import MainContext from '../context/MainContext';

function Inputs() {
  const { setNewPersons, setSearchName, setSearchStatus } = useContext(MainContext);
  return (
    <section>
        <p> Explorar por página:</p>
        <input
          type="number"
          placeholder="Número da página"
          onChange={ (e) => setNewPersons(e.target.value) }
          min="1"
        >
        </input>
        <div className="combined-search">
          <h3>Pesquisa combinada</h3>
          <p> Explorar por nome:</p>
          <input
            type="text"
            placeholder="Nome do personagem"
            onChange={ (e) => setSearchName((e.target.value).toLowerCase()) }
          >
          </input>
          <p> Explorar por status:</p>
          <select
            onChange={ (e) => setSearchStatus(e.target.value) }
          >
            <option value="alive"> alive </option>
            <option value="dead"> dead </option>
            <option value="unknow"> unknow </option>
          </select>
        </div>
    </section>
  );
}

export default Inputs;
