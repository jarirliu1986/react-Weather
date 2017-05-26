var axios = require('axios');

const OPEN_WEATHER_MAP_URL = 'http://api.openweathermap.org/data/2.5/find?units=imperial&appid=654665736c3d3790951d18712cd8116f';

//654665736c3d3790951d18712cd8116f
//api.openweathermap.org/data/2.5/find?q=London&units=imperial&appid=654665736c3d3790951d18712cd8116f

module.exports = {
  getTemp: function (location) {
    var encodedLocation = encodeURIComponent(location);
    var requestUrl = `${OPEN_WEATHER_MAP_URL}&q=${encodedLocation}`;

    return axios.get(requestUrl).then(function (res) {
      if(res.data.cod && res.data.message && res.data.list.length > 0 ){
        console.log(res.data);
        return res.data.list[0].main.temp;
      }else{
        //throw new Error(res.data.message);
        throw new Error("unable to fetch weather for that location");
      }
    }, function (res) {
      console.log("errorMessage");
      throw new Error(res.data.message);
      //throw new Error("unable to fetch weather for that location");
    });
  }
}
