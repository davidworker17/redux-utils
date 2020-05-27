import createActionState from './createActionState';
import flow from 'lodash/fp/flow';
import mapKeys from 'lodash/fp/mapKeys';
import mapValues from 'lodash/fp/mapValues';

export default function createRoutine(name) {
  const states = ['TRIGGER', 'REQUEST', 'SUCCESS', 'FAILURE', 'FULFILL'];

  return flow(
    mapKeys(x=>states[x]),
    mapValues(state=>createActionState(name, state)),
  )(states);
}
