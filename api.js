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

    $("hp").innerText = hp
    $("img").src = imgSrc
    $("pokename").innerText = pokeName
    $("attack").innerHTML = attack
    $("defense").innerHTML = defense
    $("speed").innerHTML = speed

    appendTypes(types)
}

let appendTypes = (types) => {
    $("type").innerHTML = ""
    for(let i=0; i<types.length; i++){
        let span = document.createElement("span")
        span.textContent = types[i].type.name
        $("type").appendChild(span)
    }
}

$("btn").addEventListener("click", getPokeData)