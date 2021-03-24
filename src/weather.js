import React from 'react';
import axios from 'axios';


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      weatherList: []
    };
  }

  componentDidMount = async () => {
    const SERVER = 'http//localhost:3001';
    const weather = await axios.get(`${SERVER}/weather`);
    const weatherArr = weather.data;
    console.log(weatherArr);
    this.setState({ weatherList: weatherArr });
  };

  render() {
    return (
      <>
        <h2>Heres your data eh</h2>
        {this.state.weatherList.map((item) => (
          <div>
            {item}
          </div>
        ))}
      </>
    );
  }

}

export default Weather;
