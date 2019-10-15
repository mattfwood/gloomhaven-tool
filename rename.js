const { renameSync, readdirSync, readFileSync } = require('fs');
const cards = require('./data/character-ability-cards.json');

// const files = readdirSync('./data');

// console.log(files);

// files.forEach(file => {
//   const filePath = `./data/${file}`
//   renameSync(filePath, filePath.replace('.js', '.json'))
// })

const characterCodes = {
  CH: 'cragheart',
  TI: 'tinkerer',
  SW: 'spellweaver',
  MT: 'mindthief',
  SC: 'scoundrel',
  BR: 'brute',
}



console.log(cards);