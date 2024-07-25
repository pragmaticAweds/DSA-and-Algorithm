// You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

/*
Sorted Squared Array

You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

*/

const input = [0, 1, 2, 3, 4, 5];

const input2 = [-4, -2, 0, 3, 4, 5];

const input3 = [-5, -3, -1, 0, 2, 4];

const sortSquareArr = (arr) => {
  const newArr = [];

  for (let i = 0; i <= arr.length - 1; i++) {
    const val = arr[i];

    const square = val * val;

    let currentIndex = i,
      prevIndex = i - 1;

    newArr.push(square);

    if (newArr[prevIndex] > newArr[currentIndex]) {
      let temp = newArr[prevIndex];

      newArr[prevIndex] = newArr[currentIndex];

      newArr[currentIndex] = temp;
    }
  }

  return newArr;
};

const sortSquareArr2 = (array) => {
  const newArray = new Array(array.length).fill(0); // create a new array with same no of item in the array passed in filled with 0s

  let leftPointer = 0;

  let rightPointer = array.length - 1;

  //reversing the array
  for (let i = array.length - 1; i >= 0; i--) {
    const leftSquared = Math.pow(array[leftPointer], 2);

    const rightSquared = Math.pow(array[rightPointer], 2);

    if (leftSquared > rightSquared) {
      newArray[i] = leftSquared;

      leftPointer++;
    } else {
      newArray[i] = rightSquared;

      rightPointer--;
    }
  }
  return newArray;
};

const sortSquareArr3 = (arr) => {
  return arr.map((num) => num * num).sort((a, b) => a - b);
};

console.log(sortSquareArr3(input3));
