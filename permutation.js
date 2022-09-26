const permutation = (arr) => {
  const results = [];
  const helper = (arr, i) => {
    console.log(`when i is ${i} `);
    if (i === arr.length - 1) {
      results.push(arr.slice());
      console.log("Condition is true", results);
      return;
    }

    for (let j = i; j < arr.length; j++) {
      //before swap
      console.log(`when j is at: ${j} i is at: ${i} and arr is:${arr}`);

      //swap
      console.log(`Recursive swap => ${([arr[i], arr[j]] = [arr[j], arr[i]])}`);

      //after swap
      console.log(`after swap => ${arr}`);

      helper(arr, i + 1);
      console.log(`i is at ${i}, call helper function, arr is now at ${arr}`);

      console.log(`Main swap => ${([arr[i], arr[j]] = [arr[j], arr[i]])}`);

      console.log(
        `Main swap => when j is at: ${j} i is at: ${i} and arr is:${arr}`
      );
    }
  };

  helper(arr, 0);
  return results;
};

console.log(permutation([1, 2, 3]));
