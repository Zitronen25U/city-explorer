import React from 'react';
import axios from 'axios';
import './App.css';
import Card from 'react-bootstrap/Card';
import 'bootstrap/dist/css/bootstrap.min.css';


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

  getLocationInfo = async (e) => {
    e.preventDefault();
    const url = `https://us1.locationiq.com/v1/search.php?key=${process.env.REACT_APP_THEKEY}&q=${this.state.searchQuery}&format=json`;
    console.log(url);
    const location = await axios.get(url);
    const locationArray = location.data;

    this.setState({
      location: locationArray[0],
      displayResults: true,
      imgSrc: `https://maps.locationiq.com/v3/staticmap?key=${process.env.REACT_APP_THEKEY}&center=${locationArray[0].lat},${locationArray[0].lon}&zoom=12`
    });

  };

  render() {
    console.log(this.state.searchQuery);
    return (
      <>
        <h1 id="hello">Hello! Lets find your city!</h1>

        <form id="form" onSubmit={this.getLocationInfo}>
          <input class="button" onChange={(e) => this.setState({ searchQuery: e.target.value })} placeholder="Type a City!"></input>
          <button class="button" type="submit">Submit Me</button>
        </form>

        {this.state.displayResults &&
          <Card id="card">
            <Card.Img height={300} width={300} variant="top" src={this.state.imgSrc}></Card.Img>
            <Card.Body>
              <Card.Text>
                {this.state.locations}
              </Card.Text>
              <Card.Text>
                Lat = {this.state.location.lat}
              </Card.Text>
              <Card.Text>
                Long ={this.state.location.lon}
              </Card.Text>
            </Card.Body>

          </Card>
        }

      </>
    );
  }
}

export default App;


// in error, there is a message that you can display in the obj.

// you can make it so if/when the error happens, you can trigger diff string results IE 404, 400 etc. 

// in error file you can just call that prop message (maybe a modal popup?)

// handle close 

// in alert tag, you can do that hanlde close 