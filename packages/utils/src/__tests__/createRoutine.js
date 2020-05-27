import createRoutine from '../createRoutine';
import * as dependency from '../createActionState';

dependency.default = jest.fn();

describe('createRoutine', () => {
  beforeEach(dependency.default.mockReset);

  it('should call createActionState', () => {
    const name = 'somename';

    createRoutine(name);

    expect(dependency.default.mock.calls).toEqual([
      [name, 'TRIGGER'],
      [name, 'REQUEST'],
      [name, 'SUCCESS'],
      [name, 'FAILURE'],
      [name, 'FULFILL'],
    ]);
  });

  it('should call createActionState', () => {
    const name = 'somename';
    const mockReturnValue = 'someValue';
    dependency.default.mockReturnValue(mockReturnValue);

    const result = createRoutine(name);

    expect(result).toEqual({
      FAILURE: mockReturnValue,
      FULFILL: mockReturnValue,
      REQUEST: mockReturnValue,
      SUCCESS: mockReturnValue,
      TRIGGER: mockReturnValue,
    });
  });
});
