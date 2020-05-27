import { initialState, onSetPageName, onToggleSidebarMenu } from '../reducer';

describe('initialState', () => {
  it('should have properties in initialState', () => {
    expect(initialState).toEqual({
      pageName: expect.any(String),
      isSidebarOpened: expect.any(Boolean),
    });
  });
});

describe('onSetPageName', () => {
  it('should set pageName property on state', () => {
    const state = { pageName: 'somehting', test: 1 };
    const payload = 'newTitle';

    expect(onSetPageName(state, { payload })).toEqual({
      pageName: payload,
      test: 1,
    });
  });
});

describe('onToggleSidebarMenu', () => {
  it('should set set isSidebarOpened to false when it is true', () => {
    const state = { isSidebarOpened: true, test: 1 };

    expect(onToggleSidebarMenu(state)).toEqual({
      isSidebarOpened: false,
      test: 1,
    });
  });

  it('should set set isSidebarOpened to true when it is false', () => {
    const state = { isSidebarOpened: false, test: 1 };

    expect(onToggleSidebarMenu(state)).toEqual({
      isSidebarOpened: true,
      test: 1,
    });
  });
});
