import React, { Component } from 'react';
import Report from './report.js'
import './index.css';

class App extends Component {
  state = {
    week: [
      { day: 'Sunday', high: 75, low: 62, forecast: 'sunny', id: 1 },
      { day: 'Monday', high: 81, low: 72, forecast: 'sunny', id: 2 },
      { day: 'Tuesday', high: 84, low: 72, forecast: 'cloudy', id: 3 },
      { day: 'Wednesday', high: 78, low: 52, forecast: 'sunny', id: 4 },
      { day: 'Thursday', high: 72, low: 61, forecast: 'rain', id: 5 },
      { day: 'Friday', high: 79, low: 59, forecast: 'cloudy', id: 6 },
      { day: 'Saturday', high: 83, low: 72, forecast: 'cloudy', id: 7 }
    ]
  }
  render() {
    return (
      <div className="App">
        <h1>Weather Report</h1>
        <Report week={this.state.week} />
      </div>
    );
  }
}

export default App;
