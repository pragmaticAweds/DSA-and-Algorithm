//fibonacci using iterative method

const fibonacci = (n) => {
  let prev, curr, next, count;
  prev = 0;
  curr = 1;
  count = 1;

  while (count < n) {
    next = prev + curr;
    prev = curr;
    curr = next;
    count++;
  }
  return curr;
};

console.log(fibonacci(10));

// space complexity = O(1) this is because we are not creating a new variable to store data to in the computer memory, instead, we are changing the value of the existing variable which is always constant.

// time complexity = O(n) this is due to the no of recursive call on the callstack.
