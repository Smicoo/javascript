//Dictionary (szotart kell kesziteni hogy tarolni tudjuk hogy milyen typehoz milyen szin tartozik) Map, a sima tömb ugy mukodik hogy indexet rendel hozza, a szotar (asszociativ tomb) pedig 1 kulcshoz rendeli hozza
const typeColors = new Map([
    ["normal", "#a8a878"],
    ["fire", "#f08030"],
    ["water", "#6890f0"],
    ["grass", "#78c850"],
    ["electric", "#f8d030"],
    ["ice", "#98d8d8"],
    ["fighting", "#c03028"],
    ["poison", "#a040a0"],
    ["ground", "#e0c068"],
    ["flying", "#a890f0"],
    ["psychic", "#f85888"],
    ["bug", "#a8b820"],
    ["rock", "#b8a038"],
    ["ghost", "#705898"],
    ["dragon", "#7038f8"],
    ["dark", "#705848"],
    ["steel", "#b8b8d0"],
    ["fairy", "#ee99ac"]
])

const $ = (id) => document.getElementById(id)

// function $(id){
//     return document.getElementById(id)
// }


const url = "https://pokeapi.co/api/v2/pokemon/";


//1 Adott pokemon objektumat (csomagjat kerjuk le)
let getPokeData = async() => {
    let id = Math.floor(Math.random()*1025) + 1
    const endPoint = url + id

    const response = await fetch(endPoint)
    const data = await response.json()

    updateCard(data)
}

let updateCard = (data) =>{
    const hp = data.stats[0].base_stat //Ez lesz majd a hp kiszedtuk dokumentaciobol
    const imgSrc = data.sprites.other['official-artwork'].front_default //Azert van 'official-artwork' ilyen indexbe mert nem engedi a kotojelesnel a pontot . 
    let pokeName = data.name
    pokeName = pokeName[0].toUpperCase() + pokeName.substring(1)
    const types = data.types //ez tomb amiben objektumok vannak
    const attack = data.stats[1].base_stat
    const defense = data.stats[2].base_stat
    const speed = data.stats[5].base_stat

    $("hp").innerText = "Hp: " + hp
    $("img").src = imgSrc
    $("pokename").innerText = pokeName
    $("attack").innerHTML = attack
    $("defense").innerHTML = defense
    $("speed").innerHTML = speed

    appendTypes(types)
    styleCard(types[0].type.name)
}

let appendTypes = (types) => {
    $("type").innerHTML = ""
    for(let i=0; i<types.length; i++){
        let span = document.createElement("span")
        span.textContent = types[i].type.name
        $("type").appendChild(span)
    }
}

let styleCard = (type) =>{
    const color = typeColors.get(type) //Ez a mapnek 1 fuggvenye
    $("card").style.background = `radial-gradient(circle at 50% 0%, ${color} 35%, #fff 50%)`


    $("type").querySelectorAll("span").forEach(span =>{
        span.style.backgroundColor = color
    })
}


$("btn").addEventListener("click", getPokeData)