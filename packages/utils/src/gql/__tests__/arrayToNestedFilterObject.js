import arrayToNestedFilterObject from '../arrayToNestedFilterObject';
import * as dependency from '../getFiterOperatorValueString';

dependency.default = jest.fn();

describe('arrayToNestedFilterObject', () => {
  beforeEach(dependency.default.mockReset);

  it('should return filterValue for empty array', () => {
    const arr = [];
    const filterValue = '';
    const mockedFiterOperatorValueString = 'mockedFiterOperatorValueString';

    dependency.default.mockReturnValue(mockedFiterOperatorValueString);

    const result = arrayToNestedFilterObject(arr, filterValue);

    expect(result).toEqual(mockedFiterOperatorValueString);
  });

  it('should return proper string one element array', () => {
    const arr = ['field1'];
    const filterValue = '';
    const mockedFiterOperatorValueString = 'mockedFiterOperatorValueString';

    dependency.default.mockReturnValue(mockedFiterOperatorValueString);

    const result = arrayToNestedFilterObject(arr, filterValue);

    expect(result).toEqual( `field1: { ${mockedFiterOperatorValueString} }`);
  });

  it('should return proper string for non-empty array', () => {
    const arr = ['field1', 'field2', 'field3'];
    const filterValue = '';
    const mockedFiterOperatorValueString = 'mockedFiterOperatorValueString';

    dependency.default.mockReturnValue(mockedFiterOperatorValueString);

    const result = arrayToNestedFilterObject(arr, filterValue);

    expect(result).toEqual( `field1: { field2: { field3: { ${mockedFiterOperatorValueString} } } }`);
  });
});
