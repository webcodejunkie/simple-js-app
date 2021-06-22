  // implementation of IIFE to avoid global scope complications
  let pokemonRepository = (function() {

    // an array for our data
    let pokemonList = [];

    // declaring the variable for the search bar
    let pokemonSearch = document.querySelector('#searchPokemon');

    // attaching an api with a limit of 150 objects to a variable
    let apiUrlGenOne = 'https://pokeapi.co/api/v2/pokemon?offset=0&limit=151';
    let apiUrlGenTwo = 'https://pokeapi.co/api/v2/pokemon?offset=152&limit=251';
    let apiUrlGenThree = 'https://pokeapi.co/api/v2/pokemon?offset=252&limit=386';
    let apiUrlGenFour = 'https://pokeapi.co/api/v2/pokemon?offset=387&limit=493';
    let apiUrlGenFive = 'https://pokeapi.co/api/v2/pokemon?offset=494&limit=649';
    let apiUrlGenSix = 'https://pokeapi.co/api/v2/pokemon?offset=650&limit=721';
    let apiUrlGenSeven = 'https://pokeapi.co/api/v2/pokemon?offset=722&limit=809';
    let apiUrlGenEight = 'https://pokeapi.co/api/v2/pokemon?offset=810&limit=898';

    // functions to load 8 different api's
    function loadGenOne() {
      return fetch(apiUrlGenOne).then(function (responce) {
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

    function loadGenTwo() {
      return fetch(apiUrlGenTwo).then(function (responce) {
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

    function loadGenThree() {
      return fetch(apiUrlGenThree).then(function (responce) {
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

    function loadGenFour() {
      return fetch(apiUrlGenFour).then(function (responce) {
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

    function loadGenFive() {
      return fetch(apiUrlGenFive).then(function (responce) {
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

    function loadGenSix() {
      return fetch(apiUrlGenSix).then(function (responce) {
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

    function loadGenSeven() {
      return fetch(apiUrlGenSeven).then(function (responce) {
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

    function loadGenEight() {
      return fetch(apiUrlGenEight).then(function (responce) {
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

    // a search bar that takes user input to filter to the desired data
    pokemonSearch.addEventListener('input', function(){
      let listPokemon = document.querySelectorAll('.pokemon-list-items');
      let value = pokemonSearch.value.toUpperCase();

      listPokemon.forEach(function(pokemon){
        if(pokemon.innerText.toUpperCase().indexOf(value) > -1) {
          pokemon.style.display = '';
        } else {
          pokemon.style.display = 'none';
        }
      });
    });

    // clearing the array with every generations to prevent duplication
    function clearList() {
      pokemonList.length = 0;
    }

    // function to add new Pokemon's to the pokemonList array
    function add(pokemon) {
      pokemonList.push(pokemon);
    }

    // function being declared to return an array from pokemonList
    function getAll() {
      return pokemonList;
    }

    // function to log the Pokemon's information
    function showDetails(pokemon) {
      loadDetails(pokemon).then(function () {
        let modal = document.querySelector('.modal');
        let modalTitle = $('.modal-title');
        let modalBody = $('.modal-body');
        let closeButton = $('.close-this');

        // Create an img for each pokemon
        let pokemonImage = $('<img></img>');
        pokemonImage.addClass('modal-pokemon-images');
        pokemonImage.attr('src', pokemon.imageUrl);

        let pokemonHeight = $('<p></p>');
        pokemonHeight.text('Height: ' + pokemon.height);

        // Create inner info in the modal body
        let pokemonModalText = $('<p></p>');
        pokemonModalText.text('This Pokémons types are ' + pokemon.types + ' type.');

        pokemonModalText.appendTo(modalBody);
        pokemonHeight.appendTo(modalBody);
        pokemonImage.appendTo(modalBody);
        modalTitle.text(pokemon.name);

        // closing the modal on clicking the close options on the modal
        closeButton.on('click', function (){
          hideDialog();
        });

        // an event that'll close the modal on pressing escape
        window.addEventListener('keydown', (e) => {
          let modal = document.querySelector('.modal');
          if (e.key === 'Escape' && modal.classList.contains('is-visible')) {
            hideDialog();
          }
        });

        // closing the modal on clicking anywhere other then the modal itself
        modal.addEventListener('click', (e) => {
          let target = e.target
          if (target === modal) {
            hideDialog();
          }
        });

        modal.classList.add('is-visible');
      });
    }

    // function to close the dialog overlay
    function hideDialog() {
      let modalBody = $('.modal-body');
      let modal = $('.modal');
      modal.removeClass('is-visible');
      modalBody.empty();
    }

    // function to creating elements with a eventlistener to console.log the pokemon's information
    function addListItem(pokemon) {
      loadDetails(pokemon).then(function (){
        let pokemonList = document.querySelector('.pokemon-list');
        let listItem = document.createElement('li');
        listItem.classList.add('pokemon-list-items');
        listItem.classList.add('list-group-item');
        let button = document.createElement('div');
        button.addEventListener('click', function (event) {
          showDetails(pokemon);
        });
        button.classList.add('button-hover');
        button.innerText = pokemon.name;
        let pokemonImage = document.createElement('img');
        pokemonImage.classList.add('many-pokemon-images');
        pokemonImage.src = (pokemon.imageUrl);

        listItem.appendChild(button);
        pokemonList.appendChild(listItem);
        button.appendChild(pokemonImage);
      });

    }

    // returning functions to be used outside of the IIFE's scope
    return {
      add: add,
      getAll: getAll,
      addListItem: addListItem,
      loadGenOne: loadGenOne,
      loadGenTwo: loadGenTwo,
      loadGenThree: loadGenThree,
      loadGenFour: loadGenFour,
      loadGenFive: loadGenFive,
      loadGenSix: loadGenSix,
      loadGenSeven: loadGenSeven,
      loadGenEight: loadGenEight,
      loadDetails: loadDetails,
      clearList: clearList
    };
  })();

  // 8 functions that'll load 8 differents api's that'll display different pokemon's
  function valGenOne() {
    pokemonRepository.loadGenOne().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon){
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }

  function valGenTwo() {
    pokemonRepository.loadGenTwo().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }

  function valGenThree() {
    pokemonRepository.loadGenThree().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }

  function valGenFour() {
    pokemonRepository.loadGenFour().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }

  function valGenFive() {
    pokemonRepository.loadGenFive().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }

  function valGenSix() {
    pokemonRepository.loadGenSix().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }

  function valGenSeven() {
    pokemonRepository.loadGenSeven().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }

  function valGenEight() {
    pokemonRepository.loadGenEight().then(function (pokemon) {
      pokemonRepository.getAll().forEach(function(pokemon) {
        pokemonRepository.addListItem(pokemon);
      });
      pokemonRepository.clearList();
      $('.pokemon-list').empty();
    });
  }
