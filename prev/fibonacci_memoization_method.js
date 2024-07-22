//fibonacci using recursion and memoization method

const fibonacci = (n) => {
  const hashTable = { 0: 0, 1: 1 };

  if (n in hashTable) {
    return hashTable[n];
  } else {
    hashTable[n] = fibonacci(n - 1) + fibonacci(n - 2);
    return hashTable[n];
  }
};

console.log(fibonacci(8));

// space complexity = O(n) this is due to the no of recursive call on the callstack.

// time complexity = O(n)
