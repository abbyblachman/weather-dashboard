$(document).ready(function() {
/* db */
var cityWeather = 'https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=b6907d289e10d714a6e88b30761fae22';
/* variables */
var cities = ["New York", "Los Angeles", "Houston"];
var date = moment().format('MMMM Do YYYY');
var dayOne = moment().add(1, 'days').format('LL');
var dayTwo = moment().add(2, 'days').format('LL');
var dayThree = moment().add(3, 'days').format('LL');
var dayFour = moment().add(4, 'days').format('LL');
var dayFive = moment().add(5, 'days').format('LL');



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
        btn.attr("class", "badge badge-light");
        btn.attr("style", "font-size: 1rem; margin: 0.3rem;");
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
          var description = $('<p>');
          description.text((response.weather[0].description).toUpperCase());
          var dateDisplay = $('<h4>');
          dateDisplay.text(date);
          var temp = $("<p>");
          temp.text("Temperature: "+Math.floor(((response.main.temp*1.8)+32))+" °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.wind.speed + " MPH");
          $("#condition").empty();
          $("#condition").append(h3).append(dateDisplay).append(description).append(temp).append(hum).append(wind);
        });
        var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + city + '&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial'
        $.ajax({
          url: forecastURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
          var h4 = $('<h5>');
          h4.text(dayOne);
          var description = $('<p>');
          description.text((response.list[0].weather[0].description).toUpperCase());
          var temp = $('<p>');
          temp.text("Temperature: " + Math.floor((response.list[0].main.temp))+ " °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.list[0].main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.list[0].wind.speed + " MPH");
          $('#dayOne').empty();
          $('#dayOne').append(h4).append(description).append(temp).append(hum).append(wind);
          var h4Two = $('<h5>');
          h4Two.text(dayTwo);
          var descriptionTwo = $('<p>');
          descriptionTwo.text((response.list[1].weather[0].description).toUpperCase());
          var tempTwo = $('<p>');
          tempTwo.text("Temperature: " + Math.floor((response.list[1].main.temp))+ " °F");
          var humTwo = $("<p>");
          humTwo.text("Humidity: "+ response.list[1].main.humidity + "%");
          var windTwo = $("<p>");
          windTwo.text("Wind speed: " + response.list[1].wind.speed + " MPH");
          $('#dayTwo').empty();
          $('#dayTwo').append(h4Two).append(descriptionTwo).append(tempTwo).append(humTwo).append(windTwo);
          var h4Three = $('<h5>');
          h4Three.text(dayThree);
          var descriptionThree = $('<p>');
          descriptionThree.text((response.list[2].weather[0].description).toUpperCase());
          var tempThree = $('<p>');
          tempThree.text("Temperature: " + Math.floor((response.list[2].main.temp))+ " °F");
          var humThree = $("<p>");
          humThree.text("Humidity: "+ response.list[2].main.humidity + "%");
          var windThree = $("<p>");
          windThree.text("Wind speed: " + response.list[2].wind.speed + " MPH");
          $('#dayThree').empty();
          $('#dayThree').append(h4Three).append(descriptionThree).append(tempThree).append(humThree).append(windThree);
          var h4Four = $('<h5>');
          h4Four.text(dayFour);
          var descriptionFour = $('<p>');
          descriptionFour.text((response.list[3].weather[0].description).toUpperCase());
          var tempFour = $('<p>');
          tempFour.text("Temperature: " + Math.floor((response.list[3].main.temp))+ " °F");
          var humFour = $("<p>");
          humFour.text("Humidity: "+ response.list[3].main.humidity + "%");
          var windFour = $("<p>");
          windFour.text("Wind speed: " + response.list[3].wind.speed + " MPH");
          $('#dayFour').empty();
          $('#dayFour').append(h4Four).append(descriptionFour).append(tempFour).append(humFour).append(windFour);
          var h4Five = $('<h5>');
          h4Five.text(dayFive);
          var descriptionFive = $('<p>');
          descriptionFive.text((response.list[4].weather[0].description).toUpperCase());
          var tempFive = $('<p>');
          tempFive.text("Temperature: " + Math.floor((response.list[4].main.temp))+ " °F");
          var humFive = $("<p>");
          humFive.text("Humidity: "+ response.list[4].main.humidity + "%");
          var windFive = $("<p>");
          windFive.text("Wind speed: " + response.list[4].wind.speed + " MPH");
          $('#dayFive').empty();
          $('#dayFive').append(h4Five).append(descriptionFive).append(tempFive).append(humFive).append(windFive);
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
          var description = $('<p>');
          description.text((response.weather[0].description).toUpperCase());
          var dateDisplay = $('<h4>');
          dateDisplay.text(date);
          var temp = $("<p>");
          temp.text("Temperature: "+Math.floor(((response.main.temp*1.8)+32))+" °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.wind.speed + " MPH");
          $("#condition").empty();
          $("#condition").append(h3).append(dateDisplay).append(description).append(dateDisplay).append(temp).append(hum).append(wind);
        });
        var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=' + c + '&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial'
        $.ajax({
          url: forecastURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
          var h4 = $('<h5>');
          h4.text(dayOne);
          var description = $('<p>');
          description.text((response.list[0].weather[0].description).toUpperCase());
          var temp = $('<p>');
          temp.text("Temperature: " + Math.floor((response.list[0].main.temp))+ " °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.list[0].main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.list[0].wind.speed + " MPH");
          $('#dayOne').empty();
          $('#dayOne').append(h4).append(description).append(temp).append(hum).append(wind);
          var h4Two = $('<h5>');
          h4Two.text(dayTwo);
          var descriptionTwo = $('<p>');
          descriptionTwo.text((response.list[1].weather[0].description).toUpperCase());
          var tempTwo = $('<p>');
          tempTwo.text("Temperature: " + Math.floor((response.list[1].main.temp))+ " °F");
          var humTwo = $("<p>");
          humTwo.text("Humidity: "+ response.list[1].main.humidity + "%");
          var windTwo = $("<p>");
          windTwo.text("Wind speed: " + response.list[1].wind.speed + " MPH");
          $('#dayTwo').empty();
          $('#dayTwo').append(h4Two).append(descriptionTwo).append(tempTwo).append(humTwo).append(windTwo);
          var h4Three = $('<h5>');
          h4Three.text(dayThree);
          var descriptionThree = $('<p>');
          descriptionThree.text((response.list[2].weather[0].description).toUpperCase());
          var tempThree = $('<p>');
          tempThree.text("Temperature: " + Math.floor((response.list[2].main.temp))+ " °F");
          var humThree = $("<p>");
          humThree.text("Humidity: "+ response.list[2].main.humidity + "%");
          var windThree = $("<p>");
          windThree.text("Wind speed: " + response.list[2].wind.speed + " MPH");
          $('#dayThree').empty();
          $('#dayThree').append(h4Three).append(descriptionThree).append(tempThree).append(humThree).append(windThree);
          var h4Four = $('<h5>');
          h4Four.text(dayFour);
          var descriptionFour = $('<p>');
          descriptionFour.text((response.list[3].weather[0].description).toUpperCase());
          var tempFour = $('<p>');
          tempFour.text("Temperature: " + Math.floor((response.list[3].main.temp))+ " °F");
          var humFour = $("<p>");
          humFour.text("Humidity: "+ response.list[3].main.humidity + "%");
          var windFour = $("<p>");
          windFour.text("Wind speed: " + response.list[3].wind.speed + " MPH");
          $('#dayFour').empty();
          $('#dayFour').append(h4Four).append(descriptionFour).append(tempFour).append(humFour).append(windFour);
          var h4Five = $('<h5>');
          h4Five.text(dayFive);
          var descriptionFive = $('<p>');
          descriptionFive.text((response.list[4].weather[0].description).toUpperCase());
          var tempFive = $('<p>');
          tempFive.text("Temperature: " + Math.floor((response.list[4].main.temp))+ " °F");
          var humFive = $("<p>");
          humFive.text("Humidity: "+ response.list[4].main.humidity + "%");
          var windFive = $("<p>");
          windFive.text("Wind speed: " + response.list[4].wind.speed + " MPH");
          $('#dayFive').empty();
          $('#dayFive').append(h4Five).append(descriptionFive).append(tempFive).append(humFive).append(windFive);
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
        btn.attr("class", "badge badge-light");
        btn.attr("style", "font-size: 1rem; margin: 0.3rem;");
        $("#cities").append(btn);
      }
      var queryURL = 'https://openweathermap.org/data/2.5/weather?q=Chicago&appid=b6907d289e10d714a6e88b30761fae22';
        $.ajax({
          url: queryURL, //"London,uk&appid=b6907d289e10d714a6e88b30761fae22",
          method: "GET"
        }).then(function(response) {
          var h3 = $("<h3>");
          h3.text(response.name);
          var description = $('<p>');
          description.text((response.weather[0].description).toUpperCase());
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



        var forecastURL = 'https://api.openweathermap.org/data/2.5/forecast?q=Chicago&appid=7ba67ac190f85fdba2e2dc6b9d32e93c&units=imperial'
        $.ajax({
          url: forecastURL,
          method: "GET"
        }).then(function(response) {
          console.log(response);
          var h4 = $('<h5>');
          h4.text(dayOne);
          var description = $('<p>');
          description.text((response.list[0].weather[0].description).toUpperCase());
          var temp = $('<p>');
          temp.text("Temperature: " + Math.floor((response.list[0].main.temp))+ " °F");
          var hum = $("<p>");
          hum.text("Humidity: "+ response.list[0].main.humidity + "%");
          var wind = $("<p>");
          wind.text("Wind speed: " + response.list[0].wind.speed + " MPH");
          $('#dayOne').empty();
          $('#dayOne').append(h4).append(description).append(temp).append(hum).append(wind);
          var h4Two = $('<h5>');
          h4Two.text(dayTwo);
          var descriptionTwo = $('<p>');
          descriptionTwo.text((response.list[1].weather[0].description).toUpperCase());
          var tempTwo = $('<p>');
          tempTwo.text("Temperature: " + Math.floor((response.list[1].main.temp))+ " °F");
          var humTwo = $("<p>");
          humTwo.text("Humidity: "+ response.list[1].main.humidity + "%");
          var windTwo = $("<p>");
          windTwo.text("Wind speed: " + response.list[1].wind.speed + " MPH");
          $('#dayTwo').empty();
          $('#dayTwo').append(h4Two).append(descriptionTwo).append(tempTwo).append(humTwo).append(windTwo);
          var h4Three = $('<h5>');
          h4Three.text(dayThree);
          var descriptionThree = $('<p>');
          descriptionThree.text((response.list[2].weather[0].description).toUpperCase());
          var tempThree = $('<p>');
          tempThree.text("Temperature: " + Math.floor((response.list[2].main.temp))+ " °F");
          var humThree = $("<p>");
          humThree.text("Humidity: "+ response.list[2].main.humidity + "%");
          var windThree = $("<p>");
          windThree.text("Wind speed: " + response.list[2].wind.speed + " MPH");
          $('#dayThree').empty();
          $('#dayThree').append(h4Three).append(descriptionThree).append(tempThree).append(humThree).append(windThree);
          var h4Four = $('<h5>');
          h4Four.text(dayFour);
          var descriptionFour = $('<p>');
          descriptionFour.text((response.list[3].weather[0].description).toUpperCase());
          var tempFour = $('<p>');
          tempFour.text("Temperature: " + Math.floor((response.list[3].main.temp))+ " °F");
          var humFour = $("<p>");
          humFour.text("Humidity: "+ response.list[3].main.humidity + "%");
          var windFour = $("<p>");
          windFour.text("Wind speed: " + response.list[3].wind.speed + " MPH");
          $('#dayFour').empty();
          $('#dayFour').append(h4Four).append(descriptionFour).append(tempFour).append(humFour).append(windFour);
          var h4Five = $('<h5>');
          h4Five.text(dayFive);
          var descriptionFive = $('<p>');
          descriptionFive.text((response.list[4].weather[0].description).toUpperCase());
          var tempFive = $('<p>');
          tempFive.text("Temperature: " + Math.floor((response.list[4].main.temp))+ " °F");
          var humFive = $("<p>");
          humFive.text("Humidity: "+ response.list[4].main.humidity + "%");
          var windFive = $("<p>");
          windFive.text("Wind speed: " + response.list[4].wind.speed + " MPH");
          $('#dayFive').empty();
          $('#dayFive').append(h4Five).append(descriptionFive).append(tempFive).append(humFive).append(windFive);
        });
        

      
});
});
