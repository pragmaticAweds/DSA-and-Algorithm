// You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

// An array is monotonic if it is either monotone increasing or monotone decreasing. An array is monotone increasing if all its elements from left to right are non-decreasing. An array is monotone decreasing if all  its elements from left to right are non-increasing. Given an integer array return true if the given array is monotonic, or false otherwise.

/*
Sorted Squared Array

You are given an array of Integers in which each subsequent value is not less than the previous value. Write a function that takes this array as an input and returns a new array with the squares of each number sorted in ascending order.

*/

const input = [0, 1, 2, 3, 4, 5];

const input2 = [-4, -2, 0, 3, 4, 5];

const sortSquareArr = (arr) => {
  const newArr = [];

  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];

    const square = val * val;

    let currentIndex = i,
      prevIndex = i - 1;

    newArr.push(square);

    console.log(i, val);

    if (newArr[prevIndex] > newArr[currentIndex]) {
      // console.log(newArr[prevIndex], newArr[currentIndex]);

      let temp = newArr[prevIndex];

      newArr[prevIndex] = newArr[currentIndex];
      newArr[currentIndex] = temp;
    }
  }

  console.log(newArr);
};

sortSquareArr(input2);
