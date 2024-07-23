#Brute force method
# Time = O(nlogn)  Space = O(n)

def sorted_squared(array):
    new_arr = [0] * len(array) #create an arr of zeros equal to the array size.

    for i in range(len(array)): 
        new_arr[i] = array[i] ** 2 #using the index, assign square to the index in new array

    new_arr.sort() # sort the new array

    print(new_arr)
    return new_arr


# Time = O(n) Space = O(n)
def sorted_squared_2(array):
    i = 0
    j = len(array) - 1
    new_array = [0] * len(array)
    for k in reversed(range(len(array))):
        sq_i = array[i]**2
        sq_j = array[j]** 2
        if sq_i > sq_j:
            new_array[k] = sq_i
            i += 1
        else:
            new_array[k] = sq_j
            j -= 1
    print(new_array)
    return new_array 










arr = [1,2,3,4,5,6]
arr2 = [-4,-2,0,1,3,3,4]


sorted_squared_2(arr)
sorted_squared_2(arr2)