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
    // dva 中 history.listen 会初始执行一次
    // 这里排除掉 dva 的场景，可以避免 onRouteChange 在启用 dva 后的初始加载时被多执行一次
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
