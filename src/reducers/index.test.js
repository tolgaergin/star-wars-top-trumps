import reducer from './index';

const initialState = {
  loading: false,
  game: [],
  people: {
    currentPage: 0,
    hasNext: true,
    data: []
  },
  starships: {
    currentPage: 0,
    hasNext: true,
    data: []
  }
};

test(`should return the initial state`, () => {
  expect(reducer(undefined, {})).toEqual(initialState);
});

test(`should handle GET_PEOPLE`, () => {
  expect(reducer({}, { type: 'GET_PEOPLE' })).toEqual({ loading: true });
});

test(`should handle PEOPLE_RECEIVED`, () => {
  const payload = {
    currentPage: 1,
    hasNext: true,
    data: [
      {
        name: 'Luke Skywalker',
        height: '172',
        mass: '77',
        hair_color: 'blond',
        skin_color: 'fair',
        eye_color: 'blue',
        birth_year: '19BBY',
        gender: 'male',
        homeworld: 'https://swapi.co/api/planets/1/',
        films: [
          'https://swapi.co/api/films/2/',
          'https://swapi.co/api/films/6/',
          'https://swapi.co/api/films/3/',
          'https://swapi.co/api/films/1/',
          'https://swapi.co/api/films/7/'
        ],
        species: ['https://swapi.co/api/species/1/'],
        vehicles: [
          'https://swapi.co/api/vehicles/14/',
          'https://swapi.co/api/vehicles/30/'
        ],
        starships: [
          'https://swapi.co/api/starships/12/',
          'https://swapi.co/api/starships/22/'
        ],
        created: '2014-12-09T13:50:51.644000Z',
        edited: '2014-12-20T21:17:56.891000Z',
        url: 'https://swapi.co/api/people/1/'
      }
    ]
  };

  expect(reducer(initialState, { type: 'PEOPLE_RECEIVED', payload })).toEqual({
    loading: false,
    game: [],
    people: payload,
    starships: {
      currentPage: 0,
      hasNext: true,
      data: []
    }
  });
});
