
  let pokemonRepository = (function() {

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

    let thisPokemonIS = 'This Pokemon\'s name is—';
    let thisPokemonHeight = 'It\'s height is: ';
    let bigPokemon = '<span class="bigP"> - This is a big Pokemon! </span>';
    let smallPokemon = '<span class="smallP"> - This is a small Pokemon </span>';

    // function to add new Pokemon's to the pokemonList array & also check to make sure it adds an object rejecting all other types of
    function add(pokemon){
      if (typeof (pokemon) === 'object') {
        pokemonList.push(pokemon);
        console.log('You\'ve successfully added a new Pokemon!');
      } else if (typeof (pokemon) !== 'object') {
        console.log('Invalid, this input isnt an object');
      }
    }

    // function being declared to return an array from pokemonList
    function getAll() {
      return pokemonList;
    }

      // A forEach function that'll replace a for loop
    pokemonList.forEach(function(pokemon){
      // a series of template literals being used for cleaner code
      document.write( `${thisPokemonIS}` + pokemon.name + `${thisPokemonHeight}` + pokemon.height);
      // A conditional that will return a string to whether or not a Pokemon is big or small
      if (pokemon.height <= 3) {
        document.write(`${smallPokemon}`);
      } else if (pokemon.height > 3 && pokemon.height <= 10) {
        document.write(`${bigPokemon}`);
      }
      // Linebreak after every iteration
      document.write('<br>');
    });

    return {
      add: add,
      getAll: getAll
    };

  })();
