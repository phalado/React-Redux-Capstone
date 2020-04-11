const addHero = hero => ({
  type: 'ADD_HERO',
  id: hero.id,
  name: hero.name,
  identity: hero.biography['full-name'],
  image: hero.image.url,
  chart: hero.powerstats,
  filiation: hero.connections['group-affiliation'].split(/(,\s|;\s|,|;)/)
    .filter(value => value !== ', ' && value !== '; ' && value !== ',' && value !== ';'),
  alignment: hero.biography.alignment,
});

const changeFilter = filter => ({
  type: 'CHANGE_FILTER',
  filter,
});

const chngRender = render => ({
  type: 'CHANGE_RENDER',
  render,
});

export { addHero, changeFilter, chngRender };
