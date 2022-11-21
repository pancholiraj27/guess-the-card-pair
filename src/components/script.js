console.clear();
console.log("script loaded");

// let arr = ["hl", "y", "g"];
let arr = [];

let newArr = new Set(arr);
let i = 0;

while (arr.length < 8) {
  let randomNumber = Math.floor(Math.random() * 8);

  if (!arr.includes(randomNumber)) {
    arr.push(randomNumber);
  }
}

console.log(arr);
