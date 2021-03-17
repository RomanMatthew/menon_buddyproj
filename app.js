// query
var input = document.querySelector('.input_text');
var query = document.querySelector('.btn-outline-primary'); // button press
// name of the query
var main = document.querySelector('#name');
// CURR DAY
var temp = document.querySelector('.temp'); // temp
var date = document.querySelector('.date'); // curr date
var desc = document.querySelector('.desc'); // description
var clouds = document.querySelector('.clouds'); // cloudiness
// IN 24 HRS
var temp1 = document.querySelector('.temp1'); // temp
var date1 = document.querySelector('.date1'); // curr date
var desc1 = document.querySelector('.desc1'); // description
var clouds1 = document.querySelector('.clouds1'); // cloudiness
// IN 48 HRS
var temp2 = document.querySelector('.temp2'); // temp
var date2 = document.querySelector('.date2'); // curr date
var desc2 = document.querySelector('.desc2'); // description
var clouds2 = document.querySelector('.clouds2'); // cloudiness
// IN 72 HRS
var temp3 = document.querySelector('.temp3'); // temp
var date3 = document.querySelector('.date3'); // curr date
var desc3 = document.querySelector('.desc3'); // description
var clouds3 = document.querySelector('.clouds3'); // cloudiness
// IN 96 HRS
var temp4 = document.querySelector('.temp4'); // temp
var date4 = document.querySelector('.date4'); // curr date
var desc4 = document.querySelector('.desc4'); // description
var clouds4 = document.querySelector('.clouds4'); // cloudiness

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
    getOutlooks()
})
cloudBtn.addEventListener('click', function(name) {
    clear()
    getCloudiness()
})

function getData() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            // show the location in the jumbotron
            var cityValue = data['city']['name'];
            var countryValue = data['city']['country'];
            main.innerHTML = cityValue + ', ' + countryValue;
            getTemps()
            getOutlooks()
            getCloudiness()
        })
        .catch(err => alert("Wrong city name!"));
}

function getTemps() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            // temp must be converted from kelvin to fahrenheit
            var tempValue = data['list'][0]['main']['temp'];
            temp.innerHTML = (Math.round(((tempValue - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
            var tempValue1 = data['list'][8]['main']['temp'];
            temp1.innerHTML = (Math.round(((tempValue1 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
            var tempValue2 = data['list'][16]['main']['temp'];
            temp2.innerHTML = (Math.round(((tempValue2 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
            var tempValue3 = data['list'][24]['main']['temp'];
            temp3.innerHTML = (Math.round(((tempValue3 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
            var tempValue4 = data['list'][32]['main']['temp'];
            temp4.innerHTML = (Math.round(((tempValue4 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
        })
        .catch(err => alert("Wrong city name!"));
}

function getOutlooks() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            var descValue = data['list'][0]['weather'][0]['description'];
            desc.innerHTML = descValue;
            var descValue1 = data['list'][8]['weather'][0]['description'];
            desc1.innerHTML = descValue1;
            var descValue2 = data['list'][16]['weather'][0]['description'];
            desc2.innerHTML = descValue2;
            var descValue3 = data['list'][24]['weather'][0]['description'];
            desc3.innerHTML = descValue3;
            var descValue4 = data['list'][32]['weather'][0]['description'];
            desc4.innerHTML = descValue4;
        })
        .catch(err => alert("Wrong city name!"));
}

function getCloudiness() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
        .then(response => response.json())
        .then(data => {
            var cloudValue = data['list'][0]['clouds']['all']
            clouds.innerHTML = cloudValue + "%";
            // NEXT DAY
            var cloudValue1 = data['list'][8]['clouds']['all']
            clouds1.innerHTML = cloudValue1 + "%";
            // NEXT DAY
            var cloudValue2 = data['list'][16]['clouds']['all']
            clouds2.innerHTML = cloudValue2 + "%";
            // NEXT DAY
            var cloudValue3 = data['list'][24]['clouds']['all']
            clouds3.innerHTML = cloudValue3 + "%";
            // NEXT DAY
            var cloudValue4 = data['list'][32]['clouds']['all']
            clouds4.innerHTML = cloudValue4 + "%";
        })
        .catch(err => alert("Wrong city name!"));
}

function clear() {
    temp.innerHTML = "";
    desc.innerHTML = "";
    clouds.innerHTML = "";
    temp1.innerHTML = "";
    desc1.innerHTML = "";
    clouds1.innerHTML = "";
    temp2.innerHTML = "";
    desc2.innerHTML = "";
    clouds2.innerHTML = "";
    temp3.innerHTML = "";
    desc3.innerHTML = "";
    clouds3.innerHTML = "";
    temp4.innerHTML = "";
    desc4.innerHTML = "";
    clouds4.innerHTML = "";
}