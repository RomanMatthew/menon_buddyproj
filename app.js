// query
var input = document.querySelector('.input_text');
// name of the query
var main = document.querySelector('#name');
var temp = document.querySelector('.temp'); // temp
var date = document.querySelector('.date'); // curr date
var desc = document.querySelector('.desc'); // description
var clouds = document.querySelector('.clouds'); // cloudiness
var query = document.querySelector('.btn-outline-primary'); // button press

var tempBtn = document.getElementById("tempBtn")
var outlookBtn = document.getElementById("outlookBtn")
var cloudBtn = document.getElementById("cloudBtn")

query.addEventListener('click', function(name) {
    getData()
})
tempBtn.addEventListener('click', function(name) {
    clear()
    getTemps()
})
outlookBtn.addEventListener('click', function(name) {
    clear()
    getOutlook()
})
cloudBtn.addEventListener('click', function(name) {
    clear()
    getCloudiness()
})

function getData() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            //   var dateValue = data['timezone']
            var tempValue = data['list'][0]['main']['temp'];
            var nameValue = data['city']['name'];
            var descValue = data['list'][0]['weather'][0]['description'];
            var cloudValue = data['list'][0]['clouds']['all']
            main.innerHTML = nameValue;
            // temp must be converted from kelvin to fahrenheit
            temp.innerHTML = (Math.round(((tempValue - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
            desc.innerHTML = descValue;
            //   date.innerHTML = dateValue;
            clouds.innerHTML = cloudValue + "%";
            //   input.value = "";
        })
        .catch(err => alert("Wrong city name!"));
}

function getTemps() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            var tempValue = data['list'][0]['main']['temp'];
            // temp must be converted from kelvin to fahrenheit
            temp.innerHTML = (Math.round(((tempValue - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
        })
        .catch(err => alert("Wrong city name!"));
}

function getOutlook() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            var descValue = data['list'][0]['weather'][0]['description'];
            desc.innerHTML = descValue;
        })
        .catch(err => alert("Wrong city name!"));
}

function getCloudiness() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            var cloudValue = data['list'][0]['clouds']['all']
            clouds.innerHTML = cloudValue + "%";
        })
        .catch(err => alert("Wrong city name!"));
}

function clear() {
    temp.innerHTML = "";
    desc.innerHTML = "";
    clouds.innerHTML = "";
}