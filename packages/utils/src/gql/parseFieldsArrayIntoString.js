import parseField from './parseField';

const parseFieldsArrayIntoString = (fields = []) =>
  fields.map(parseField).join(',');

export default parseFieldsArrayIntoString;
