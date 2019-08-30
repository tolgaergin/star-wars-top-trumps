import React from 'react';
import { Grid, Col, Row } from 'react-styled-flexboxgrid';

import { useForm } from '../../hooks/useForm';

import {
  Container,
  FormItems,
  FormItem,
  FormLabel,
  Button
} from './Form.style';

function Form({ loading, playGame }) {
  const [values, handleChange] = useForm({ players: 2, types: 'people' });

  return (
    <Grid>
      <Container isLoading={loading}>
        <Row center="xs">
          <Col xs={10}>
            <FormItems>
              <FormItem>
                <FormLabel>Choose Players</FormLabel>
                <select
                  name="players"
                  onChange={handleChange}
                  value={values.players}
                >
                  <option value={2}>2 players</option>
                  <option value={3}>3 players</option>
                  <option value={4}>4 players</option>
                  <option value={5}>5 players</option>
                </select>
              </FormItem>
              <FormItem>
                <FormLabel>Choose Types</FormLabel>

                <select
                  name="types"
                  onChange={handleChange}
                  value={values.types}
                >
                  <option value="people">People</option>
                  <option value="starships">Starships</option>
                </select>
              </FormItem>
              <FormItem>
                <Button onClick={() => playGame(values)}>Play Game</Button>
              </FormItem>
            </FormItems>
          </Col>
        </Row>
      </Container>
    </Grid>
  );
}

export default Form;
