import React from 'react';
import {
  Box,
  Image,
  Stack,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
} from '@chakra-ui/core';
import allCards from '../data/character-ability-cards.json';
import CharacterIcon from './CharacterIcon.js';

const cards = allCards.filter(card => !!card.character);

const groupedCards = cards.reduce((result, card) => {
  if (!card.character) return result;

  if (result[card.character]) {
    result[card.character].push(card);
  } else {
    result[card.character] = [card];
  }

  return result;
}, {});

function Card({ card }) {
  return (
    <Box maxW={200} p={5} shadow="md" borderWidth="1px">
      <Image src={`/${card.image}`} />
    </Box>
  );
}

/* <Stack spacing={8} direction="horizontal" flexWrap="wrap">
  {cards.map(card => (
    <Card key={card.points} card={card} />
  ))}
</Stack> */

function CardList() {
  return (
    <Tabs>
      <TabList>
        {Object.keys(groupedCards).map(key => (
          <Tab key={key}>
            <CharacterIcon character={key} />
          </Tab>
        ))}
      </TabList>

      <TabPanels>
        {Object.values(groupedCards).map(characterCards => (
          <TabPanel>
            <Stack
              spacing={8}
              direction="horizontal"
              flexWrap="wrap"
              justify="space-around"
            >
              {characterCards.map(card => (
                <Card key={card.points} card={card} />
              ))}
            </Stack>
          </TabPanel>
        ))}
      </TabPanels>
    </Tabs>
  );
}

export default CardList;
