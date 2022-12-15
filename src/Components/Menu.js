import React from "react";
import "./Menu.css";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { useSpring, animated } from "react-spring";

function Menu({ popular, upcoming, bestranked }) {
  return (
    <ListGroup horizontal className="menu">
      <ListGroup.Item onClick={popular}>Popular</ListGroup.Item>
      <ListGroup.Item onClick={upcoming}>Upcoming</ListGroup.Item>
      <ListGroup.Item onClick={bestranked}>Best ranked</ListGroup.Item>
    </ListGroup>
  );
}

export default Menu;
