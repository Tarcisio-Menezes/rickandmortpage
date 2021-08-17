export const getPersons = () => fetch('https://rickandmortyapi.com/api/character')
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getNewPersons = (newPersons) => fetch(`https://rickandmortyapi.com/api/character/?page=${newPersons}`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getNamePersons = (namePersons, status) => fetch(`https://rickandmortyapi.com/api/character/?name=${namePersons}&status=${status}`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

  export const getEpisodes = (number) => fetch(`https://rickandmortyapi.com/api/episode`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));


  export const getRamdonPersons = (number) => fetch(`https://rickandmortyapi.com/api/character/${number}`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
