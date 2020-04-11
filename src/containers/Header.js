import { connect } from 'react-redux';
import { chngRender } from '../actions/index';
import Header from '../components/Header';

const mapStateToProps = state => ({ filter: state.filter });

const mapDispatchToProps = dispatch => ({
  changeRender: value => {
    dispatch(chngRender(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
