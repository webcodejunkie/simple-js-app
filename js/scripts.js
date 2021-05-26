  // implementation of IIFE to avoid global scope complications
  let pokemonRepository = (function() {
    // an array for our data
    let pokemonList = [];
    // attaching an api with a limit of 150 objects to a variable
    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // simple function to display a loading console.log when fetching api
    function showLoadingMessage() {
      console.log('Loading Pokemon..')
    }

    // function to load our apiUrl
    function loadList() {
      return fetch(apiUrl).then(function (responce) {
        return responce.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url
          };
          showLoadingMessage();
          add(pokemon);
        });
      }).catch(function (e) {
        console.error(e);
      })
    }

    // function to load the details of the api objects
    function loadDetails(item) {
      let url = item.detailsUrl;
      return fetch(url).then(function (response) {
        return response.json();
      }).then(function (details) {
        // adding the details to the items
        item.imageUrl = details.sprites.front_default;
        item.height = details.height;
        item.types = details.types;
      }).catch(function (e) {
        console.error(e);
      });
    }

    // function to add new Pokemon's to the pokemonList array & also check to make sure it adds an object rejecting all other types of
    function add(pokemon) {
      if (
        typeof (pokemon) === 'object') {
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

    // function to log the Pokemon's information
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        console.log(pokemon);
      });
    }

    // function to creating elements with a eventlistener to console.log the pokemon's information
    function addListItem(pokemon) {
      let pokemonList = document.querySelector('.pokemon-list');
      let listItem = document.createElement('li');
      listItem.classList.add('pokemon-list-items');
      let button = document.createElement('button');
      button.addEventListener('click', function (event) {
        showDetails(pokemon);
      });
      button.innerText = pokemon.name;
      button.classList.add('pokemon-button');
      listItem.appendChild(button);
      pokemonList.appendChild(listItem);
    }

    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadList: loadList,
      loadDetails: loadDetails
    };
  })();

  // data being loaded from function loadList fetching the pokemon api
  pokemonRepository.loadList().then(function () {
    // a forEach function that'll iterate over pokemonList
    pokemonRepository.getAll().forEach(function(pokemon){
      pokemonRepository.addListItem(pokemon);
    });
  });
