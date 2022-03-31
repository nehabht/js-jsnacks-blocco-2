// Snack3

// Generatore di “nomi cognomi” casuali: il Grande Gatsby ha una lista di nomi 
// e una lista di cognomi, e da queste vuole generare una falsa lista di invitati 
// con nome e cognome.

const names = ["Gatsby", "Eleonora", "Robi", "Sun"]

const surnames = ["Smith", "Cant", "Swift","Warli"]

const fakeList = []



for (let i = 0; i < names.length; i++){

    randomGuest = [names[Math.floor(Math.random() * names.length)]] + " " + surnames[Math.floor(Math.random() * surnames.length)]

    // console.log(randomGuest)
    fakeList.push(randomGuest)

}

console.log(fakeList)

