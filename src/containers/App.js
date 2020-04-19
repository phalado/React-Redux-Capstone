import { connect } from 'react-redux';
import { addHero, changeFilter } from '../actions/index';
import App from '../components/App';

const mapStateToProps = state => ({
  heroes: state.heroes,
  filter: state.filter,
  render: state.render,
});

const mapDispatchToProps = dispatch => ({
  addNewHero: hero => {
    dispatch(addHero(hero));
  },
  chngFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
