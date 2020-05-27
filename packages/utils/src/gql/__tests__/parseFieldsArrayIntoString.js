import parseFieldsArrayIntoString from '../parseFieldsArrayIntoString';
import * as parseField from '../parseField';

parseField.default = jest.fn();

describe('parseFieldsArrayIntoString', () => {
  beforeEach(parseField.default.mockReset);

  it('should return empty stirng for empty array', () => {
    const mockedparseField = 'mockedArray';

    parseField.default.mockReturnValue(mockedparseField);

    const result = parseFieldsArrayIntoString();

    expect(result).toEqual('');
  });

  it('should return fields parsed by parseField method separated by commas', () => {
    const fields = ['field1', 'field2'];
    const mockedField = 'mockedField';

    parseField.default.mockReturnValue(mockedField);

    const result = parseFieldsArrayIntoString(fields);

    expect(result).toEqual('mockedField,mockedField');
  });
});
