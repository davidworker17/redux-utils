import getGridQueryPart from '../getGridQueryPart';
import * as getGraphQLSort from '../getGraphQLSort';
import * as getGraphQLLimit from '../getGraphQLLimit';
import * as getGraphQLFilter from '../getGraphQLFilter';
import * as parseFieldsArrayIntoString from '../parseFieldsArrayIntoString';

getGraphQLSort.default = jest.fn();
getGraphQLLimit.default = jest.fn();
getGraphQLFilter.default = jest.fn();
parseFieldsArrayIntoString.default = jest.fn();

describe('getGridQueryPart', () => {
  beforeEach(getGraphQLSort.default.mockReset);
  beforeEach(getGraphQLLimit.default.mockReset);
  beforeEach(getGraphQLFilter.default.mockReset);
  beforeEach(parseFieldsArrayIntoString.default.mockReset);

  it('should call parseFieldsArrayIntoString with proper params', () => {
    const fields = [1, 2, 3];
    const payload = { fields };
    getGridQueryPart({
      payload,
    });

    expect(parseFieldsArrayIntoString.default).toHaveBeenCalledWith(fields);
  });

  it('should call getGraphQLSort with proper params for defined sorting', () => {
    const payload = { sorting: { test: 1 } };
    getGridQueryPart({
      payload,
    });

    expect(getGraphQLSort.default).toHaveBeenCalledWith(payload.sorting);
  });

  it('should not call getGraphQLSort for empty sorting', () => {
    const payload = { sorting: {} };
    getGridQueryPart({
      payload,
    });

    expect(getGraphQLSort.default).not.toHaveBeenCalled();
  });

  it('should call getGraphQLFilter with proper params for defined filtering', () => {
    const payload = { filtering: { test: 1 } };
    getGridQueryPart({
      payload,
    });

    expect(getGraphQLFilter.default).toHaveBeenCalledWith(payload.filtering);
  });

  it('should not call getGraphQLFilter for empty filtering', () => {
    const payload = { filtering: {} };
    getGridQueryPart({
      payload,
    });

    expect(getGraphQLFilter.default).not.toHaveBeenCalled();
  });

  it('should call getGraphQLLimit with proper params for defined pagination', () => {
    const payload = { pagination: { test: 1 } };
    getGridQueryPart({
      payload,
    });

    expect(getGraphQLLimit.default).toHaveBeenCalledWith(payload.pagination);
  });

  it('should return a proper string without sorting, filtering, extraFields', () => {
    const payload = {};

    const mockedFields = 'mockedFields';
    const mockedLimit = 'mockedLimit';

    parseFieldsArrayIntoString.default.mockReturnValue(mockedFields);
    getGraphQLLimit.default.mockReturnValue(mockedLimit);

    const result = getGridQueryPart({
      payload,
    });

    expect(result).toEqual(
      `grid(   limit: {${mockedLimit}} ) { totalSize, rows { id ${mockedFields}  } }`,
    );
  });

  it('should return a proper string with sorting', () => {
    const sorting = { test: 1 };
    const payload = { sorting };

    const mockedFields = 'mockedFields';
    const mockedLimit = 'mockedLimit';
    const mockedSorting = 'mockedSorting';

    parseFieldsArrayIntoString.default.mockReturnValue(mockedFields);
    getGraphQLLimit.default.mockReturnValue(mockedLimit);
    getGraphQLSort.default.mockReturnValue(mockedSorting);

    const result = getGridQueryPart({
      payload,
    });

    expect(result).toEqual(
      `grid( sort: {${mockedSorting}}  limit: {${mockedLimit}} ) { totalSize, rows { id ${mockedFields}  } }`,
    );
  });

  it('should return a proper string with filtering', () => {
    const filtering = { test: 1 };
    const payload = { filtering };

    const mockedFields = 'mockedFields';
    const mockedLimit = 'mockedLimit';
    const mockedFiltering = 'mockedFiltering';

    parseFieldsArrayIntoString.default.mockReturnValue(mockedFields);
    getGraphQLLimit.default.mockReturnValue(mockedLimit);
    getGraphQLFilter.default.mockReturnValue(mockedFiltering);

    const result = getGridQueryPart({
      payload,
    });

    expect(result).toEqual(
      `grid(  filter: {${mockedFiltering}} limit: {${mockedLimit}} ) { totalSize, rows { id ${mockedFields}  } }`,
    );
  });

  it('should return a proper string with extraFields', () => {
    const extraFields = 'test1 test2';
    const payload = {};

    const mockedFields = 'mockedFields';
    const mockedLimit = 'mockedLimit';

    parseFieldsArrayIntoString.default.mockReturnValue(mockedFields);
    getGraphQLLimit.default.mockReturnValue(mockedLimit);

    const result = getGridQueryPart({
      payload,
      extraFields,
    });

    expect(result).toEqual(
      `grid(   limit: {${mockedLimit}} ) { totalSize, rows { id ${mockedFields} ${extraFields} } }`,
    );
  });
});
