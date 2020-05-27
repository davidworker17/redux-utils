import React from 'react';
import { Provider } from 'react-redux';
import { BrowserRouter, withRouter, Switch } from 'react-router-dom';
import Notifications from '******/notification';
import provideRouteFactory from '../provideRouteFactory';
import { SubspaceProvider } from 'react-redux-subspace';
import * as fromApp from '../appCore/actions';

import MainLayout from './MainLayout';

const setPageName = ({ dispatch, title }) => dispatch(fromApp.setPageName(title));
const getParams = () => ({});
const Route = provideRouteFactory(getParams);

const ContentWithRouter = withRouter(props => (
  <MainLayout {...props}>
    <Switch>
      <Route
        path={props.path}
        title={props.name}
        onEnter={setPageName}
        component={routeProps => <props.Module {...routeProps} {...props.viewParams} />}
        storeSelector={state => state[props.name]}
      />
    </Switch>
  </MainLayout>
));

const App = ({ store, ...props }) => (
  <BrowserRouter>
    <Provider store={store}>
      <div>
        <SubspaceProvider mapState={state => state.notifications}>
          <Notifications />
        </SubspaceProvider>
        <ContentWithRouter {...props} />
      </div>
    </Provider>
  </BrowserRouter>
);

export default App;
