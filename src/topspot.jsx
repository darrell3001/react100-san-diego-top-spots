//#region
import React from "react";

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

import InputGroup from "react-bootstrap/InputGroup";
//#endregion

export default props => {
  return (
    <Container className="mt-5">
      <Card>
        <Card.Body>
          <Card.Title>{props.name}</Card.Title>
          <Card.Text>{props.description}</Card.Text>
          <Card.Text>
            <Button
              href={`https://maps.google.com/?q=${props.location[0]},${
                props.location[1]
              }`}
            >
              Map
            </Button>
          </Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
