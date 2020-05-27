import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { MainLayout } from '******/component-catalog';
import * as fromApp from '../appCore/selectors';

const mainLayoutProps = {
  userName: 'User Name',
  headerMenuItems: [
    {
      label: '{{moduleName}}',
      link: '/',
    },
  ],
  sideMenuItems: [
    {
      label: '{{moduleName}}',
      link: '/',
      icon: 'overview',
    },
  ],
};

const MainLayoutContainer = connect(state => ({
  pageName: fromApp.getPageName(state.app),
  ...mainLayoutProps,
}))(MainLayout);

export default withRouter(MainLayoutContainer);
