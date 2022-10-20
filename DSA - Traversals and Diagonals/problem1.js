// given a string find out the vowel that are missing and print them.


let input = 'masai';


let vowel = { a: 1, e: 1, i: 1, o: 1, u: 1 };


for (let i = 0; i <= input.length - 1; i++) {

  let char = input[i];

  delete vowel[char];
}
let bag = '';
for (key in vowel) {
  bag += key+' ';
}
console.log(bag);