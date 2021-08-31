import React, { useContext } from 'react';
import { Form, FloatingLabel } from 'react-bootstrap';
import MainContext from '../context/MainContext';

function Inputs() {
  const { setNewPersons, setSearchName, 
    searchName, setSearchStatus, searchStatus } = useContext(MainContext);
  return (
    <section>
        <p> Explorar aleatoriamente por página:</p>
        <Form.Control
          type="number"
          placeholder="Número da página" 
          onChange={ (e) => setNewPersons(e.target.value) }
          min="1"
        />
        <h3>Pesquisa combinada</h3>
        <section className="inputs">
             <p> Pesquise por nome e diga se o personagem está vivo ou morto</p>
             <Form.Control
              type="text"
              placeholder="Nome do personagem"
              onChange={ (e) => setSearchName((e.target.value).toLowerCase()) }
             />
            <FloatingLabel controlId="floatingSelect">
              <Form.Select
                aria-label="alive, dead or unknow"
                onChange={ (e) => setSearchStatus(e.target.value) }
              >
              <option>Status</option>
              <option value="alive"> Alive </option>
              <option value="dead"> Dead </option>
              <option value="unknow"> Unknow </option>
            </Form.Select>
            <p>{ searchName.toUpperCase() } { searchStatus.toUpperCase() }</p>
          </FloatingLabel>
        </section>
    </section>
  );
}

export default Inputs;
