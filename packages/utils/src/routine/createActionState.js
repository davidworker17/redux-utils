import { createAction } from 'redux-actions';

export default function createActionState(action, state) {
    const name           = `${action}/${state}`;
    const actionState    = createAction(name);
    actionState.toString = () => name;
    return actionState;
};
