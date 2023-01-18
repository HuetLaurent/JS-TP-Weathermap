let API_KEY = "8d1ea57f5c7bb682b127c50f23b95b2b";

let btnLocation = document.getElementById("btnLocation");

btnLocation.onclick = function() {
    let location = document.getElementById("location").value;
    
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`)
    .then(response => response.json())
    .then(data =>

        {
        console.log(data);

        let ville = data.name;
        document.getElementById("ville").innerHTML = ville;

        let meteo1 = data.weather[0].main;
        document.getElementById("meteo1").innerHTML = meteo1;

        let meteo2 = data.weather[0].description;
        document.getElementById("meteo2").innerHTML = meteo2;
        }
        
    )
}