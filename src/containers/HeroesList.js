import { connect } from 'react-redux';
import { changeFilter } from '../actions/index';
import HeroesList from '../components/HeroesList';

const mapStateToProps = state => ({ heroes: state.heroes, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  chngFilter: filter => {
    dispatch(changeFilter(filter));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(HeroesList);
