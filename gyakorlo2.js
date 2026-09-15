const jellemzok = [
    "Nagy Mária;164;59",
    "Kiss Géza;177.57;64.5",
    "Tóth Bianka;158.3;49",
    "Kálmán Béla;188.1;79",
    "Rácz Teréz;174.18;62.5",
];

/* Feladat:
Dolgozzuk fel a tömb elemeit!
A tömb minden egyes elemét vágjuk szét a 3 különböző információ mentén (név;magasság;súly)
Írjuk ki a konzolra soronként az egyes emberek tulajdonságát (helytöltő nullákra figyelni!)
Pl.: Név: Kiss Géza, Magasság: 177.57 cm, Súly: 64.50 kg
     Név: Nagy Mária, Magasság: 164.00 cm, Súly: 59.00 kg
*/

let spliteltTomb = []

for(let i = 0; i < jellemzok.length; i++){
    splitelt = jellemzok[i].split(";")
    spliteltTomb.push(splitelt)

}

for(let i = 0; i < spliteltTomb.length; i++){
    let sor = spliteltTomb[i]
    console.log("Név: " +sor[0] + " Magasság: " + sor[1] + " Súly: " +sor[2] + " kg")
}

//Tanar megoldasa majd bemasolom




