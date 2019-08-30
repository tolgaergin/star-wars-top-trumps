import React from 'react';

import {
  Container,
  Name,
  Image,
  Features,
  Feature,
  FeatureTitle,
  FeatureValue,
  Properties,
  Property,
  PropertyTitle,
  PropertyValue,
  Winner,
  Player
} from './Card.style';

function Starship({ data, isWinner, index }) {
  return (
    <>
      <Player>Player {index + 1}</Player>
      <Container>
        <Name isStarship>{data.name}</Name>
        <Image>image</Image>
        <Features>
          <Feature>
            <FeatureTitle>Crew</FeatureTitle>
            <FeatureValue>
              {data.crew === 0 ? 'Unknown' : data.crew}
            </FeatureValue>
          </Feature>
          <Feature>
            <FeatureTitle>Length</FeatureTitle>
            <FeatureValue>{data.length}</FeatureValue>
          </Feature>
          <Feature>
            <FeatureTitle>Passengers</FeatureTitle>
            <FeatureValue>{data.passengers}</FeatureValue>
          </Feature>
        </Features>

        <Properties>
          <Property>
            <PropertyTitle>Model</PropertyTitle>
            <PropertyValue>{data.model}</PropertyValue>
          </Property>
          <Property>
            <PropertyTitle>Starship class</PropertyTitle>
            <PropertyValue>{data.starship_class}</PropertyValue>
          </Property>
          <Property>
            <PropertyTitle>Consumables</PropertyTitle>
            <PropertyValue>{data.consumables}</PropertyValue>
          </Property>
        </Properties>
        {isWinner && <Winner>Winner</Winner>}
      </Container>
    </>
  );
}

export default Starship;
