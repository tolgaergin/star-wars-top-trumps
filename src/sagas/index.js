import { select, put, takeLatest, all } from 'redux-saga/effects';
import { randomChildren } from '../helper';

const apiUrl = `https://swapi.co/api`;

function* fetchPeople() {
  const state = yield select();

  if (state.people.hasNext) {
    let json = yield fetch(
      `${apiUrl}/people/?page=${state.people.currentPage + 1}`
    ).then(response => response.json());

    json.results.forEach(j => {
      j.mass = parseFloat(j.mass.replace(',', ''));
      if (!j.mass) {
        j.mass = 0;
      }
    });

    const payload = {
      currentPage: state.people.currentPage + 1,
      hasNext: json.next ? true : false,
      data: json.results
    };

    yield put({ type: 'PEOPLE_RECEIVED', payload });
  } else {
    yield put({ type: 'PEOPLE_FULLY_RECEIVED' });
  }
}

function* fetchStarships() {
  const state = yield select();

  if (state.starships.hasNext) {
    let json = yield fetch(
      `${apiUrl}/starships/?page=${state.starships.currentPage + 1}`
    ).then(response => response.json());

    json.results.forEach(j => {
      j.crew = parseFloat(j.crew.replace(',', ''));
      if (!j.crew) {
        j.crew = 0;
      }
    });

    const payload = {
      currentPage: state.starships.currentPage + 1,
      hasNext: json.next ? true : false,
      data: json.results
    };

    yield put({ type: 'STARSHIPS_RECEIVED', payload });
  } else {
    yield put({ type: 'STARSHIPS_FULLY_RECEIVED' });
  }
}

function* playGame(props) {
  const players = props.settings.players;
  let payload;

  if (props.settings.types === 'people') {
    yield fetchPeople();
    const state = yield select();

    const randomIds = randomChildren(
      state.people.data.length - 1,
      parseInt(players)
    );
    let randomPeople = [];
    randomIds.map(r => randomPeople.push(state.people.data[r]));

    payload = {
      date: new Date().toUTCString(),
      type: 'people',
      opponents: randomPeople
    };
  } else if (props.settings.types === 'starships') {
    yield fetchStarships();
    const state = yield select();

    const randomIds = randomChildren(
      state.starships.data.length - 1,
      parseInt(players)
    );
    let randomStarships = [];
    randomIds.map(r => randomStarships.push(state.starships.data[r]));

    payload = {
      date: new Date().toUTCString(),
      type: 'starships',
      opponents: randomStarships
    };
  }

  yield put({ type: 'GAME_PLAYED', payload });
}

function* actionWatcher() {
  yield takeLatest('GET_PEOPLE', fetchPeople);
  yield takeLatest('GET_STARSHIPS', fetchStarships);
  yield takeLatest('PLAY_GAME', playGame);
}

export default function* rootSaga() {
  yield all([actionWatcher()]);
}
