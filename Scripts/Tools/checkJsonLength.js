const fs = require("fs");

const jsonToRead = require("../../Networks/Goerli/GoerliPlayersBoard.json");

const returnLength = (json) => {
  return Object.keys(json).length;
};

console.log(returnLength(jsonToRead));
