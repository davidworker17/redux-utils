import {connect} from 'react-redux';
import ProvideRoute from './ProvideRoute';
import get from 'lodash/get';
import {setPageName, setIDNameMap} from './appCore/actions';

const mergeProps = (stateProps, dispatchProps, ownProps) => {
  const { dispatch } = dispatchProps;
  const params = get(ownProps, 'computedMatch.params');

  return Object.assign({}, ownProps, {dispatch}, {params}, {
    passedPropsFromState: stateProps,
    passedPropsFromDispatch: dispatchProps,
  });
};

const defaultDispatchProps = {
  setPageName,
  setIDNameMap
};

export default (mapStateToProps=null, mapDispatchToProps={}) => {
  const dispatchProps = Object.assign({}, defaultDispatchProps, mapDispatchToProps);

  return connect(mapStateToProps, dispatchProps, mergeProps)(ProvideRoute);
};
