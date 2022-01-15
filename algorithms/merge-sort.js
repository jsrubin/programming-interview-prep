// merge sort

const _mergeArrays = (a, b) => {
  const c = [];

  // while both have length, compare first index of each, add smaller then remove it from array
  while (a.length && b.length) {
    c.push(a[0] > b[0] ? b.shift() : a.shift());
  }

  //if we still have values (larger set), add them at the end
  while (a.length) {
    c.push(a.shift());
  }
  while (b.length) {
    c.push(b.shift());
  }

  return c;
};

/*
  if length == 1 return value
  else find middle, slice before, slice after, recursive each
  finally sort and merge before and after
*/
const mergeSort = a => {
  if (a.length < 2) return a;

  const middle = Math.floor(a.length / 2);
  const a_l = a.slice(0, middle);
  const a_r = a.slice(middle, a.length);

  const sorted_l = mergeSort(a_l);
  const sorted_r = mergeSort(a_r);

  return _mergeArrays(sorted_l, sorted_r);
};

const test = [5, 3, 2, 9, 1, 4];
const sorted = mergeSort(test);
console.log(sorted); // [ 1, 2, 3, 4, 5, 9 ]

console.log(test.shift()); // 5
console.log(test); // [3, 2, 9, 1, 4]
