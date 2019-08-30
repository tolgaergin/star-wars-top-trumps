import { connect } from 'react-redux';
import Loading from '../components/Loading';

const mapStateToProps = state => ({ loading: state.loading });
const LoadingContainer = connect(
  mapStateToProps,
  null
)(Loading);

export default LoadingContainer;
