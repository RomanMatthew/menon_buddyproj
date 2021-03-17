const APIKEY = '279e2439d044335148c1233102102740'
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
var precip = document.querySelector('.precip'); // cloudiness
// IN 24 HRS
var temp1 = document.querySelector('.temp1'); // temp
var date1 = document.querySelector('.date1'); // curr date
var desc1 = document.querySelector('.desc1'); // description
var clouds1 = document.querySelector('.clouds1'); // cloudiness
var precip1 = document.querySelector('.precip1'); // cloudiness
// IN 48 HRS
var temp2 = document.querySelector('.temp2'); // temp
var date2 = document.querySelector('.date2'); // curr date
var desc2 = document.querySelector('.desc2'); // description
var clouds2 = document.querySelector('.clouds2'); // cloudiness
var precip2 = document.querySelector('.precip2'); // cloudiness
// IN 72 HRS
var temp3 = document.querySelector('.temp3'); // temp
var date3 = document.querySelector('.date3'); // curr date
var desc3 = document.querySelector('.desc3'); // description
var clouds3 = document.querySelector('.clouds3'); // cloudiness
var precip3 = document.querySelector('.precip3'); // cloudiness
// IN 96 HRS
var temp4 = document.querySelector('.temp4'); // temp
var date4 = document.querySelector('.date4'); // curr date
var desc4 = document.querySelector('.desc4'); // description
var clouds4 = document.querySelector('.clouds4'); // cloudiness
var precip4 = document.querySelector('.precip4'); // cloudiness

var tempBtn = document.getElementById("tempBtn")
var outlookBtn = document.getElementById("outlookBtn")
var cloudBtn = document.getElementById("cloudBtn")
var precipBtn = document.getElementById("precipBtn")
var weekBtn = document.getElementById("weekBtn")
var dayBtn = document.getElementById("dayBtn")
var dayBtn1 = document.getElementById("dayBtn1")
var dayBtn2 = document.getElementById("dayBtn2")
var dayBtn3 = document.getElementById("dayBtn3")
var dayBtn4 = document.getElementById("dayBtn4")

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
precipBtn.addEventListener('click', function(name) {
    clear()
    getPrecipProbs()
})
weekBtn.addEventListener('click', function(name) {
    clear()
    getData()
})
dayBtn.addEventListener('click', function(name) {
    clear()
    getDay(0)
})
dayBtn1.addEventListener('click', function(name) {
    clear()
    getDay(1)
})
dayBtn2.addEventListener('click', function(name) {
    clear()
    getDay(2)
})
dayBtn3.addEventListener('click', function(name) {
    clear()
    getDay(3)
})
dayBtn4.addEventListener('click', function(name) {
    clear()
    getDay(4)
})

function getData() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + APIKEY)
        .then(response => response.json())
        .then(data => {
            // show the location in the jumbotron
            var cityValue = data['city']['name'];
            var countryValue = data['city']['country'];
            main.innerHTML = cityValue + ', ' + countryValue;
            getTemps()
            getOutlooks()
            getCloudiness()
            getPrecipProbs()
        })
        .catch(err => alert("Wrong city name!"));
}

function getDay(num) {
    clear()
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + APIKEY)
        .then(response => response.json())
        .then(data => {
            if (num == 0) {
                var precipValue = data['list'][0]['pop'];
                precip.innerHTML = precipValue * 100 + '%';
                var tempValue = data['list'][0]['main']['temp'];
                temp.innerHTML = (Math.round(((tempValue - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
                var descValue = data['list'][0]['weather'][0]['description'];
                desc.innerHTML = descValue;
                var cloudValue = data['list'][0]['clouds']['all']
                clouds.innerHTML = cloudValue + "%";
            }
            if (num == 1) {
                var precipValue1 = data['list'][8]['pop'];
                precip1.innerHTML = precipValue1 * 100 + '%';
                var tempValue1 = data['list'][8]['main']['temp'];
                temp1.innerHTML = (Math.round(((tempValue1 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
                var descValue1 = data['list'][8]['weather'][0]['description'];
                desc1.innerHTML = descValue1;
                var cloudValue1 = data['list'][8]['clouds']['all']
                clouds1.innerHTML = cloudValue1 + "%";
            }
            if (num == 2) {
                var precipValue2 = data['list'][16]['pop'];
                precip2.innerHTML = precipValue2 * 100 + '%';
                var tempValue2 = data['list'][16]['main']['temp'];
                temp2.innerHTML = (Math.round(((tempValue2 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
                var descValue2 = data['list'][16]['weather'][0]['description'];
                desc2.innerHTML = descValue2;
                var cloudValue2 = data['list'][16]['clouds']['all']
                clouds2.innerHTML = cloudValue2 + "%";
            }
            if (num == 3) {
                var precipValue3 = data['list'][24]['pop'];
                precip3.innerHTML = precipValue3 * 100 + '%';
                var tempValue3 = data['list'][24]['main']['temp'];
                temp3.innerHTML = (Math.round(((tempValue3 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
                var descValue3 = data['list'][24]['weather'][0]['description'];
                desc3.innerHTML = descValue3;
                var cloudValue3 = data['list'][24]['clouds']['all']
                clouds3.innerHTML = cloudValue3 + "%";
            }
            if (num == 4) {
                var precipValue4 = data['list'][32]['pop'];
                precip4.innerHTML = precipValue4 * 100 + '%';
                var tempValue4 = data['list'][32]['main']['temp'];
                temp4.innerHTML = (Math.round(((tempValue4 - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
                var descValue4 = data['list'][32]['weather'][0]['description'];
                desc4.innerHTML = descValue4;
                var cloudValue4 = data['list'][32]['clouds']['all']
                clouds4.innerHTML = cloudValue4 + "%";
            }
        })
        .catch(err => alert("Wrong city name!"));
}

function getPrecipProbs() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + APIKEY)
        .then(response => response.json())
        .then(data => {
            var precipValue = data['list'][0]['pop'];
            precip.innerHTML = precipValue * 100 + '%';
            var precipValue1 = data['list'][8]['pop'];
            precip1.innerHTML = precipValue1 * 100 + '%';
            var precipValue2 = data['list'][16]['pop'];
            precip2.innerHTML = precipValue2 * 100 + '%';
            var precipValue3 = data['list'][24]['pop'];
            precip3.innerHTML = precipValue3 * 100 + '%';
            var precipValue4 = data['list'][32]['pop'];
            precip4.innerHTML = precipValue4 * 100 + '%';
        })
        .catch(err => alert("Wrong city name!"));
}

function getTemps() {
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + APIKEY)
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
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + APIKEY)
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
    fetch('https://api.openweathermap.org/data/2.5/forecast?q=' + input.value + '&appid=' + APIKEY)
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
    precip.innerHTML = "";
    temp1.innerHTML = "";
    desc1.innerHTML = "";
    clouds1.innerHTML = "";
    precip1.innerHTML = "";
    temp2.innerHTML = "";
    desc2.innerHTML = "";
    clouds2.innerHTML = "";
    precip2.innerHTML = "";
    temp3.innerHTML = "";
    desc3.innerHTML = "";
    clouds3.innerHTML = "";
    precip3.innerHTML = "";
    temp4.innerHTML = "";
    desc4.innerHTML = "";
    clouds4.innerHTML = "";
    precip4.innerHTML = "";
}