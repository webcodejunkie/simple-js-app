
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

    // function to add new Pokemon's to the pokemonList array & also check to make sure it adds an object rejecting all other types of
    function add(pokemon) {
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

    function addListItem(pokemon) {
      let pokemonList = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      listItem.classList.add('pokemon-list-items');
      let button = document.createElement('button');
      button.innerText = pokemon.name;
      button.classList.add('pokemon-button');
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem
    };
  })();

  // a forEach function that'll replace a for loop
  pokemonRepository.getAll().forEach(function(pokemon){
    pokemonRepository.addListItem(pokemon);
  });
