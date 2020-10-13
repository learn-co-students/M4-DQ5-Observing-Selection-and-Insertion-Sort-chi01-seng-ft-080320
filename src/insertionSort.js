function insertionSort(arr) {
  // arr is an array of unsorted integers (i.e. [3, 5, 1])
  // Insertion Sort moves from left to right, like sorting cards
  // moving each card where the card to it’s left is less than or equal to current card's value
  // uses current item as “key”,
  // and searches through items to the left of key 
  // for the place that the key should go
  let length = arr.length;
  // i = 1 because there's nothing to the left of arr[0]
  for (let i = 1; i < length; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        // arr[j] corresponds to the first item in the sub-array
        // whose value is less than (or equal to) the key’s value
        arr[j + 1] = arr[j];
        j = j - 1;
      }
      // We assign key to arr[j + 1]
      // in order to place the key to the right of that item.
      arr[j + 1] = key;
  }
  return arr;
}

