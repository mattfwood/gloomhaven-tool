const { renameSync, readdirSync, readFileSync, writeFileSync } = require('fs');
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
};

const updatedCards = cards.map(card => {
  const code = card.image.split('/')[1];

  if (Object.keys(characterCodes).includes(code)) {
    card.character = characterCodes[code];
  }

  return card;
});

writeFileSync(
  './data/character-ability-cards.json',
  JSON.stringify(updatedCards)
);
