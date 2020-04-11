async function getHeroes() {
  const address = 'https://superheroapi.com/api.php/2602016920125978/search/_';
  const response = await fetch(address);
  const answer = await response.json();
  const heroes = await answer.results.filter(heroes => heroes.biography.publisher === 'DC Comics');
  console.log(answer);
  console.log(heroes);
  return heroes;
}

export default getHeroes;
