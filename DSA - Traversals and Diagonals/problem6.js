// given an arr of integers one integers is missing.......


let arr = [1, 3, 4, 5];

let obj = {};


for (let i = 1; i <= arr.length - 1; i++) {
  obj[i] = 0;
}

for (let i = 0; i <= arr.length - 1; i++) {
  delete obj[arr[i]];
}
console.log(obj)