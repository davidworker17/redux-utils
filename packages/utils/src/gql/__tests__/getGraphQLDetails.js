import getGraphQLDetails from '../getGraphQLDetails';

import axios from 'axios';

axios.post = jest.fn();

describe('getGraphQLDetails', () => {
  beforeEach(axios.post.mockReset);

  it('should call axios.post with proper params', () => {
    const url = 'http://test.test';
    const domain = 'testDomain';
    const detailsField = 'testDetailsField';
    const id = 123;
    const fields = 'one, two, three';
    const config = {
      domain,
      detailsField,
    };
    const payload = {
      id,
    };

    const query =
      `query V1Queries { ${domain} { ${detailsField}(id: "${id}" ) { ${fields} } } }`;

    getGraphQLDetails({
      url,
      config,
      payload,
      fields,
    });

    expect(axios.post).toHaveBeenCalledWith(url, { query });
  });
});
