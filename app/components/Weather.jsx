var React = require('react');

var WeatherForm = require('WeatherForm');
var WeatherMessage = require('WeatherMessage');
var openWeatherMap = require('openWeatherMap');

var Weather = React.createClass({
  getInitialState: function () {
    return {
      isLoading: false
    };
  },
  handleSearch: function (location) {
    var that = this;
    //debugger;
    this.setState({
      isLoading: true
    });

    openWeatherMap.getTemp(location).then(function(temp){
      console.log("----------1");
      that.setState({
        isLoading: false,
        location: location,
        temp: temp
      })
    },function (errorMessage) {
      console.log("----------2");
      that.setState({
        isLoading: false
      });
      alert(errorMessage);
    });
  },
  render: function () {
    var {isLoading, temp, location} = this.state;

    function renderMessage() {
        if(isLoading){
          return (
            <h3>Fetching weather...</h3>
          );
        }else if (temp && location) {
          return (
            <WeatherMessage temp={temp} location={location}/>
          );
        }
    }

    return (
      <div>
        <h3>Weather Component</h3>
        <WeatherForm onSearch={this.handleSearch}/>
        {renderMessage()}
      </div>
    );
  }
});

module.exports = Weather;