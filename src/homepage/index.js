import React from 'react';
import { Link } from 'react-router';

class Homepage extends React.Component {
  render() {
    return (
      <div className="App">
        <ul>
          <li>
            <Link to="/weather">
              Weather
            </Link>
          </li>
          <li>
            <Link to="/soccer">
              Soccer
            </Link>
          </li>
          <li>
            <Link to="/timeleft">
              Time left
            </Link>
          </li>
        </ul>
      </div>
    );
  }
}

export default Homepage;
