let numeri = [100, 8, 4, 12, -3, 23];

let numMax = 0;

for(let i = 0; i < numeri.length; i++){
    if(numeri[i] > numMax){
        numMax = numeri[i];
    }
}

console.log("Il più grande é :" + numMax);

// if(numeri[0] > numMax){
//     numMax = numeri[0]; //1
// }

// if(numeri[1] > numMax){
//     numMax = numeri[1];//8
// }

// if(numeri[2] > numMax){ //false
//     numMax = numeri[2] //8
// }