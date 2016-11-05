import React from 'react';
import $ from 'jquery';
import './index.css';

const API_KEY = '4f308072bff00bbec5f7db36172df29f';
const API = ['http://api.openweathermap.org/data/2.5/weather?appid=', API_KEY, '&units=metric'].join('');

function getUri(city) {
  return [API, '&q=', city].join('');
}

class Weather extends React.Component {
  constructor(props, context) {
    super(props, context);
    this.state = {
      city: '',
      min: 0,
      max: 0,
      current: 0,
      icon: null,
      description: '',
    };
  }

  componentWillMount() {
    $.ajax(getUri('Lisbon'), {
      method: 'GET',
    }).done((res) => {
      this.setState({
        city: res.name,
        min: Math.round(res.main.temp_min),
        max: Math.round(res.main.temp_max),
        current: Math.round(res.main.temp),
        icon: ['http://openweathermap.org/img/w/', res.weather[0].icon, '.png'].join(''),
        description: res.weather[0].description,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <h1>{this.state.city}</h1>
        <p>Now: {this.state.current}º C</p>
        <p>Min: {this.state.min}º C</p>
        <p>Max: {this.state.max}º C</p>
        <p>
          <span>{this.state.description}</span>
          <img alt={this.state.description} src={this.state.icon} />
        </p>
      </div>
    );
  }
}

export default Weather;
