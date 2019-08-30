import React from 'react';
import { Grid, Row, Col } from 'react-styled-flexboxgrid';

function Loading({ loading }) {
  return loading ? (
    <Grid>
      <Row center="xs">
        <Col xs={12}>Loading...</Col>
      </Row>
    </Grid>
  ) : null;
}

export default Loading;
