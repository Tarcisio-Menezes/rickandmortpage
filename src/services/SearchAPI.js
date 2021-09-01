export const getPersons = () => fetch('http://www.irmaodojorel.com/api/Personagem')
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

export const getNamePersons = (namePersons) => fetch(`http://www.irmaodojorel.com/api/Personagem/busca/${namePersons}`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

  export const getEpisodes = () => fetch(`http://www.irmaodojorel.com/api/Episodio`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));

  export const getSearchEpisodes = (episodeName) => fetch(`http://www.irmaodojorel.com/api/Episodio/busca/${episodeName}`)
  .then((initial) => (
    initial
      .json()
      .then((json) => (initial.ok ? Promise.resolve(json) : Promise.reject(json)))
  ));
