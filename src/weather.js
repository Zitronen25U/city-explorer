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
    const SERVER = process.env.REACT_APP_SERVER;
    console.log(SERVER);
    const weather = await axios.get(`${SERVER}weather`);
    const weatherArr = weather.data;
    console.log(weatherArr);
    this.setState({ weatherList: weatherArr });
  };

  render() {
    return (
      <>
        <h2>Here is the local weather for you!</h2>
        {this.state.weatherList.map((item, idx) => (
          <div key={idx}>
            <p>{item.date} {item.description}</p>
          </div>
        ))}
      </>
    );
  }

}

export default Weather;
