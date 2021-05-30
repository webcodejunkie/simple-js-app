  // implementation of IIFE to avoid global scope complications
  let pokemonRepository = (function() {
    // an array for our data
    let pokemonList = [];
    // attaching an api with a limit of 150 objects to a variable
    let apiUrl= 'https://pokeapi.co/api/v2/pokemon/?limit=150';

    // function to load our apiUrl
    function loadList() {
      return fetch(apiUrl).then(function (responce) {
        return responce.json();
      }).then(function (json) {
        json.results.forEach(function (item) {
          let pokemon = {
            name: item.name,
            detailsUrl: item.url,
            types: item.types
          };
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
        item.types = [];
        for (i = 0; i < details.types.length; i++) {
          item.types.push(details.types[i].type.name);
        }
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

        // Create elements and display, name, imgs, and other information through a modal
        let pokemonDialog = document.querySelector('#pokemon-modal-container');
        let pokemonInfo = document.createElement('div');
        pokemonInfo.classList.add('pokemon-modal');

        // Create a dynamic title that'll display each pokemon name
        let pokemonName = document.createElement('h1');
        pokemonName.innerText = (pokemon.name);

        // Create an img for each pokemon
        let pokemonImage = document.createElement('img');
        pokemonImage.classList.add('many-pokemon-images');
        pokemonImage.src = (pokemon.imageUrl);

        // Create the height and have it displayed in the modal
        let pokemonHeight = document.createElement('p');
        pokemonHeight.innerText = 'Height: ' + (pokemon.height);

        // Create an element to display pokemon types
        let pokemonType = document.createElement('p');
        pokemonType.innerText = (pokemon.types);


        // Create a button within the modal that can close the modal upon using the click event
        let closeButtonElement = document.createElement('button');
        closeButtonElement.classList.add('info-button-close');
        closeButtonElement.innerText = 'Close';
        closeButtonElement.addEventListener('click', hideDialog);

        // This will add click events that will close down the modal from using the ESC key, or clicking outside the modal
        window.addEventListener('keydown', (e) => {
          let pokemonDialog = document.querySelector('#pokemon-modal-container');
          if (e.key === 'Escape' && pokemonDialog.classList.contains('is-visible')) {
            hideDialog();
          }
        });

        pokemonDialog.addEventListener('click', (e) => {
          let target = e.target
          if (target === pokemonDialog) {
            hideDialog();
          }
        });

        // append all the created elements to the modal
        pokemonInfo.appendChild(pokemonName);
        pokemonInfo.appendChild(pokemonImage);
        pokemonInfo.appendChild(pokemonHeight);
        pokemonInfo.appendChild(pokemonType);
        pokemonInfo.appendChild(closeButtonElement);
        pokemonDialog.appendChild(pokemonInfo);

        // Apply a class that'll render the modal visible
        pokemonDialog.classList.add('is-visible');
      });
    }

    // function to close the dialog overlay
    function hideDialog() {
      let pokemonDialog = document.querySelector('#pokemon-modal-container');
      pokemonDialog.classList.remove('is-visible');
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
