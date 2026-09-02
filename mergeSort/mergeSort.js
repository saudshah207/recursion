function mergeSort(array) {
  const length = array.length;

  if (length <= 1) return array;

  const splitIndex = Math.floor(length / 2);

  const leftHalf = mergeSort(array.slice(0, splitIndex));
  const rightHalf = mergeSort(array.slice(splitIndex));

  return merge(leftHalf, rightHalf);
}

function merge(left, right, mergedArray = []) {
  const firstLeftElement = left[0],
    firstRightElement = right[0];

  if (firstLeftElement === undefined || firstRightElement === undefined) {
    mergedArray =
      firstLeftElement === undefined
        ? mergedArray.concat(right)
        : mergedArray.concat(left);

    return mergedArray;
  }

  // Array.shift() removes first element and shifts elements to left by index 1
  if (firstLeftElement < firstRightElement) {
    mergedArray.push(firstLeftElement);
    left.shift();
  } else if (firstRightElement < firstLeftElement) {
    mergedArray.push(firstRightElement);
    right.shift();
  } else {
    mergedArray.push(firstLeftElement, firstRightElement);
    left.shift();
    right.shift();
  }

  return merge(left, right, mergedArray);
}

console.log(mergeSort([]));
console.log(mergeSort([73]));
console.log(mergeSort([1, 2, 3, 4, 5]));
console.log(mergeSort([3, 2, 1, 13, 8, 5, 0, 1]));
console.log(mergeSort([105, 79, 100, 110]));
