# Architecture

## Table of Contents

- [Views](#views)
- [Components](#components)

## Views

Stored in src/views

### Main page

**State Variables**

  - allPokemon [] (API request)
  - pokemonFighters []

**Views**

  - _Header_
  - _PokemonFight_: Route "/".

    - prop: pokemonFighters []

    - 2x Component _PokemonFighter_
    
    Shown when:

      - 1 Pokemon selected?
      - 2 Pokemon selected?
      - click on button Fight? If so, show button only if 2 pokemon selected    

  - _PokemonFightResult_: shown when fight ends.
        - Text with the winner and info from leaderboard
        - Button to close fight

  - _AllPokemon_: Route "/" and "/pokemon":
    - prop allPokemon
    - Component _PokemonList_

  - _PokemonDetails_ (Pokemon pop-up): Route "pokemon/{id}": only Pokemon with id = _id_
    - API request with param _id_ => pokemon => Component _PokemonDetailed_

## Components

Stored in src/components

**Pokemon**

  - _PokemonList_ (main page):

    - prop allPokemon -> map
    - _Pokemon_ (main page)
      - prop pokemon

  - _PokemonDetailed_ (Pokemon pop-up)
    - prop pokemon (from API request in _PokemonDetails_)
    - breadcrum with name, type & base (API request for each)

**Pokemon fight**

  - _PokemonFighter_:

    - prop: pokemon from _PokemonFight_.pokemonFighters

    contains:

    - picture,
    - base statistics (HP, attack, defense, special attack (?), special defense (?), speed (?))
    - buttons: attack, defend, run (?)

**Filters (nice to have)**

  - _PokemonTextSearch_ (search field)
  - _PokemonTypeSearch_ (search field with mutiselect)
