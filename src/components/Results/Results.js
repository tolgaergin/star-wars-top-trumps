import React from 'react';
import { Grid } from 'react-styled-flexboxgrid';

import Result from './Result';

import { Title, Description } from './Results.style';

import { sortArrayByChild } from '../../helper';

function Results({ games }) {
  return games.length ? (
    <Grid>
      {games.map((game, j) => {
        const newArray = [...game.opponents];
        const winnerObj =
          game.type === 'people'
            ? sortArrayByChild(newArray, 'mass')
            : sortArrayByChild(newArray, 'crew');

        return <Result key={j} game={game} winnerObj={winnerObj} />;
      })}
    </Grid>
  ) : (
    <Grid>
      <Title>Results</Title>
      <Description>You haven't played a game before</Description>
    </Grid>
  );
}

export default Results;
