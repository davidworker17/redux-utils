import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import Component from '../../components/Module';

const mapStateToProps = createStructuredSelector({
});

const mapDispatchToProps = {
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Component);
