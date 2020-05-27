import arrayToNestedStringObject from './arrayToNestedStringObject';

const parseNested = (item = '') => arrayToNestedStringObject(item.split('.'));

export default parseNested;
