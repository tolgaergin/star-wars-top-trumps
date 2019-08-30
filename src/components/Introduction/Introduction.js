import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import { Container, Text } from './Introduction.style';

function Introduction() {
  return (
    <Grid>
      <Row center="xs">
        <Col xs={8}>
          <Container>
            <Text>
              We want you to have fun doing this test so we’ve chosen a subject
              matter that is a little unusual, but should be more fun that other
              tests you may have done.
            </Text>

            <Text>Using SWAPI: https://swapi.co/documentation</Text>
          </Container>
        </Col>
      </Row>
    </Grid>
  );
}

export default Introduction;
