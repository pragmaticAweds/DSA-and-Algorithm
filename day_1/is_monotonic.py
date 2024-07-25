testCase1 = []; #true

testCase2 = [1, 2, 3, 4]; #true

testCase3 = [3, 2, 1, 0]; #true

testCase4 = [1]; #true

testCase5 = [1, 2, 3, 2]; #false

testCase6 = [3, 2, 1, 4]; #false

testCase7 = [1, 3, 2, 4, 5] #false

def isMonotonicArr(arr):
  isMonotic = True
  isIncreasing = False
  isDecreasing = False

  if len(arr) == 0 or len(arr) == 1:
    return isMonotic
  
  if arr[1] > arr[0]:
    isIncreasing = True
  else: 
    isDecreasing = True
  
  for k in range(len(arr) - 1):
    current = arr[k]
    next = arr[k + 1]

    if (isIncreasing and current > next) or (isDecreasing and next > current):
      isMonotic = False
      return isMonotic

    
    
def monotonic_array(array):
    if len(array) == 0:
        return True
    first = array[0]
    last = array[len(array)-1]
    if first > last:
        for i in range(len(array)-1):
            if array[i] < array[i+1]:
                return False
    elif first == last:
        for i in range(len(array)-1):
            if array[i] != array[i+1]:
                return False
    else:
        for i in range(len(array)-1):
            if array[i] > array[i+1]:
                return False
    return True

    

print(1, monotonic_array(testCase1))

print(2, monotonic_array(testCase2))

print(3, monotonic_array(testCase3))

print(4, monotonic_array(testCase4))

print(5, monotonic_array(testCase5))

print(6, monotonic_array(testCase6))

print(6, monotonic_array(testCase7))

