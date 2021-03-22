import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      location: {},
      searchQuery: '',
      imgSrc: '',
      displayResults: false
    };
  }

  getLocationInfo = async(e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.THEKEY}&q=${this.state.searchQuery}&format=json`;
    const location = await axios.get(url);
    const locationArray = location.data;

    this.setState({
      location: locationArray[0],
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.THEKEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=18`
    });

  };

  render() {
    return (
      <>
        <h1>Hello! Lets find your city!</h1>

        <form onSubmit={this.getLocationInfo}>
          <input onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="Type a City!"></input>
          <button id="button" type="submit">Submit Me</button>
        </form>


        {this.state.displayResults &&
          <>
            <h2>{this.state.location.display_name}</h2>
            <img src={this.state.imgSrc} />
          </>
        }
      </>
    );
  }
}

export default App;
