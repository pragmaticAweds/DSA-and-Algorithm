const arr = [5, 7, 8, 8, 3, 6, 7, 2, 1, 9];

const selection_sort = (arr) => {
  let smallest_index;
  for (let i = 0; i < arr.length; i++) {
    smallest_index = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[smallest_index] > arr[j]) smallest_index = j;
    }
    if (arr[i] !== arr[smallest_index]) {
      let temp = arr[i];
      arr[i] = arr[smallest_index];
      arr[smallest_index] = temp;
    }
  }
  console.log(arr);
};

selection_sort(arr);

// time complexity = O(n^2)

// space complexity = O(1)
