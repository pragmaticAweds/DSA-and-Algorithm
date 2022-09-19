const arr = [1, 2, 3];

const permutation = (arr) => {
  const permutationResult = [];

  const permutate = (nums, i) => {
    if (i === nums.length - 1) {
      console.log("at push", i);
      permutationResult.push(nums.slice());
      return;
    }
    for (let j = i; j < nums.length; j++) {
      //swap i,j
      [nums[i], nums[j]] = [nums[j], nums[i]];
      //recursive call
      console.log(`index of i at ${i} and index of j at ${j}`);
      console.log("first swap", ([nums[i], nums[j]] = [nums[j], nums[i]]));
      console.log("recursive call");
      permutate(nums, i + 1);
      //swap i,j
      console.log("at end", ([nums[i], nums[j]] = [nums[j], nums[i]]));
      console.log(
        `index of i second swap at ${i} and index of j second swap at ${j}`
      );
      [nums[i], nums[j]] = [nums[j], nums[i]];
    }
  };
  permutate(arr, 0);
  return permutationResult;
};

console.log(permutation(arr));
