import arrayToNestedStringObject from '../arrayToNestedStringObject';

describe('arrayToNestedStringObject', () => {
  it('should return first element of passed array for one element array', () => {
    const arr = ['field'];

    const result = arrayToNestedStringObject(arr);

    expect(result).toEqual(arr[0]);
  });

  it('should return a proper string for multi element array', () => {
    const arr = ['field1', 'field2', 'field3'];

    const result = arrayToNestedStringObject(arr);

    expect(result).toEqual('field1 { field2 { field3 } }');
  });
});
