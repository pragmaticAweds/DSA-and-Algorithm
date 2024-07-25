const testCase1 = []; //true

const testCase2 = [1, 2, 3, 4]; //true

const testCase3 = [3, 2, 1, 0]; //true

const testCase4 = [1]; //true

const testCase5 = [1, 2, 3, 2]; //false

const testCase6 = [3, 2, 1, 4]; //false

const arrIsMonotonic = (arr) => {
  let isMonotonic = true,
    isIncreasing = false,
    isDecreasing = false;

  if ([0, 1].includes(arr.length)) return isMonotonic;

  const [first, second] = arr;

  if (first > second) {
    isDecreasing = true;
  } else {
    isIncreasing = true;
  }

  for (let i = 0; i < arr.length - 1; i++) {
    const current = arr[i];
    const next = arr[i + 1];

    if ((isIncreasing && current > next) || (isDecreasing && next > current)) {
      isMonotonic = false;
      break;
    }
  }

  return isMonotonic;
};

const checkMonotonic = function (arr) {
  //write code here to return either true or false

  if (arr.length <= 2) return true;

  let isIncreasing = true;

  let isDecreasing = true;

  for (var i = 1; i < arr.length - 1; i++) {
    if (arr[i] > arr[i - 1]) {
      isDecreasing = false;
    }

    if (arr[i] < arr[i - 1]) {
      isIncreasing = false;
    }
  }

  return isIncreasing || isDecreasing;
};

console.log(1, arrIsMonotonic(testCase1));

console.log(2, arrIsMonotonic(testCase2));

console.log(3, arrIsMonotonic(testCase3));

console.log(4, arrIsMonotonic(testCase4));

console.log(5, arrIsMonotonic(testCase5));

console.log(6, arrIsMonotonic(testCase6));
