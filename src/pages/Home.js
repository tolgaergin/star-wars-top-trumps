import React from 'react';

import LoadingContainer from '../containers/LoadingContainer';
import GameContainer from '../containers/GameContainer';
import FormContainer from '../containers/FormContainer';
import Introduction from '../components/Introduction/Introduction';

function Home() {
  return (
    <>
      <Introduction />
      <FormContainer />
      <LoadingContainer />
      <GameContainer />
    </>
  );
}

export default Home;
