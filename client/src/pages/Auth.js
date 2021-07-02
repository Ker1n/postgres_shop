import React from "react";
import { Container, Form, Card, Button, Row } from "react-bootstrap";
import { NavLink, useLocation } from "react-router-dom";

import { LOGIN_ROUTE, REGISTRATION_ROUTE } from "../utils/consts";

export const Auth = () => {
  const location = useLocation();
  const isLogin = location.pathname === LOGIN_ROUTE;

  return (
    <Container
      className="d-flex justify-content-center align-items-center"
      style={{ height: window.innerHeight - 54 }}
    >
      <Card style={{ width: 600 }} className="p-5">
        <h2 className="m-auto">{isLogin ? "Authorization" : "Registration"}</h2>
        <Form className="d-flex flex-column">
          <Form.Control className="mt-4" placeholder="Enter your Email" />
          <Form.Control className="mt-4" placeholder="Enter your Password" />
          <Row className="mt-4 d-flex justify-content-between align-items-center pr-3 pl-3">
            {isLogin ? (
              <div>
                <NavLink to={REGISTRATION_ROUTE}>Haven't account?</NavLink>
              </div>
            ) : (
              <div>
                Do you have an account?
                <NavLink to={LOGIN_ROUTE}>Enter</NavLink>
              </div>
            )}

            <Button variant={"dark"} style={{ width: 150 }}>
              {isLogin ? "Enter" : "Registration"}
            </Button>
          </Row>
        </Form>
      </Card>
    </Container>
  );
};
