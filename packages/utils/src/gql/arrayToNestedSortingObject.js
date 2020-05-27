const arrayToNestedSortingObject = (arr = [], sortingDir) =>
  arr.length > 1
    ? `${arr[0]}: { ${arrayToNestedSortingObject(arr.slice(1), sortingDir)} }`
    : `${arr[0]}: ${sortingDir}`;

export default arrayToNestedSortingObject;
