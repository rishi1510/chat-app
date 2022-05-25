import React from "react";
import { Row, Card } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// This is a function which renders the friends in the friends list
export function ChatCard(props) {
  return (
    <Row style={{ marginRight: "0px" }}>
      <Card
        border="success"
        style={{ width: "100%", alignSelf: "center", marginLeft: "15px", marginTop: "5px"}}
        onClick={() => {
          props.getMessages(props.publicKey);
          //alert(props.publicKey);
        }}
      >
        <Card.Body>
          <Card.Title> {props.name} </Card.Title>
          <Card.Subtitle>
            {" "}
          
          </Card.Subtitle>
        </Card.Body>
      </Card>
    </Row>
  );
}