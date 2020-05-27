import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { SubspaceProvider } from 'react-redux-subspace';
import isEqual from 'lodash/isEqual';
import get from 'lodash/get';

export default class ProvideRoute extends Component {
  shouldComponentUpdate(nextProps) {
    return !isEqual(this.props, nextProps);
  }

  componentDidMount() {
    const setPageName = get(this, 'props.passedPropsFromDispatch.setPageName');
    if (setPageName && this.props.title) {
      setPageName(this.props.title);
    }
  }

  render() {
    const {
      storeSelector = () => ({}),
      title,
      dispatch,
      layout: LayoutComponent = ({children}) => children,
      component: BaseComponent,
      passedPropsFromState,
      passedPropsFromDispatch,
      params,
      ...rest
    } = this.props;
    
    const WrappedComponent = routeProps => (
      <LayoutComponent {...routeProps}>
        <SubspaceProvider mapState={storeSelector}>
          <BaseComponent {...passedPropsFromState} {...passedPropsFromDispatch} params={params} {...routeProps} />
        </SubspaceProvider>
      </LayoutComponent>
    );

    return <Route component={WrappedComponent} {...rest} />;
  }
}
