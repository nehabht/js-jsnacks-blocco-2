// Snack4

// Crea un array di numeri interi 
// e fai la somma di tutti gli elementi che sono in posizione dispari


const userNumbers = [1, 4, 5, 3]

sum = 0


for (var i = 0; i < userNumbers.length; i++) {

    // posizione dispari
    if(i % 2 !== 0) {
        
        sum += userNumbers[i]
        
    }


}

console.log(sum)
