import { connect } from 'react-redux';
import { addHero, chngRender } from '../actions/index';
import App from '../components/App';

const mapStateToProps = state => ({
  render: state.render,
});

const mapDispatchToProps = dispatch => ({
  addNewHero: hero => {
    dispatch(addHero(hero));
  },
  changeRender: value => {
    dispatch(chngRender(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
