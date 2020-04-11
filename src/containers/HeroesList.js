import { connect } from 'react-redux';
import { addHero, changeFilter } from '../actions/index';
import HeroesList from '../components/HeroesList';

const mapStateToProps = state => ({ heroes: state.heroes, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  addNewHero: hero => {
    dispatch(addHero(hero));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
