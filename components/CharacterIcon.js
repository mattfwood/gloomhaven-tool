import React from 'react';
import Cragheart from '../data/character-icons/cragheart.svg';
import Tinkerer from '../data/character-icons/tinkerer.svg';
import Spellweaver from '../data/character-icons/spellweaver.svg';
import Mindthief from '../data/character-icons/mindthief.svg';
import Scoundrel from '../data/character-icons/scoundrel.svg';
import Brute from '../data/character-icons/brute.svg';

const svgProps = {
  width: 20,
  height: 20,
};

const Icons = {
  cragheart: <Cragheart {...svgProps} />,
  tinkerer: <Tinkerer {...svgProps} />,
  spellweaver: <Spellweaver {...svgProps} />,
  mindthief: <Mindthief {...svgProps} />,
  scoundrel: <Scoundrel {...svgProps} />,
  brute: <Brute {...svgProps} />,
};

const CharacterIcon = ({ character }) => {
  if (!Object.keys(Icons).includes(character)) {
    console.warn(`Could not find character ${character}`);
    return null;
  }

  return Icons[character];
};

export default CharacterIcon;
