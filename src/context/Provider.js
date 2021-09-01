import React, { useState } from 'react';
import PropTypes from 'prop-types';
import MainContext from './MainContext';

const Provider = ({ children }) => {
  const [persons, setPersons] = useState([]);
  const [searchName, setSearchName] = useState('');

  const context = {
    persons,
    setPersons,
    searchName,
    setSearchName,
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
