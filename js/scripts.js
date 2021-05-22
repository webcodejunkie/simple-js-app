let pokemonList = [
  {
    name: 'Arcanine ',
    height: 6.2,
    types: ['Fire']
  },

  {
    name: 'Gengar ',
    height: 5.1,
    types: ['Ghost', 'Poison']
  },

  {
    name: 'Eevee ',
    height: 1.0,
    types: ['Normal']
  }
];

  // Print on screen Pokemon's name and age but with a conditional to authenticate if the pokemon is with a small pokemon or a big pokemon.

for (i = 0; i < pokemonList.length; i++) {
  // iteration over pokemon.list's array 3 times
  document.write(pokemonList[i].name + '(Height: ' + pokemonList[i].height + ')' );
  // A conditional that will return a string to whether or not a Pokemon is big or small
  if (pokemonList[i].height <= 3) {
    document.write('<span class="smallP"> - This is a small Pokemon </span>');
  } else if (pokemonList[i].height > 3 && pokemonList[i].height <= 10) {
    document.write('<span class="bigP"> - This is a big Pokemon! </span>');
  }
  // Linebreak after every iteration
  document.write('<br>');
}
