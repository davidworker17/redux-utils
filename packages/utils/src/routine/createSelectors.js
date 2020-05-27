import mapValues from 'lodash/mapValues';
import get from 'lodash/get';

function createSelectors(initialState, path) {
  return mapValues(initialState, (value, key) => (
    state => get(state, `${path}.${key}`)
  ))
}

export default createSelectors;
