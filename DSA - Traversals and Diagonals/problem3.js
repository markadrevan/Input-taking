// given some string of symbols find its value.


let str = '**%#&';

let diary = { '%': 1, '#': 2, '*': 3, '&': 4 };



let total = 0;
for (let i = 0; i <= str.length - 1; i++) {
  total += diary[str[i]];
}
console.log(total);