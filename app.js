$(document).ready(function() {
/* db */
var cityWeather = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
/* variables */
var cities = ["New York", "Los Angeles", "Houston"];
var date = moment().format('MMMM Do YYYY');



/* parsed weather object */


/* utility functions*/
/* get raw data */
/* parse raw data */
/* render parsed data */


/* event functions*/
    /* search button click */ 
    /* have city name */
    /* send city name to openweather api */
    /* set the weather info to the object returned (see raw) */
    
$("#submit").on("click", function(){
      var city = $("#city").val().trim();
      cities.push(city);
      $("#cities").empty();
      for(var i=0;i<cities.length;i++){
        var btn = $("<button>");
        btn.text(cities[i]);
        btn.attr("data-name",cities[i]);
        $("#cities").append(btn);
      }
      console.log("Cities: "+cities);
      var queryURL = 'https://openweathermap.org/data/2.5/weather?q=' + city + '&appid=b6907d289e10d714a6e88b30761fae22';
        $.ajax({
          url: queryURL, //"London,uk&appid=b6907d289e10d714a6e88b30761fae22",
          method: "GET"
        }).then(function(response) {
          console.log(response);
          var h3 = $("<h3>");
          h3.text(response.name);
          var dateDisplay = $('<h4>');
          dateDisplay.text(date);
          var temp = $("<p>");
          temp.text("Temperature: "+Math.floor(((response.main.temp*1.8)+32))+" °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.wind.speed + " MPH");
          $("#condition").empty();
          $("#condition").append(h3).append(temp).append(hum).append(wind);
        });

        
      });

      $(document).on("click","button",function(){
        var c = $(this).attr("data-name");
        console.log("City clicked: "+c);
        var queryURL = 'https://openweathermap.org/data/2.5/weather?q=' + c + '&appid=b6907d289e10d714a6e88b30761fae22';
        $.ajax({
          url: queryURL, //"London,uk&appid=b6907d289e10d714a6e88b30761fae22",
          method: "GET"
        }).then(function(response) {
          console.log(response);
          var description = $('<div>');
          /*var weatherDescription = JSON.parse(response.weather["'0'"].description);
          description.text(weatherDescription);
          console.log(weatherDescription); how do I get the description? */
          var h3 = $("<h3>");
          h3.text(response.name);
          var dateDisplay = $('<h4>');
          dateDisplay.text(date);
          var temp = $("<p>");
          temp.text("Temperature: "+Math.floor(((response.main.temp*1.8)+32))+" °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.wind.speed + " MPH");
          $("#condition").empty();
          $("#condition").append(h3).append(dateDisplay).append(dateDisplay).append(temp).append(hum).append(wind);
        });
      })
    


/* init */
    /* check local storage for history of cities and render them */
    $(document).ready(function() {
      $("#cities").empty();
      for(var i=0;i<cities.length;i++){
        var btn = $("<button>");
        btn.text(cities[i]);
        btn.attr("data-name",cities[i]);
        $("#cities").append(btn);
      }
      var queryURL = 'https://openweathermap.org/data/2.5/weather?q=Chicago&appid=b6907d289e10d714a6e88b30761fae22';
        $.ajax({
          url: queryURL, //"London,uk&appid=b6907d289e10d714a6e88b30761fae22",
          method: "GET"
        }).then(function(response) {
          var h3 = $("<h3>");
          h3.text(response.name);
          var dateDisplay = $('<h4>');
          dateDisplay.text(date);
          var temp = $("<p>");
          temp.text("Temperature: "+Math.floor(((response.main.temp*1.8)+32))+" °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.wind.speed + " MPH");
          $("#condition").empty();
          $("#condition").append(h3).append(dateDisplay).append(temp).append(hum).append(wind);
        });



        var forecastURL = 'https://openweathermap.org/data/2.5/forecast?q=London,us&appid=b6907d289e10d714a6e88b30761fae22'
        $.ajax({
          url: forecastURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
        });
        

      
});
});
