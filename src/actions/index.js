export const getPeople = () => ({
  type: 'GET_PEOPLE'
});

export const getStarships = () => ({
  type: 'GET_STARSHIPS'
});

export const playGame = settings => ({
  type: 'PLAY_GAME',
  settings
});
