//#region imports
import React, { Component } from "react";
import axios from "axios";

import FormControl from "react-bootstrap/FormControl";
import FormGroup from "react-bootstrap/FormGroup";
import FormLabel from "react-bootstrap/FormLabel";

import ButtonToolbar from "react-bootstrap/ButtonToolbar";
import Button from "react-bootstrap/Button";

import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import Card, { CardFooter } from "react-bootstrap/Card";
import CardDeck from "react-bootstrap/CardDeck";
import CardGroup from "react-bootstrap/CardGroup";

import Jumbotron from "react-bootstrap/Jumbotron";

import InputGroup from "react-bootstrap/InputGroup";
//#endregion

import TopSpot from "./topspot";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      topspots: []
    };
  }

  componentWillMount() {
    // axios
    //   .get("https://origin-top-spots-api.herokuapp.com/api/topspots")
    //   .then(response => response.data)
    //   .then(topspots => this.setState({ topspots }));

    // Here we're simply invoking the axios object, specifically..
    axios

      // .. the .get function. Here we pass the URL of our external service.
      .get("https://origin-top-spots-api.herokuapp.com/api/topspots")

      // Here the first fulfill callback is setup.
      // This callback simply takes an HTTP response and returns the data property..
      // This shorthand => (fat arrow) simply means return whatever is to the right
      // in this case, we just return response.data
      .then(response => response.data)

      // this is a pipeline.. it takes whatever was returned from above and
      //continues to process it. In this case, response.data is passed into
      // the next then and then stuffed in topspots in the state
      // .. to the second fulfill callback, which uses React's this.setState
      // function to merge the provided object (which uses ES6 shorthand)
      // with the current object assigned to this.state (which you assigned
      // in your constructor!)
      .then(topspots => this.setState({ topspots }));
  }

  render() {
    return (
      <div className="App">
        <Jumbotron fluid>
          <Container className="ml-5">
            <h1>San Diego Top Spots</h1>
            <p>A list of the top 30 places to see in San Diego</p>
            {/* {JSON.stringify(this.state.topspots, null, 2)} */}
          </Container>
        </Jumbotron>

        {this.state.topspots.map(topspot => (
          <TopSpot
            key={topspot.id}
            name={topspot.name}
            description={topspot.description}
            location={topspot.location}
          />
        ))}
      </div>
    );
  }
}
