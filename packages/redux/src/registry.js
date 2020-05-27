import { store } from './store';

const Registry = {};

function add(module) {
  if(!store) throw(new Error("Store is not initialized",))

  if (!module || !module.name || Registry[module.name]) {
    return
  }

  Registry[module.name] = module;

  if(module.reducer) store.attachReducers({ [module.name]: module.reducer});
  if(module.sagas) store.runSagas({ [module.name]: module.sagas});
}

function remove(name) {
  if(!store) throw(new Error("Store is not initialized"))

  const module = Registry[name];

  if (!name || !module) return

  if(module.reducer) store.detachReducers([name]);
  if(module.sagas) store.cancelSagas([name]);

  delete Registry[name];
}

export default {
  add,
  remove,
}
