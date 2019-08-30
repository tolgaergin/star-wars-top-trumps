import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';
import Person from '../Cards/Person';
import Starship from '../Cards/Starship';

import {
  Container,
  Features,
  Feature,
  FeatureTitle,
  FeatureValue,
  Button,
  Opponents
} from './Results.style';

function Result({ game, winnerObj }) {
  const [isVisible, toggleVisibility] = useState(false);

  return (
    <Container>
      <Features>
        <Feature>
          <FeatureTitle>Winner</FeatureTitle>
          <FeatureValue>{winnerObj.name}</FeatureValue>
        </Feature>
        <Feature>
          <FeatureTitle>Date</FeatureTitle>
          <FeatureValue>{game.date.toString()}</FeatureValue>
        </Feature>
        <Feature>
          <FeatureTitle>Type</FeatureTitle>
          <FeatureValue>{game.type}</FeatureValue>
        </Feature>
        <Feature>
          <FeatureTitle>Between</FeatureTitle>
          <FeatureValue>{game.opponents.length} players</FeatureValue>
        </Feature>
        <Feature>
          <Button onClick={() => toggleVisibility(!isVisible)}>
            {isVisible ? 'Hide Opponents' : 'Show Opponents'}
          </Button>
        </Feature>
      </Features>
      <Opponents isVisible={isVisible}>
        <Row center="xs">
          {game.opponents.map((opponent, i) => (
            <Col xs={12} sm={4} key={i}>
              {game.type === 'people' ? (
                <Person
                  index={i}
                  data={opponent}
                  isWinner={winnerObj.url === opponent.url}
                />
              ) : (
                <Starship
                  index={i}
                  data={opponent}
                  isWinner={winnerObj.url === opponent.url}
                />
              )}
            </Col>
          ))}
        </Row>
      </Opponents>
    </Container>
  );
}

export default Result;
