import axios from 'axios';

import getGridQueryPart from './getGridQueryPart';

export default function getGraphQLGrid({
  url,
  config = {},
  extraFields = '',
  payload = {},
  gridQueryPart: passedGridQueryPart,
}) {
  const { rootType = 'V1Queries', gridField, domain } = config;
  const gridQueryPart =
    passedGridQueryPart ||
    getGridQueryPart({ config, gridField, payload, extraFields });

  const query = `query ${rootType} { ${domain} { ${gridQueryPart} } }`;

  return axios.post(url, { query });
}
