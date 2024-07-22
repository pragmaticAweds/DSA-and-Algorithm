const arr = [1, 2, [3, 4], [[2]]];
const arr1 = [1, 2, 4];
const arr2 = [1, 2, [4]];
const arr3 = [1, 2, [4, 1]];

// We first declare a function for our solution called powerSum, it receives two args => the array to loop through and power which is assigned to 1 from start.

const powerSum = (arr, power = 1) => {
  // We declare an empty variable called sum, initialized to 0. As we loop through our array, we add the value if it is an integer to it.

  let sum = 0;

  // Using forEach array method, we check each element in the array if it as an integer or array

  arr.forEach((element) => {
    // If our value is an array, we recall our function recursively, with the value which is a type of array, and we increment the power by one. Then we add the result up with the sum variable we declare

    if (Array.isArray(element)) {
      sum += powerSum(element, power + 1);
    } else {
      // If the value is not an array, we add it to the sum variable

      sum += element;
    }
  });

  //At the end we return the power of sum raise to the power e.g 2 raise to power of 4
  // method 1 = return Math.pow(sum, power);
  // method 2 = return sum ** power;

  return Math.pow(sum, power);
};

// Time Complexity is O(N), where N is total no of item

// Space Complexity is O(d), where d is max depth to whicn the function is called recursively on the call-stack.

console.log("Test Case 1", powerSum(arr));
console.log("Test Case 2", powerSum(arr1));
console.log("Test Case 3", powerSum(arr2));
console.log("Test Case 4", powerSum(arr3));
