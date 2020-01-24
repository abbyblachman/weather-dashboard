$(document).ready(function() {
  /* variables */
  var date = moment().format('MMMM Do YYYY');
  var cities = ["CHICAGO", "NEW YORK", "LOS ANGELES", "HOUSTON"];
  
  /*function*/
  function init(response) {
  
      var h3 = $("<h3>");
            h3.text(response.name);
            var description = $('<p>');
            description.text((response.weather[0].description).toUpperCase());
            var icon = $('<img src="https://openweathermap.org/img/wn/'+response.weather[0].icon+'@2x.png">');
            icon.attr('style', 'width:3rem; height:3rem;');
            var dateDisplay = $('<h4>');
            dateDisplay.text(date);
            var temp = $("<p>");
            temp.text("Temperature: "+Math.floor(((response.main.temp*1.8)+32))+" °F");
            var hum = $("<p>");
            hum.text("Humidity: "+ response.main.humidity + "%");
            var wind = $("<p>");
            wind.text("Wind speed: " + response.wind.speed + " MPH");
            $("#condition").empty();
            $("#condition").append(h3).append(dateDisplay).append(description).append(icon).append(temp).append(hum).append(wind);
  };
  
  function forecast(response) {
        var forecastData = response.list;  
        $('#forecast').empty();
        for (var i=0;i<5;i++){ 
           
            var forecastDiv = $('<div>');
            forecastDiv.attr('class', 'card weather-card');
            var h4 = $('<h5>');
            var dateForecast = moment().add(i + 1, 'day').format('MMMM Do YYYY');
            h4.text(dateForecast);
            var description = $('<p>');
            description.text((forecastData[i].weather[0].description).toUpperCase());
            var temp = $('<p>');
            var icon = $('<img src="https://openweathermap.org/img/wn/'+forecastData[i].weather[0].icon+'@2x.png">');
            icon.attr('style', 'width:3rem; height:3rem;');
            temp.html("Temperature: <br> " + Math.floor((forecastData[i].main.temp))+ " °F");
            var hum = $("<p>");
            hum.text("Humidity: "+ forecastData[i].main.humidity + "%");
            var wind = $("<p>");
            wind.html("Wind speed: <br>" + forecastData[i].wind.speed + " MPH");
            forecastDiv.append(h4).append(description).append(icon).append(temp).append(hum).append(wind);
            $('#forecast').append(forecastDiv);
            }
            
  };
  
  /* event functions */
  $(document).on("click","button",function(){
    var c = $(this).attr("data-name");
    console.log("City clicked: "+c);
    var queryURL = 'https://openweathermap.org/data/2.5/weather?q=' + c + '&appid=b6907d289e10d714a6e88b30761fae22';
    $.ajax({
      url: queryURL, //"London,uk&appid=b6907d289e10d714a6e88b30761fae22",
      method: "GET"
    }).then(function(response) {
      init(response);
    });
    var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + c + '&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial';
          $.ajax({
            url: forecastURL,
            method: "GET"
          }).then(function(response) {
          forecast(response);
  });
  });
  
    $("#submit").on("click", function(){
      var city = $("#city").val().trim();
      cityCaps = city.toUpperCase();
      cities.push(cityCaps);
      $("#cities").empty();
      for(var i=0;i<cities.length;i++){
        var btn = $("<button>");
        btn.text(cities[i]);
        btn.attr("data-name",cities[i]);
        btn.attr("class", "badge badge-light");
        btn.attr("style", "font-size: 1rem; margin: 0.3rem;");
        $("#cities").append(btn);
      }
      var queryURL = 'https://openweathermap.org/data/2.5/weather?q=' + city + '&appid=b6907d289e10d714a6e88b30761fae22';
          $.ajax({
            url: queryURL, //"London,uk&appid=b6907d289e10d714a6e88b30761fae22",
            method: "GET"
          }).then(function(response) {
            init(response);
          });
      var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial';
      $.ajax({
        url: forecastURL,
        method: "GET"
      }).then(function(response) {
      forecast(response);
        });
      });
      
      
  
  
  /* init functions */
  $(document).ready(function(){
    var map, infoWindow;
    infoWindow = new google.maps.InfoWindow;
    

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(function(position) {
        var pos = {
          lat: position.coords.latitude,
          lng: position.coords.longitude
        };
        console.log(pos);

        /*infoWindow.setPosition(pos);
        infoWindow.setContent('Location found.');
        infoWindow.open(map);
        map.setCenter(pos);*/
      }, function() {
        handleLocationError(true, infoWindow, map.getCenter());
      });
    } else {
      // Browser doesn't support Geolocation
      handleLocationError(false, infoWindow, map.getCenter());
    }

      $("#cities").empty();
      for(var i=0;i<cities.length;i++){
        var btn = $("<button>");
        btn.text(cities[i]);
        btn.attr("data-name",cities[i]);
        btn.attr("class", "badge badge-light");
        btn.attr("style", "font-size: 1rem; margin: 0.3rem;");
        $("#cities").append(btn);
      }
      var queryURL = 'https://openweathermap.org/data/2.5/weather?q=chicago&appid=b6907d289e10d714a6e88b30761fae22';
          $.ajax({
            url: queryURL, //"London,uk&appid=b6907d289e10d714a6e88b30761fae22",
            method: "GET"
          }).then(function(response) {
          init(response);
      });
      var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial';
          $.ajax({
            url: forecastURL,
            method: "GET"
          }).then(function(response) {
            console.log(response);
          forecast(response);
        }
      );
  }); 
  
  });