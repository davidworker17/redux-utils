import parseSortingDir from './parseSortingDir';
import arrayToNestedSortingObject from './arrayToNestedSortingObject';

const getGraphQLSort = (sorting = {}) => {
  const { dir, field = '' } = sorting;
  const sortingDir = dir ? parseSortingDir(dir) : '';
  const fieldsArr = field.indexOf('.') !== -1 ? field.split('.') : [field];

  return sortingDir ? arrayToNestedSortingObject(fieldsArr, sortingDir) : '';
};

export default getGraphQLSort;
