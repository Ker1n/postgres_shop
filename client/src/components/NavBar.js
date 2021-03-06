import React, { useContext } from "react";
import { Context } from "../index";
import { NavLink, useHistory } from "react-router-dom";

import {
  Navbar,
  Nav,
  Button,
  Container,
} from "react-bootstrap";
import { ADMIN_ROUTE, LOGIN_ROUTE, SHOP_ROUTE } from "../utils/consts";

export const NavBar = () => {
  const { user } = useContext(Context);

  const history = useHistory();


  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <NavLink style={{ color: "white" }} to={SHOP_ROUTE}>
            Shop
          </NavLink>
          {user.isAuth ? (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button variant={"outline-light"} onClick={()=>history.push(ADMIN_ROUTE)} >Admin Panel</Button>
              <Button variant={"outline-light"} onClick={()=>history.push(LOGIN_ROUTE)}  className="ml-2">
                Exit
              </Button>
            </Nav>
          ) : (
            <Nav className="ml-auto" style={{ color: "white" }}>
              <Button
                variant={"outline-light"}
                onClick={() => user.setIsAuth(true)}
              >
                Authorization
              </Button>
            </Nav>
          )}
        </Container>
      </Navbar>
    </>
  );
};
