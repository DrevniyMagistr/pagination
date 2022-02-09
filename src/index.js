import { createHeroesList } from './js/heroesList';
import { getHeroesList } from './js/api/dotaApi';

import './css/styles.css';

const renderHeroes = template => {
  const heroesListRef = document.querySelector('.hero-list');
  heroesListRef.innerHTML = template;
};

getHeroesList()
  .then(heroes => {
    const heroesTemplate = createHeroesList(heroes);
    renderHeroes(heroesTemplate);
  })
  .catch(error => console.log(error));
