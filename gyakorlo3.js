/* Készítsen egy Kisfonok osztályt, amely az Alkalmazott osztályból származik
    Készítse el az osztályhoz a konstruktort, illetve vegyen még fel plusszba egy tulajdonságot is:
    - hány beosztottja van a kisfőnöknek: ez csak lekérdezhető legyen, beállítani, csak a konstruktorban lehet
*/

//Osztaly != objektum

class Szemely{
    constructor(nev, foglalkozas, szuletesiEv){ //Amikor peldanyositom az objektumot, inicializalja az alapertekekekt
        this.nev = nev
        this.foglalkozas = foglalkozas
        this.szuletesiEv = szuletesiEv
    }

    hanyEves(){
        const datum = new Date()
        return datum.getFullYear()-this.szuletesiEv
    }

}

class Alkalmazott extends Szemely{
    static bonusz = 10 //statikus tag csak az az osztalyon belul, nem kell minden egyes embernel eltarolni, mindenhol egyforma a bonusz
    #azonosito = undefined //privat tag hogy kivulrol ne lehessen elerni, getter setter kell, es ha ezen keresztul tudom szabalyozni a hozzaferest

    constructor(nev, foglalkozas, szuletesiEv, fizetes){ 
        super(nev, foglalkozas, szuletesiEv)
        this.fizetes = fizetes
    }

    get azonosito(){ return this.#azonosito}
    set azonosito(azon){
        if(typeof(azon) == "number"){
            this.#azonosito = azon
        }
    }
    
    //Függvény ami megmondja az e havi fizetést:
    // - ha december van, akkor az alap fizetés + bonusz
    //különben: az alap fizetés
    fizetesEbbenAHonapban(){ //jsben a honapok azok 0 tol kezdodnek 11. honap a december crazy
        if(new Date().getMonth() == 11){
            return this.fizetes*(1+(Alkalmazott.bonusz/100))
        }
        else{
            return this.fizetes
        }
    }
}

class Kisfonok extends Alkalmazott{
    #beosztottakSzama = undefined

    constructor(nev, foglalkozas, szuletesiEv, fizetes){
        super(nev, foglalkozas, szuletesiEv, fizetes)
    }

    get beosztottakSzama(){return this.#beosztottakSzama}
    set beosztottakSzama(szam){
        szam = Math.random() * 10
    }
    
}

let bela = new Szemely("Bela", "kemenysepro", 1968)
console.log(`${bela.nev} ${bela.hanyEves()} éves`)

let irenke = new Alkalmazott("Iren", "recepcios", "1974", 676767)
irenke.azonosito = 123214 //Igy mar tudjuk hasznalni a propertyt
irenke.azonosito = "asd sad "
console.log(irenke) //nem engedi megvaltoztatni mivel betut akartunk megadni
console.log(`${irenke.nev} fizetése: ${irenke.fizetesEbbenAHonapban()} forint`)

let boss = new Kisfonok("Boss", "Kisfonok", "1942")