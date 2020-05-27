import arrayToNestedSortingObject from '../arrayToNestedSortingObject';

describe('arrayToNestedSortingObject', () => {
  it('should return proper string for one element array', () => {
    const arr = ['field'];
    const sortingDir = 'asc';

    const result = arrayToNestedSortingObject(arr, sortingDir);

    expect(result).toEqual('field: asc');
  });

  it('should return proper string for two element array', () => {
    const arr = ['field1', 'field2'];
    const sortingDir = 'asc';

    const result = arrayToNestedSortingObject(arr, sortingDir);

    expect(result).toEqual('field1: { field2: asc }');
  });

  it('should return proper string for three element array', () => {
    const arr = ['field1', 'field2', 'field3'];
    const sortingDir = 'asc';

    const result = arrayToNestedSortingObject(arr, sortingDir);

    expect(result).toEqual('field1: { field2: { field3: asc } }');
  });
});
