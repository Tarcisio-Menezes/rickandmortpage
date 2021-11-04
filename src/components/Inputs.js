import React, { useContext } from 'react';
import { Form } from 'react-bootstrap';
import MainContext from '../context/MainContext';

function Inputs() {
  const { setSearchName } = useContext(MainContext);
  return (
    <section>
        <section className="inputs">
             <h3> Pesquise por nome:</h3>
             <Form.Control
              type="text"
              placeholder="Nome do personagem"
              onChange={ (e) => setSearchName((e.target.value).toLowerCase()) }
             />
        </section>
    </section>
  );
}

export default Inputs;
