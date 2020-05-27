import reduce from 'lodash/reduce';
import merge from 'lodash/merge';

import arrayToNestedFilterObject from './arrayToNestedFilterObject';

const getGraphQLFilter = filtering => {
  const filters = reduce(
    filtering,
    (result, val, key) => {
      const fieldsArr = key.indexOf('.') !== -1 ? key.split('.') : [key];

      return merge(result, arrayToNestedFilterObject(fieldsArr, val))
    },
    {},
  );
  
  return JSON.stringify(filters)
    .replace(/"/g, '')
    .replace(/\\/g, '\"');
};


export default getGraphQLFilter;
