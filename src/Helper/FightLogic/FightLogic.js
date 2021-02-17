import React, { useState } from 'react';

const pokemon1 = {
  HP: 45,
  Attack: 49,
  Defense: 49,
  SpAttack: 65,
  SpDefense: 65,
  Speed: 45
};
const pokemon2 = {
  HP: 45,
  Attack: 60,
  Defense: 69,
  SpAttack: 85,
  SpDefense: 85,
  Speed: 65
};

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
