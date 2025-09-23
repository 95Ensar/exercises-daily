// • Të shkruhet programi që gjenë numrin më të madh të
// plotpjestueshëm me 3 dhe 6 nga rangu i numrave 0 deri në 100

let n = 0;

for(let i = 0; i < 100 ; i++){
    if( i % 6 === 0){
        n = i;
    }

}

console.log(n);