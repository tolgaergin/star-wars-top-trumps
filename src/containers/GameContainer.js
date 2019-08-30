import { connect } from 'react-redux';
import Game from '../components/Game';

const mapStateToProps = state => ({
  game: state.game
});

const GameContainer = connect(
  mapStateToProps,
  null
)(Game);

export default GameContainer;
