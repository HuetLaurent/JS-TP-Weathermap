let API_KEY = "8d1ea57f5c7bb682b127c50f23b95b2b";

let fleche = document.getElementById("divUne");
fleche.hidden = true;

let btnLocation = document.getElementById("btnLocation");

btnLocation.onclick = function() {
    fleche.hidden = false;
    let location = document.getElementById("location").value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data =>

        {
        console.log(data);

        let ville = data.name;
        document.getElementById("ville").innerHTML = ville;
        if (ville.length <= 10) {
            document.getElementById("ville").style.fontSize = "60px";
        } else {
            document.getElementById("ville").style.fontSize = "30px";
        }

        let meteo1 = data.weather[0].main;
        document.getElementById("meteo1").innerHTML = `Weather : ${meteo1}`;
            
        let meteo2 = data.weather[0].description;
        document.getElementById("meteo2").innerHTML = meteo2;

        let wind = "Wind :";
        document.getElementById("wind").innerHTML = wind;

        let deg = data.wind.deg;
        document.getElementById("deg").innerHTML = `${deg}°`;

        let speed = data.wind.speed;
        document.getElementById("speed").innerHTML = `${speed} Km/h`;

        document.getElementById("arrow").style.transform = `rotate(${deg}deg)`;

        //##################################################
        
        let temperature1 = Math.round(data.main.temp - 273.15);
        document.getElementById("temperature1").innerHTML = `${temperature1}C°`;

        let temperature2 = data.main.temp;
        document.getElementById("temperature2").innerHTML = `${temperature2} Kelvin`;

        let coordinate = "coordinate :";
        document.getElementById("coordinate").innerHTML = coordinate;

        let coordinate1 = data.coord.lat;
        document.getElementById("coordinate1").innerHTML = coordinate1;

        let coordinate2 = data.coord.lon;
        document.getElementById("coordinate2").innerHTML = coordinate2;

        let timeZ = "Time zone: "
        document.getElementById("timeZ").innerHTML = timeZ;

        let timeZone = data.timezone;
        document.getElementById("timeZone").innerHTML = timeZone;
        }
  
    )
}