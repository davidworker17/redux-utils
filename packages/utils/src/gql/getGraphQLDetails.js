import axios from 'axios';

export default function getGraphQLDetails({
  url,
  config = {},
  fields = '',
  payload = {},
}) {
  const { rootType = 'V1Queries', detailsField = 'details', domain } = config;
  const { id } = payload;

  const query = `query ${rootType} { ${domain} { ${detailsField}(id: "${id}" ) { ${fields} } } }`;

  return axios.post(url, { query });
}
