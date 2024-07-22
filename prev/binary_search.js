const arr = [1, 2, 3, 5, 6, 7, 9];

// time complexity = O(log n)

const binarySearch = (arr, value) => {
  let lowest, mid, highest, guess;
  lowest = 0;
  highest = arr.length - 1;

  while (highest >= lowest) {
    mid = Math.round((lowest + highest) / 2);
    guess = arr[mid];
    if (guess === value) {
      console.log(mid);
      break;
    }

    if (guess > value) {
      highest = mid - 1;
    } else {
      lowest = mid + 1;
    }
  }
  return null;
};

binarySearch(arr, 6);
