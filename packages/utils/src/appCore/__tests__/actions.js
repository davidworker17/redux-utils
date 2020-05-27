import { setPageName, toggleSidebarMenu } from '../actions';

describe('setPageName', () => {
  it('should have a method defined', () => {
    expect(setPageName).toBeDefined();
  });

  it('should return action object', () => {
    const payload = {
      test: 1,
    };

    expect(setPageName(payload)).toEqual({
      payload,
      type: expect.any(String),
    });
  });
});

describe('toggleSidebarMenu', () => {
  it('should have a method defined', () => {
    expect(toggleSidebarMenu).toBeDefined();
  });

  it('should return action object', () => {
    const payload = {
      test: 1,
    };

    expect(setPageName(payload)).toEqual({
      payload,
      type: expect.any(String),
    });
  });
});
