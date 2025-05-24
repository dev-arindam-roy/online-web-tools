import React, { useState } from "react";
import { Link } from "react-router-dom";
import toolList from "../ToolList.json";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

const Home = () => {
  const [tools, setTools] = useState(toolList);

  return (
    <>
      <Container fluid className="mt-5">
        <Row>
          {tools.length &&
            tools.map((item, index) => {
              return (
                <Col sm={12} xs={12} md={3} className="mb-3">
                  <Card>
                    <Card.Img variant="top" src="holder.js/100px180" />
                    <Card.Body>
                      <Card.Title>{item.name}</Card.Title>
                      <Card.Text>
                        Some quick example text to build on the card title and
                        make up the bulk of the card's content.
                      </Card.Text>
                      <Link to={item.path} className="btn btn-primary">Home</Link>
                    </Card.Body>
                  </Card>
                </Col>
              );
            })}
        </Row>
      </Container>
    </>
  );
};

export default Home;
