import { connect } from 'react-redux';
import { changeFilter, chngRender } from '../actions/index';
import TeamsList from '../components/TeamsList';

const mapStateToProps = state => ({ heroes: state.heroes, filter: state.filter });

const mapDispatchToProps = dispatch => ({
  chngFilter: filter => {
    dispatch(changeFilter(filter));
  },
  changeRender: value => {
    dispatch(chngRender(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(TeamsList);
