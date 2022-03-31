// SNACK 1 
// Il software deve chiedere per 5 volte all’utente di inserire un numero.
// Il programma stampa la somma di tutti i numeri inseriti.
// Esegui questo programma in due versioni, con il for e con il while.


const lista_numeri = []
sum = 0


// metodo for 

for (let i = 0; i < 5; i++){
    const ask_number =Number(prompt("inserisci un numero"));
    lista_numeri.push(ask_number);
    sum += lista_numeri[i]
}

console.log("con for risulta: " + sum)



// metodo while


// let i = 0
// // chiedere 5 volte di inserire un numero 

// while (i<5){
//     const ask_number = Number(prompt("inserisci un numero"));
//     lista_numeri.push(ask_number);
//     // somma di tutti gli elementi
//     sum += lista_numeri[i]

//     i++

// }

// console.log("con while risulta: " + sum)