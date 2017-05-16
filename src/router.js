import React from 'react';
import { Router } from 'dva/router';
import App from './routes/App';


const cached = {};
function registerModel(app, model) {
  if (!cached[model.namespace]) {
    app.model(model);
    cached[model.namespace] = 1;
  }
}

function RouterConfig({ history, app }) {
  const routes = [
    {
      path: '/',
      component: App,
      getIndexRoute(nextState, cb) {
        require.ensure([], (require) => {
          

          cb(null, {component: require('./routes/Index')});
        });
      },
      childRoutes: [
        {
          path: 'orders',
          name: 'orders',
          getComponent(nextState, cb) {
            require.ensure([], require => {
              registerModel(app, require('./models/orders'));
              cb(null, require('./routes/Orders'));
            });
          },
        },
      ],
    },
    
  ];

  return <Router history={history} routes={routes} />;
}

export default RouterConfig;