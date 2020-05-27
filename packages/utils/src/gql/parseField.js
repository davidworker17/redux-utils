import parseNested from './parseNested';

const parseField = (item = '') =>
  item.indexOf('.') !== -1 ? parseNested(item) : item;

export default parseField;
