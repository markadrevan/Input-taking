// given an arr find out the frequencies of each el..


let arr = [1, 2, 3, 4, 5, 6, 7, 3, 2, 4, 9];

let obj = {};


for (let i = 0; i < arr.length - 1; i++) {
  if (obj[arr[i]] == undefined) {
    obj[arr[i]] = 1;
  } else {

    obj[arr[i]]++;
  }
}
console.log(obj)