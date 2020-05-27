import 'regenerator-runtime/runtime';

import { store, create as createStore, history } from './store';
import Registry from './registry';
import dynamicModule from './dynamicModule';
import createModule from './createModule';

export {
  store,
  history,
  createStore,
  Registry,
  dynamicModule,
  createModule,
};
