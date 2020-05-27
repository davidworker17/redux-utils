import createActionState from '../createActionState';

describe('createActionState', () => {
  it('should return a function', () => {
    const action = 'action';
    const state = 'state';

    expect(createActionState(action, state)).toEqual(expect.any(Function));
  });

  it('should return a function with proper toString implementation', () => {
    const action = 'action1';
    const state = 'state2';

    expect(createActionState(action, state).toString()).toEqual(
      'action1/state2',
    );
  });
});
