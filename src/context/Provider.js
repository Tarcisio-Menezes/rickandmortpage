import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [persons, setPersons] = useState([]);
  const [newPersons, setNewPersons] = useState('');
  const [searchName, setSearchName] = useState('');
  const [searchStatus, setSearchStatus] = useState('');

  const context = {
    persons,
    setPersons,
    newPersons,
    setNewPersons,
    searchName,
    setSearchName,
    searchStatus,
    setSearchStatus,
  };

  return (
    <MainContext.Provider value={ context }>
      {children}
    </MainContext.Provider>
  );
};

export default Provider;

Provider.propTypes = {
  children: PropTypes.array,
}.isRequired;
