import React from 'react';
import $ from 'jquery';

// TODO GET AN AWESOME SOCCER API
const API = 'http://api.football-data.org/v1/competitions/402/fixtures?timeFrame=n10';
const TOKEN = '6a1b5a8e66ef45048eee0a835b643516';

class Soccer extends React.Component {
  componentWillMount() {
    $.ajax(API, {
      method: 'GET',
      headers: { 'X-Auth-Token': TOKEN },
      dataType: 'json',
    }).done((res) => {
      console.log(res);
    });
  }
  render() {
    return (
      <div className="App">
        Soccer
      </div>
    );
  }
}

export default Soccer;
