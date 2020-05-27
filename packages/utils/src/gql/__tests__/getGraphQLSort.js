import getGraphQLSort from '../getGraphQLSort';
import * as parseSortingDir from '../parseSortingDir';
import * as arrayToNestedSortingObject from '../arrayToNestedSortingObject';

parseSortingDir.default = jest.fn();
arrayToNestedSortingObject.default = jest.fn();

describe('getGraphQLSort', () => {
  beforeEach(parseSortingDir.default.mockReset);
  beforeEach(arrayToNestedSortingObject.default.mockReset);

  it('should return an empty string for empty sorting', () => {
    const sorting = {};

    const result = getGraphQLSort(sorting);

    expect(result).toEqual('');
  });

  it('should return arrayToNestedSortingObject for non empty sorting', () => {
    const sorting = {
      dir: 'asc',
    };

    const mockedSortingDir = 'mockedSortingDir';
    const mockedNestedSortingObject = 'mockedNestedSortingObject';

    arrayToNestedSortingObject.default.mockReturnValue(
      mockedNestedSortingObject,
    );
    parseSortingDir.default.mockReturnValue(mockedSortingDir);

    const result = getGraphQLSort(sorting);

    expect(result).toEqual(mockedNestedSortingObject);
  });

  it('should call arrayToNestedSortingObject with proper params for single field', () => {
    const sorting = {
      dir: 'asc',
      field: 'field',
    };

    const mockedSortingDir = 'mockedSortingDir';
    const mockedNestedSortingObject = 'mockedNestedSortingObject';

    arrayToNestedSortingObject.default.mockReturnValue(
      mockedNestedSortingObject,
    );
    parseSortingDir.default.mockReturnValue(mockedSortingDir);

    const result = getGraphQLSort(sorting);

    expect(arrayToNestedSortingObject.default).toHaveBeenCalledWith(
      ['field'],
      mockedSortingDir,
    );
  });

  it('should call arrayToNestedSortingObject with proper params for multiple fields', () => {
    const sorting = {
      dir: 'asc',
      field: 'field1.field2.field3',
    };

    const mockedSortingDir = 'mockedSortingDir';
    const mockedNestedSortingObject = 'mockedNestedSortingObject';

    arrayToNestedSortingObject.default.mockReturnValue(
      mockedNestedSortingObject,
    );
    parseSortingDir.default.mockReturnValue(mockedSortingDir);

    const result = getGraphQLSort(sorting);

    expect(arrayToNestedSortingObject.default).toHaveBeenCalledWith(
      ['field1', 'field2', 'field3'],
      mockedSortingDir,
    );
  });
});
