import getGraphQLGrid from '../getGraphQLGrid';
import * as dependency from '../getGridQueryPart';

import axios from 'axios';

dependency.default = jest.fn();
axios.post = jest.fn();

describe('getGraphQLGrid', () => {
  beforeEach(dependency.default.mockReset);
  beforeEach(axios.post.mockReset);

  it('should call getGridQueryPart with proper params', () => {
    const payload = { test: 2 };
    const gridField = 'testField';
    const extraFields = 'testExtraFields';
    const config = {
      gridField,
    };
    getGraphQLGrid({
      payload,
      extraFields,
      config,
    });

    expect(dependency.default).toHaveBeenCalledWith({
      extraFields,
      gridField,
      payload,
    });
  });

  it('should not call getGridQueryPart for passed gridQueryPart', () => {
    const payload = { test: 2 };
    const gridField = 'testField';
    const extraFields = 'testExtraFields';
    const config = {
      gridField,
    };
    getGraphQLGrid({
      payload,
      extraFields,
      config,
      gridQueryPart: 'notEmpty',
    });

    expect(dependency.default).not.toHaveBeenCalled();
  });

  it('should call axios.post with proper params', () => {
    const url = 'http://test.test';
    const domain = 'testDomain';
    const gridField = 'testGridField';
    const config = {
      domain,
      gridField,
    };
    const mockedGridQueryPart = 'mockedGridQueryPart';

    dependency.default.mockReturnValue(mockedGridQueryPart);

    const query = 'query V1Queries { testDomain { mockedGridQueryPart } }';

    getGraphQLGrid({
      url,
      config,
    });

    expect(axios.post).toHaveBeenCalledWith(url, { query });
  });

  it('should call axios.post with proper params  for passed gridQueryPart', () => {
    const url = 'http://test.test';
    const domain = 'testDomain';
    const gridField = 'testGridField';
    const gridQueryPart = 'notEmpty';
    const config = {
      domain,
      gridField,
    };

    const query = 'query V1Queries { testDomain { notEmpty } }';

    getGraphQLGrid({
      url,
      config,
      gridQueryPart,
    });

    expect(axios.post).toHaveBeenCalledWith(url, { query });
  });
});
