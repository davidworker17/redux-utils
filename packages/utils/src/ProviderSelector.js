import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import invariant from 'invariant';

export default class ProviderSelector extends Component {
  constructor(props, context) {
    super(props, context);

    invariant(
      context.store,
      'ProviderSelector must be used inside a Provider!',
    );
    this.store = this.mapStore(context.store, props.storeSelector);
  }

  mapStore = (store, storeSelector = () => {}) => ({
    ...store,
    getState() {
      return storeSelector(store.getState());
    },
  });

  render = () => <Provider store={this.store}>{this.props.children}</Provider>;
}

ProviderSelector.propTypes = {
  storeSelector: PropTypes.func.isRequired,
};

ProviderSelector.contextTypes = {
  store: PropTypes.shape({
    subscribe: PropTypes.func.isRequired,
    dispatch: PropTypes.func.isRequired,
    getState: PropTypes.func.isRequired,
  }),
};
