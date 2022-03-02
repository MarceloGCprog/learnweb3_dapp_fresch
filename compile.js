const path = require('path');
const fs = require('fs');
const solc = require('solc');

const path_arquivo = path.resolve(__dirname,"contract","Mood.sol");

const source = fs.readFileSync(path_arquivo,"utf8");

const input = {
  language: 'Solidity',
  sources: {
    'Mood.sol': {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      '*': {
        '*': ['*'],
      },
    },
  },
};

  module.exports = JSON.parse(solc.compile(JSON.stringify(input))).contracts[
    'Mood.sol'
  ].MoodDiary;

