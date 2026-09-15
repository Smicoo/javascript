//Stringek es string kezelo fuggvenyek

let s = "Ez itt egy string";
let str = `Ez egy     
több soros
string
Eee
aa`  //AltGR+7

console.log(s)
//Tömbként is kezelhető
console.log(s[3])
console.log(s.length)
console.log(s[52]) //undefined
console.log(s[-2]) //undefined

//string kezelo fuggvenyek

console.log(s.charAt(9)) //Adott indexen milyen karakter van
console.log(s.charAt(-2)) // "" ures stringet ad vissza
console.log(s.at(7))
console.log(s.at(-2)) //itt hatulrol kezdi bejarni a stringet
console.log(s.indexOf("e")) //Az elso elofordulas indexet adja vissza nagy es kis betu kozott mas
console.log(s.lastIndexOf("g")) //Hatulrol kezdi el keresni es az utolso elofordulast
console.log(s.includes("egy")) //Benne van e true/false

console.log(s.substring(9, 10)) //9. indextol a 10 es indexig [mettől, meddig [, a bal belesik a jobb oldal nem

console.log(s.replace(" ", "-")) // it az elso elofordulasnal
console.log(s.replaceAll(" ", "-")) //itt osszesnel

let nev = "   Özv. Kolompár Márija   "
console.log(nev)
console.log(nev.trim())

//Konkatenacio

console.log(s + " még valami")
console.log(s.concat(" még valami"))

//Modositas

s[0] = "A" //Ezt nem lehet (readonlyk)nem tudom index alapjan felulirni az index elemit c# le sem fordulna
console.log(s)

s = "A" + s.substring(1)
console.log(s)

s = s.substring(0, 6) + "X" + s.substring(7)
console.log(s)

//Helykitöltés

let ora = 9
let perc = 5

console.log((ora + "").padStart(2, "0") + ":" + (perc + "").padStart(2, "0")) //ez maris string lesz //padStart ele fuz a padEnd moge //Ez ilyen oraperces cucli

//Vágás
let adatok = "Sipi Rupi_Bábolna_tanuló_narancssárga"
let adatokStringTomb = adatok.split("_")
console.log(adatokStringTomb)