# Pokefight - with React.js

## Table of Contents

- [Description](#description)
- [Organisation](#organisation)
- [Architecture](#architecture)
- [Routes](#routes)
- [Back-End](#back-end)
- [API-Endpoints](#api-endpoints)
- [Live](#live)
- [Programming](#programming)

## Description

This repository contains the front-end part of a Pokemon Fight application, created for a WBS Coding School assignment.

## Organisation

[Trello board](https://trello.com/b/Icz4WKYA/group4-pokefight)

## Architecture

In the specific doc [architecture.md](./doc/architecture.md) is the information about the overall structure, views and components.

## Routes

The app uses [react-router-dom](https://www.npmjs.com/package/react-router-dom) to set the different routes of the page, which contains the three following routes:

| Route                                                          | Description                                                                                                    |
| -------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| [/](https://poke-death-fight.netlify.app/)                     | Directs the user onto the landing page.                                                                        |
| [/pokemon](https://poke-death-fight.netlify.app/pokemon)       | Directs the user onto the main page with all the fetched pokemon data and possible user interaction            |
| [/pokemon/:id](https://poke-death-fight.netlify.app/pokemon/3) | Directs the user to the specificly chosen pokemon and displays the PokemonDetailed component with information. |

## Back-End

The back-end part of this project has got its own [GitHub reposetory](https://github.com/vibueno/wbs_group4_pokefight). It retrieves its data from a [MongoDB](https://www.mongodb.com/) database by using [mongoose.js](https://mongoosejs.com). The back-end app is deployed on [Heroku](https://wbsgroup4pokefight.herokuapp.com/pokemon).

## API-Endpoints

The app uses [Axios](https://www.npmjs.com/package/axios) requests to fetch data from the back-end part. Its endpoints and specificly fetched data are:

| HTTP Method | Endpoint                                                                                                       | Description                                                                                                                  |
| ----------- | -------------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| GET         | [/pokemon](https://wbsgroup4pokefight.herokuapp.com/pokemon)                                                   | Retrieves all pokemon                                                                                                        |
| GET         | [/pokemon/:id](https://wbsgroup4pokefight.herokuapp.com/pokemon/76)                                            | Retrieves pokemon with id 1                                                                                                  |
| GET         | [/pokemon/:id/:info](https://wbsgroup4pokefight.herokuapp.com/pokemon/76/name)                                 | Retrieves specific info (type, name or type) from pokemon with id 1                                                          |
| GET         | [/pokemon/fight/halloffame](https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/halloffame)                 | Retrieves top 10 pokemon from hall of fame                                                                                   |
| GET         | [/pokemon/fight/halloffame?limit=n](https://wbsgroup4pokefight.herokuapp.com/pokemon/fight/halloffame?limit=4) | Retrieves _n_ pokemon from hall of fame                                                                                      |
| POST        | /pokemon/fight/create                                                                                          | Saves a fight result. Request body must contain a JSON object with format: `{"pokemon1": id, "pokemon2": id, "winner:" id }` |

## Live

The front-end application is hosted on [Netlfiy](https://poke-death-fight.netlify.app).

## Programming

This project has been developed using [NodeJS](https://nodejs.org/en) and [React.js](https://reactjs.org). Some of our components have been programmed with [Material UI](https://material-ui.com). Its already predefined components made it possible to design the app more time efficient.

### Helpers

- [Prettier](https://prettier.io/): [install Prettier](https://prettier.io/docs/en/editors.html) for your code editor. Prettier can run 'on file save', so that you don't need to run it manually. Look for instructions on how to set it up in your code editor, if needed.
