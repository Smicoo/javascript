const $ = id => document.getElementById(id);

async function Kereses(){

    //Ez a mostani idojaras
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


    //Most jon az 5 napos elorejelzes

    const forecastUrl = `https://api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric&lang=hu`;
    const forecastResponse = await fetch(forecastUrl)
    const forecastData = await forecastResponse.json()
    console.log(forecastData)


    fillTable(weatherData)
    fillForecastTable(forecastData)
}

let fillTable = (data) =>{

    $("jelen_idojaras").innerHTML = ""

    let tr = document.createElement('tr');

    let homerseklet = document.createElement('td');
    homerseklet.innerText = data.main.temp + `°C`;

    let hoerzet = document.createElement("td");
    hoerzet.innerText = data.main.feels_like + `°C`;

    let paratartalom = document.createElement("td");
    paratartalom.innerText = data.main.humidity + `%`;

    let legnyomas = document.createElement("td");
    legnyomas.innerText = data.main.pressure + `hPa`;

    tr.appendChild(homerseklet);
    tr.appendChild(hoerzet);
    tr.appendChild(paratartalom);
    tr.appendChild(legnyomas);

    $("jelen_idojaras").appendChild(tr);
}

let fillForecastTable = (forecastData) => {

    const forecastDataObjArray = forecastData.list;

    $("elorejelzesTemps").innerHTML = "";

    let maiDatum = new Date();

    for (let i = 1; i <= 5; i++) {

        let datum = new Date(maiDatum);
        datum.setDate(maiDatum.getDate() + i);

        let ev = datum.getFullYear();
        let honap = String(datum.getMonth() + 1).padStart(2, '0');
        let nap = String(datum.getDate()).padStart(2, '0');

        let keresettDatum = `${ev}-${honap}-${nap}`;

        for (const x of forecastDataObjArray) {

            if (x.dt_txt.startsWith(keresettDatum) &&
                x.dt_txt.includes("12:00:00")) {

                const td = document.createElement("td");
                td.innerText = x.main.temp + " °C";

                $("elorejelzesTemps").appendChild(td);
            }
        }
    }
}










$('kereses').addEventListener('click', Kereses);
$('keresett').addEventListener('keypress', event =>{
    if(event.key == 'Enter')
        Kereses();
} )