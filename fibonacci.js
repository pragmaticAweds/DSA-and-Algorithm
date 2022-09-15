// fibonacci using recursion

const fibonacci = (n) => (n <= 1 ? n : fibonacci(n - 1) + fibonacci(n - 2));

// space complexity = O(n) this is due to the no of recursive call on the callstack.

// time complexity = O(2^n)
