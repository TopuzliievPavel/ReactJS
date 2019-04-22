import React, { Component } from 'react';
import { Container, Col, Row } from 'reactstrap';

export class About extends Component  {
  render() {
    return(
      <div className="About">
        <Container>
          <Row>
            <Col>
              About
            </Col>
          </Row>
        </Container>
      </div>
    )
  }
}