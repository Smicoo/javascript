let szamok = [36, -2, 112, 101, 22];

//1.) Adjunk hozzá 10 új, véletlen számokat a tömbhöz, [-100, +100]

for (let i = 0; i < 10; i++) {
    let szam = Math.floor(Math.random() * 200 -100)
    szamok.push(szam);
}

console.log(szamok)

//2.) Szűrjük ki egy új tömbbe a pozitív páros számokat

let pozitivParosSzamok = szamok.filter(szam => szam%2 ==0 && szam > 0)
console.log(pozitivParosSzamok)

//3.) Döntsük el, hogy az új tömbbe van-e 100-nál nagyobb szám (true/false)
let vanSzaznalNagyobb = pozitivParosSzamok.some(szam => szam > 100) //ez nezi 1 feltetelhez h teljesul e
console.log(vanSzaznalNagyobb)

//4.) Határozzuk meg az új tömb legnagyobb értékű elemét

pozitivParosSzamok.sort((a,b) => a-b).reverse() //inkabb ez (Math.max(...ujSzamok)) mint a rendezes
console.log(pozitivParosSzamok[0])

//5.) Rendezzük az új tömböt csökkenő sorrendbe
pozitivParosSzamok.sort((a,b) => b-a)
console.log(pozitivParosSzamok)