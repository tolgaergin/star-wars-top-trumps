import { connect } from 'react-redux';

import Results from '../components/Results';

const mapStateToProps = state => ({
  games: state.game
});

const ResultsContainer = connect(
  mapStateToProps,
  null
)(Results);

export default ResultsContainer;
