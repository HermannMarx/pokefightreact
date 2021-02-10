# Architecture

## Table of Contents

- [Views](#views)
- [Components](#components)

## Views

Stored in src/views

**On main page:**

1. _Header_
2. _PokemonFight_: Route "/". Shown when Pokemon selected

- _PokemonFighter_: includes a property "side": "left", "right". Is the property really needed or is it enough with the position in the fight Array?

3. _PokemonFightResult_: shown when fight ends.

- Text with the winner and info from leaderboard
- Button to close fight

4. _AllPokemon_: Route "/" and "/pokemon":

- Component _PokemonList_

5. _PokemonDetails_: Route "pokemon/{id}": only Pokemon with id = _id_

## Components

Stored in src/components

**Pokemon**

- _PokemonList_ (main page)

  - _Pokemon_ (main page)

- _PokemonDetailed_ (Pokemon pop-up)

**Pokemon fight**

- _PokemonFighter_: contains
  - picture,
  - base statistics (HP, attack, defense, special attack (?), special defense (?), speed (?))
  - buttons: attack, defend, run (?)

**Filters (nice to have)**

- _PokemonTextSearch_ (search field)
- _PokemonTypeSearch_ (search field with mutiselect)
