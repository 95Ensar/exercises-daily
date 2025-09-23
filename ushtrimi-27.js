// • Të shkruhet programi që llogaritë ndryshimin e shumës së
// numrave çift dhe tek nga 1 deri në 10
// 1 2 3 4 5 6 7 8 9 10
// Çift: 2 4 6 8 10 = shuma: 30
// Tek: 1 3 5 7 9 = shuma 25
// Rezultati final: 30 – 25 = 5

let res1 = 0;
let res2 = 0;
for(let i = 1 ; i <= 10 ; i++){
    if(i % 2 === 0){
        res1 +=i;
    }

    if(i % 2 !== 0 ){
        res2 += i;
    }

    
}
 console.log(res1);
 console.log(res2);

console.log(res1 - res2);
