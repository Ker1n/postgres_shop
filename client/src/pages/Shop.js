import React from "react";

import { Container, Col, Row } from "react-bootstrap";


import { TypeBar } from "../components/TypeBar";
import { BrandBar } from "../components/BrandBar";

import { DeviceList } from "../components/DeviceList";

export const Shop = () => {
  return (
    <Container>
      <Row className="mt-4">
        <Col md={3}>
          <TypeBar />
        </Col>
        <Col md={9}>
          <BrandBar />
          <DeviceList />
        </Col>
      </Row>
    </Container>
  );
};
