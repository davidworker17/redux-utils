import getGraphQLFilter from '../getGraphQLFilter';
import * as arrayToNestedFilterObject from '../arrayToNestedFilterObject';

arrayToNestedFilterObject.default = jest.fn();

describe('getGraphQLFilter', () => {
  beforeEach(arrayToNestedFilterObject.default.mockReset);

  it('should return an empty string for empty filtering', () => {
    const filtering = {};

    const mockedNestedFilterObject = 'mockedNestedFilterObject';

    arrayToNestedFilterObject.default.mockReturnValue(mockedNestedFilterObject);

    const result = getGraphQLFilter(filtering);

    expect(result).toEqual('');
  });

  it('should return a proper string for multiple filterings', () => {
    const filtering = {
      'field1.field2.field3': 'value',
      'field3.field4': 'value',
    };

    const mockedNestedFilterObject = 'mockedNestedFilterObject';

    arrayToNestedFilterObject.default.mockReturnValue(mockedNestedFilterObject);

    const result = getGraphQLFilter(filtering);

    expect(result).toEqual(
      `${mockedNestedFilterObject} ${mockedNestedFilterObject} `,
    );
  });

  it('should call arrayToNestedFilterObject with proper params', () => {
    const filtering = {
      'field1.field2.field3': 'value',
      'field4.field5': 'anotherValue',
    };

    const mockedNestedFilterObject = 'mockedNestedFilterObject';

    arrayToNestedFilterObject.default.mockReturnValue(mockedNestedFilterObject);

    const result = getGraphQLFilter(filtering);

    expect(arrayToNestedFilterObject.default).toHaveBeenCalledWith(
      ['field1', 'field2', 'field3'],
      'value',
    );
    expect(arrayToNestedFilterObject.default).toHaveBeenCalledWith(
      ['field4', 'field5'],
      'anotherValue',
    );
  });
});
