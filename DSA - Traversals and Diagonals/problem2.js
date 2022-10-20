// Given a str find its value.
// Value of a str is calculated by summing up the values of each character. where a - 1, b - 2, c - 3, ..., z - 26.

let str = 'revan';

let char = 'abcdefghijklmnopqrstuvwxyz';

let diary = {};

for (let i = 0; i <= 26; i++) {
  diary[char[i]] = i + 1;
}

let total = 0;
for (let i = 0; i <= str.length - 1; i++) {
  total += diary[str[i]]
}
console.log(total);