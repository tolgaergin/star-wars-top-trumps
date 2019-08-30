import { connect } from 'react-redux';
import { playGame } from '../actions';

import Form from '../components/Form';

const mapStateToProps = state => ({
  loading: state.loading
});

const mapDispatchToProps = {
  playGame
};

const FormContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Form);

export default FormContainer;
