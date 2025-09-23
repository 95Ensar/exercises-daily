// • Të shkruhet programi që llogaritë shumën e numrave çift nga
// rangu i numrave 55 deri 99
// shuma = 56 + 58 + .... + 98

let res = 0 ;
for(let i = 55 ; i < 99 ; i++){
    if(i % 2 === 0){
        res +=i ;
    }
}
console.log(res);