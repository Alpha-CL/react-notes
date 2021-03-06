import React from 'react';
import {
  Router as DefaultRouter,
  Route,
  Switch,
  StaticRouter,
} from 'react-router-dom';
import dynamic from 'umi/dynamic';
import renderRoutes from 'umi/lib/renderRoutes';
import history from '@@/history';
import { routerRedux } from 'dva';

const Router = routerRedux.ConnectedRouter;

const routes = [
  {
    path: '/',
    component: require('../../layouts/index.js').default,
    routes: [
      {
        path: '/',
        exact: true,
        component: require('../index.js').default,
        Routes: [require('../../router/PrivateRouter').default],
        _title: '15-student_management_system-of-umijs',
        _title_default: '15-student_management_system-of-umijs',
      },
      {
        path: '/login',
        exact: true,
        component: require('../login/index.js').default,
        _title: '15-student_management_system-of-umijs',
        _title_default: '15-student_management_system-of-umijs',
      },
      {
        path: '/student/add',
        exact: true,
        component: require('../student/add/index.js').default,
        _title: '15-student_management_system-of-umijs',
        _title_default: '15-student_management_system-of-umijs',
      },
      {
        path: '/student',
        exact: true,
        component: require('../student/index.js').default,
        _title: '15-student_management_system-of-umijs',
        _title_default: '15-student_management_system-of-umijs',
      },
      {
        path: '/student/:id',
        exact: true,
        component: require('../student/$id/index.js').default,
        _title: '15-student_management_system-of-umijs',
        _title_default: '15-student_management_system-of-umijs',
      },
      {
        component: () =>
          React.createElement(
            require('/Users/lalpha/SynologyDrive/Drive/dlp/dlp-lrn/GitHub/Framework-library-note/03-react/case/15-student_management_system-of-umijs/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
              .default,
            { pagesPath: 'src/pages', hasRoutesInConfig: false },
          ),
        _title: '15-student_management_system-of-umijs',
        _title_default: '15-student_management_system-of-umijs',
      },
    ],
    _title: '15-student_management_system-of-umijs',
    _title_default: '15-student_management_system-of-umijs',
  },
  {
    component: () =>
      React.createElement(
        require('/Users/lalpha/SynologyDrive/Drive/dlp/dlp-lrn/GitHub/Framework-library-note/03-react/case/15-student_management_system-of-umijs/node_modules/umi-build-dev/lib/plugins/404/NotFound.js')
          .default,
        { pagesPath: 'src/pages', hasRoutesInConfig: false },
      ),
    _title: '15-student_management_system-of-umijs',
    _title_default: '15-student_management_system-of-umijs',
  },
];
window.g_routes = routes;
const plugins = require('umi/_runtimePlugin');
plugins.applyForEach('patchRoutes', { initialValue: routes });

export { routes };

export default class RouterWrapper extends React.Component {
  unListen() {}

  constructor(props) {
    super(props);

    // route change handler
    function routeChangeHandler(location, action) {
      plugins.applyForEach('onRouteChange', {
        initialValue: {
          routes,
          location,
          action,
        },
      });
    }
    this.unListen = history.listen(routeChangeHandler);
    // dva ??? history.listen ?????????????????????
    // ??????????????? dva ???????????????????????? onRouteChange ????????? dva ???????????????????????????????????????
    const isDva =
      history.listen
        .toString()
        .indexOf('callback(history.location, history.action)') > -1;
    if (!isDva) {
      routeChangeHandler(history.location);
    }
  }

  componentWillUnmount() {
    this.unListen();
  }

  render() {
    const props = this.props || {};
    return <Router history={history}>{renderRoutes(routes, props)}</Router>;
  }
}
