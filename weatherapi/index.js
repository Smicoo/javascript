const $ = id => document.getElementById(id);

async function Kereses(){
    let keresett = $('keresett').value.trim();

    const apiKey = 'a8010f849066d5470a5f1734bced3064'
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${keresett},HU,36&limit=5&appid=${apiKey}`;

    const response = await fetch(url);
    const data = await response.json();
    console.log(data);


    const hely = data[0];
    const lat = hely.lat;
    const lon = hely.lon;

    console.log('Település:', hely.name);
    console.log('Szélesség:', lat);
    console.log('Hosszúság:', lon);

    const weatherUrl = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=hu`;

    const weatherResponse = await fetch(weatherUrl);
    const weatherData = await weatherResponse.json();

    // console.log(weatherData);

    // console.log('Hőmérséklet:', weatherData.main.temp);
    // console.log('Hőérzet:', weatherData.main.feels_like);
    // console.log('Páratartalom:', weatherData.main.humidity);
    // console.log('Légnyomás:', weatherData.main.pressure);

    fillTable(weatherData)
}

let fillTable = (data) =>{

    $("idojaras").innerHTML = ""
    
    const adatok = data.list
    for(let adat of adatok){
        let tr = document.createElement('tr');

        let homerseklet = document.createElement('td');
        homerseklet.innerText = adat.main.temp;

        let hoerzet = document.createElement("td")
        hoerzet.innerText = adat.main.feels_like

        let paratartalom = document.createElement("td")
        paratartalom.innerText = adat.main.humidity

        let legnyomas = document.createElement("td")
        legnyomas.innerText = adat.main.pressure

        tr.appendChild(homerseklet)
        tr.appendChild(hoerzet)
        tr.appendChild(paratartalom)
        tr.appendChild(legnyomas)
        $("idojaras").appendChild(tr)
    }
}








$('kereses').addEventListener('click', Kereses);
$('keresett').addEventListener('keypress', event =>{
    if(event.key == 'Enter')
        Kereses();
} )