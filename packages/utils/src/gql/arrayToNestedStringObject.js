const arrayToNestedStringObject = (arr = []) =>
  arr.length > 1
    ? `${arr[0]} { ${arrayToNestedStringObject(arr.slice(1))} }`
    : arr[0];

export default arrayToNestedStringObject;
