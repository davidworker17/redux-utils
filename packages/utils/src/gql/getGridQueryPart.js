import size from 'lodash/size';
import keys from 'lodash/keys';

import getGraphQLSort from './getGraphQLSort';
import getGraphQLLimit from './getGraphQLLimit';
import getGraphQLFilter from './getGraphQLFilter';
import parseFieldsArrayIntoString from './parseFieldsArrayIntoString';

const getGridQueryPart = ({
  gridField = 'grid',
  payload,
  extraFields = '',
  config = {},
}) => {
  const {
    pagination = {},
    sorting = {},
    filtering = {},
    fields: visibleFields = [],
  } = payload;
  const fields = parseFieldsArrayIntoString(visibleFields);
  const sort = size(keys(sorting)) ? `sort: {${getGraphQLSort(sorting)}}` : '';
  const filter = size(keys(filtering))
    ? `filter: ${getGraphQLFilter(filtering)}`
    : '';
  const limit = getGraphQLLimit(pagination);
  const id = config.idParam || 'id';

  return `${gridField}( ${sort} ${filter} limit: {${limit}} ) { totalSize, rows { ${id} ${fields} ${extraFields} } }`;
};

export default getGridQueryPart;
