import isObject from 'lodash/isObject';
import isBoolean from 'lodash/isBoolean';

const getFiterOperatorValueString = filterValue => {
  if (isObject(filterValue) && filterValue.operator) {
    return `operator: ${filterValue.operator}, value: "${filterValue.value}"`;
  } else if (isObject(filterValue)) {
    const from = filterValue.from ? `"${filterValue.from}"` : `${false}`;
    const to = filterValue.to ? `"${filterValue.to}"` : `${false}`;

    return `operator: between, value: [${from}, ${to}]`;
  } else if (isBoolean(filterValue)){
    return `operator: eq, value: ${filterValue}`;
  } else {
    return `operator: like, value: "%${filterValue}%"`;
  }
};


export default getFiterOperatorValueString;
