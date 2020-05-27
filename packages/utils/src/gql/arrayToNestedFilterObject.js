import getFiterOperatorValueString from './getFiterOperatorValueString';

const arrayToNestedFilterObject = (arr = [], filterValue) => {
  if(arr.length > 0) {
    return ({
      [arr[0]]: arrayToNestedFilterObject(arr.slice(1), filterValue)
    })
  } else {
    return `{ ${getFiterOperatorValueString(filterValue)} }`;
  }
}

export default arrayToNestedFilterObject;
