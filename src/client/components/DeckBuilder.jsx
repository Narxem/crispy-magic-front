import React from 'react';

import Main from './Main';
import BigPane from './Main/BigPane';
import SmallPane from './Main/SmallPane';

const DeckBuilder = function DeckBuidler() {
  return (
    <Main>
      <BigPane>
        // TODO Remove placeholder
        <h1>Résultats de recherche</h1>
      </BigPane>
      // TODO Remove placeholder
      <SmallPane>
        <h1>Colonne du deck</h1>
      </SmallPane>
    </Main>
  );
};

export default DeckBuilder;
