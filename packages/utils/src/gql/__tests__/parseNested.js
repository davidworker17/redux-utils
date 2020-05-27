import parseNested from '../parseNested';
import * as arrayToNestedStringObject from '../arrayToNestedStringObject';

arrayToNestedStringObject.default = jest.fn();

describe('parseNested', () => {
  beforeEach(arrayToNestedStringObject.default.mockReset);

  it('should call arrayToNestedStringObject with input splited by "." (dot sign)', () => {
    const item = 'item.nested.something';
    const mockedArrayToNestedStringObject = 'mockedArray';

    arrayToNestedStringObject.default.mockReturnValue(
      mockedArrayToNestedStringObject,
    );

    const result = parseNested(item);

    expect(arrayToNestedStringObject.default).toHaveBeenCalledWith([
      'item',
      'nested',
      'something',
    ]);
  });

  it('should return arrayToNestedStringObject result', () => {
    const mockedArrayToNestedStringObject = 'mockedArray';

    arrayToNestedStringObject.default.mockReturnValue(
      mockedArrayToNestedStringObject,
    );

    const result = parseNested();

    expect(result).toEqual(mockedArrayToNestedStringObject);
  });
});
