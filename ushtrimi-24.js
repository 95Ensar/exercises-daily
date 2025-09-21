// Problem: Calculate a^b (just like your power exercise).

let a = 5;
let b = 3;

let res = 1;
for(let i = 0; i < b ; i++){
    res *= a;
}

console.log(res);