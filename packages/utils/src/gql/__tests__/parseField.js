import parseField from '../parseField';
import * as parseNested from '../parseNested';

parseNested.default = jest.fn();

describe('parseField', () => {
  beforeEach(parseNested.default.mockReset);


  it('should return passed data if it does not contain "." (dot sign)', () => {
    const item = 'item';

    const result = parseField(item);

    expect(result).toEqual(item);
  });

  it('should not call parseNested if input does not contain "." (dot sign)', () => {
    const item = 'item';

    const result = parseField(item);

    expect(parseNested.default).not.toHaveBeenCalled();
  });

  it('should call parseNested with passed input if it contains "." (dot sign)', () => {
    const item = 'item.nested.something';

     parseField(item);

    expect(parseNested.default).toHaveBeenCalledWith(item);
  });

  it('should return parseNested result if input contains "." (dot sign)', () => {
    const item = 'item.nested.something';
    const mockedNested = 'mockedNested'

    parseNested.default.mockReturnValue(mockedNested);

    const result = parseField(item);

    expect(result).toEqual(mockedNested);
  });
});
