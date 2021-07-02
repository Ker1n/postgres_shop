import React from "react";

import { Container, Button } from "react-bootstrap";

import { CreateBrand } from "../components/modals/CreateBrand";
import { CreateType } from "../components/modals/CreateType";
import { CreateDevice } from "../components/modals/CreateDevice";

export const Admin = () => {
  const [brandVisible, setBrandVisible] = React.useState(false);
  const [typeVisible, setTypeVisible] = React.useState(false);
  const [deviceVisible, setDeviceVisible] = React.useState(false);

  return (
    <Container className=" d-flex flex-column">
      <Button
        onClick={() => setBrandVisible(true)}
        variant={"outline-dark"}
        className="mt-3 p-2"
      >
        Add Brand
      </Button>
      <Button
        onClick={() => setTypeVisible(true)}
        variant={"outline-dark"}
        className="mt-3 p-2"
      >
        Add type
      </Button>
      <Button
        onClick={() => setDeviceVisible(true)}
        variant={"outline-dark"}
        className="mt-3 p-2"
      >
        Add Device
      </Button>
      <CreateBrand show={brandVisible} onHide={() => setBrandVisible(false)} />
      <CreateType show={typeVisible} onHide={() => setTypeVisible(false)} />
      <CreateDevice
        show={deviceVisible}
        onHide={() => setDeviceVisible(false)}
      />
    </Container>
  );
};
