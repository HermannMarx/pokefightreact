import React, { useState } from 'react';

const pokemon1 = { speed: 100 };
const pokemon2 = { speed: 101 };

const FightLogic = {
  start: id => {
    console.log('FightLogic start');
  },
  run: (pokemon1, pokemon2) => {
    if (pokemon1.speed > pokemon2.speed) {
      console.log('player1runsawaysuccessful');
    }
  }
};

export default FightLogic;
