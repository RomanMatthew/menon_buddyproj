  var input = document.querySelector('.input_text');
  var main = document.querySelector('#name');
  var temp = document.querySelector('.temp');
  var desc = document.querySelector('.desc');
  var clouds = document.querySelector('.clouds');
  var button = document.querySelector('.btn-outline-primary');

  button.addEventListener('click', function(name) {
      fetch('https://api.openweathermap.org/data/2.5/weather?q=' + input.value + '&appid=279e2439d044335148c1233102102740')
          .then(response => response.json())
          .then(data => {
              var tempValue = data['main']['temp'];
              var nameValue = data['name'];
              var descValue = data['weather'][0]['description'];
              var cloudValue = data['clouds']['all']
              main.innerHTML = nameValue;
              // temp must be converted from kelvin to fahrenheit
              temp.innerHTML = "Temperature: " + (Math.round(((tempValue - 273.15) * (9 / 5) + 32) * 10) / 10) + " deg. F";
              desc.innerHTML = "Outlook: " + descValue;
              clouds.innerHTML = "Cloudiness: " + cloudValue + "%";
              input.value = "";
          })
          .catch(err => alert("Wrong city name!"));
  })

  // var button = document.querySelector('.button')
  // var inputValue = document.querySelector('.inputValue')
  // var name = document.querySelector('.name')
  // var desc = document.querySelector('.desc')
  // var temp = document.querySelector('.temp')
  // var apiKey = '279e2439d044335148c1233102102740'

  // button.addEventListener('click', function() {
  //     fetch('pro.openweathermap.org/data/2.5/forecast/hourly?q=' +
  //             inputValue.value + '&appid=' + apiKey)
  //         .then(response => response.json())
  //         .then(data => {
  //             var tempValue = data['main']['temp'];
  //             var nameValue = data['name'];
  //             var descValue = data['weather'][0]['description'];

  //             main.innerHTML = nameValue;
  //             desc.innerHTML = "Desc - " + descValue;
  //             temp.innerHTML = "Temp - " + tempValue;
  //             input.value = "";

  //         })

  //     // .catch(err => alert("Wrong city name!"));
  // })