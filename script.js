"use strict";
let FirstPlayer = 13;
let SecondPlayer = 24;
let RandomNumb = Math.floor(Math.random() * (100 - 1) + 1);
console.log(`Il numero casuale è ${RandomNumb}`);
console.log(`Il giocatore 1 ha scelto ${FirstPlayer}`);
console.log(`Il giocatore 2 ha scelto ${SecondPlayer}`);
function checkNumb() {
    if (FirstPlayer === RandomNumb) {
        console.log("Il giocatore 1 ha indovinato");
    }
    if (SecondPlayer === RandomNumb) {
        console.log("Il giocatore 2 ha indovinato");
    }
    else if (Math.abs(RandomNumb - FirstPlayer) < Math.abs(RandomNumb - SecondPlayer)) {
        console.log("Nessuno dei due ha indovinato, ma il Giocatore 1 si è avvicinato di più");
    }
    else {
        console.log("Nessuno dei due ha indovinato, ma il Giocatore 2 si è avvicinato di più");
    }
}
checkNumb();
