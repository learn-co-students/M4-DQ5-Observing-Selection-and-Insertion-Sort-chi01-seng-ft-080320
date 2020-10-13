function selectionSort(arr) {
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // In selection sort we loop through the input array linearly, 
  // selecting the first smallest element, 
  // and then swap it to the FIRST position. 
  // Then we loop through the array again linearly, 
  // and get the second smallest element, 
  // now swap it to the SECOND position, etc...
  let len = arr.length;
  for (let i = 0; i < len; i++) {
      let min = i;
      for (let j = i + 1; j < len; j++) {
          if (arr[min] > arr[j]) {
              min = j;
          }
      }
      //min !== i avoids an unnecessary swap of the same item with itself
      if (min !== i) {
          let tmp = arr[i];
          arr[i] = arr[min];
          arr[min] = tmp;
      }
  }
  return arr;
}
