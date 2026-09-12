//1. Tipusok
console.log(typeof(2)); //number
console.log(typeof(3.14)); //number ugyanugy nem tesz kulonbseget a js
console.log(typeof(true));
console.log(typeof("halo"));

console.log(3*'2') //Gyengen tipusos nyelv ezert -> 6 ot fog kiirni
console.log(3*'alma') //NaN -> nem egy szam ez az erteke -> Not a Number
console.log(typeof(3*'alma')) //number tipusu, az erteke nem szam, a tipusa viszont szam

console.log(3+'2') //Ugy ertelmezi mint 1 string konkatanacio
console.log(typeof(3+'2'))

//konvertalunk szamma
let a = 3
let b = '2'

console.log(a+parseInt(b)) //noob
console.log(a+b*1) //pro

let n = null //üres
let u = undefined //most üres, de később fel lesz töltve
let valami // ez is undefined lesz
//clean code konyv 20k

//Függvények (Camel-case)

function udvozol(){
    console.log('Üdvözöllek')
}

const udv = function(){ //fuggveny tipusu valtozo, ezt nem nagyon hasznaljuk, ez inkabb atvezetes a nyil fuggvenyhez
    console.log("Üdv")
}

const udv2 = () => { //nyil fuggvenys
    console.log('Üdv2')
}

udvozol()
udv()
udv2()

function negyzetreEmel(szam){
    return szam * szam
}

console.log(negyzetreEmel(2))

const negyzet = n => n * n //nyil fuggvennyel, ha CSAK 1 bemenet van akkor el lehet hagyni a zarojelet, és ha CSAK ha return van akkor a kapcsos zarojelet is el lehet hagyni 

console.log(negyzet(2))


//Tömbök, kezelo methodok
let autok = ['Audi', 'BMW', 'Dacia', 'Ford', 'Toyota']
console.log(autok[3])
console.log(autok.at(3)) //ugyanaz

for(let i = 0; i < autok.length; i++){
    console.log(autok[i])
}

// function eldont(autoNev){
//     return autoNev == 'BMW'
// }

console.log(autok.findIndex(auto => auto == 'BMW')) //A fenti hosszu fuggvenyt kicsereltuk ennyivel
console.log(autok.findIndex(auto => auto == 'Honda')) // -1 mivel nincsen benne //findLastIndex() ugyanaz csak az utolso elofordulas indexet adja meg

autok.push('Honda') //Uj elem befuzese, egyszerre tobb parameterrel is lehet
autok.push('Fiat', 'Nissan')

console.log(autok.pop()) //Utolso elem torlese, vissza is adja (returnoli)

//Spread operator -> a tömböt elemeire szétbontja pl.: ...['Alma', 'Korte', 'Eper'] -> 'Alma' , 'Körte', 'Eper'
let ujAutok =  ['Mercedes', ...autok, 'Suzuki']

console.log(ujAutok)

//Szűrés -tömbből szűr és a visszatérése egy tömb
console.log(ujAutok.filter(auto => auto == 'Honda' || auto == 'Ford'))

//töröljük ki az uj autokbol a hondakat
ujAutok = ujAutok.filter(auto => auto != 'Honda')
console.log(ujAutok)

//toString
console.log(autok.toString())

//join
console.log(autok.join(' és ')) //megtudom mondani mi alapjan fuzze ossze

//rendezés
console.log(ujAutok.sort())
console.log(ujAutok.sort().reverse()) //ez meg visszafele

//numerikus tomb rendezese
let szamok = [1, 3, 4, 5, 61, 32 , 3, 5, 6, 6]

function osszehasonlit(a, b){
    // if(a > b){
    //     return 1
    // }
    // else if(b < a){
    //     return -1
    // }
    // else{
    //     return 0 //egyenlo
    // }

    return a-b //ennyivel meg lehet csinalni
}
//ha > 0 -> csere, ha < 0 nincs csere

console.log(szamok.sort((a,b) => a-b)) 

//Eldontes - tartalmazza-e

console.log(ujAutok.includes('Ford'))
console.log(ujAutok.includes('Ford', 8)) //csak a 8. index utaniakat keresi
console.log(ujAutok.includes('Citroen'))

//Összefűzés
const c = [1,2,3]
const d = [4,5,6]
const e = c.concat(c, d)
console.log(e)

const f = [...c,...d]
console.log(f)


//Keszitsunk fuggvenyt amely szamokat ad ossze

function osszead(x,y=0,z=0,v=0){ //az elozot felul definialtuk, jsben nincsen function overload (tulterheles)
    return x+y+z+v
}

console.log(osszead(2, 7))
console.log(osszead(2, 7, 4))
console.log(osszead(2, 7, 4, 2))

//Rest parameter -> osszefuzi 1 tombbe

function szamokatAdOssze(...numbers){ //igy barmennyi parameterrel jo
    let osszeg = 0
    for(let i = 0; i<numbers.length; i++){
        osszeg += numbers[i]
    }
    return osszeg
}

console.log(szamokatAdOssze(2, 7))
console.log(szamokatAdOssze(2, 7, 4))
console.log(szamokatAdOssze(2, 7, 4, 2))

//forEach ezt akar az elozo fuggvenybe is berakhatnank
let szamok2 = [1,2,4,5,6,3,2,65,3]
let sum = 0
szamok2.forEach(x  => sum +=x) //az x az i valtozo ami vegig megy a tombon
console.log(sum)
