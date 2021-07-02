import React from "react";
import Modal from "react-bootstrap/Modal";
import { Button, Form, Dropdown, Row, Col} from "react-bootstrap";

import { Context } from "../../index";

export const CreateDevice = ({ show, onHide }) => {
  const { device } = React.useContext(Context);

  const [info, setInfo] = React.useState([]);

  const addInfo = () => {
    setInfo([...info, { title: "", description: "", number: Date.now() }]);
  };

  const removeInfo = (number) => { 
    setInfo(info.filter(i=> i.number !== number));
  }

  return (
    <>
      <Modal size="lg" show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new device
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Dropdown className="mt-3 mb-3">
              <Dropdown.Toggle>Select Type</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.types.map((type) => (
                  <Dropdown.Item key={type.id}>{type.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Dropdown className="mt-3 mb-3">
              <Dropdown.Toggle>Select Brand</Dropdown.Toggle>
              <Dropdown.Menu>
                {device.brands.map((brand) => (
                  <Dropdown.Item key={brand.id}>{brand.name}</Dropdown.Item>
                ))}
              </Dropdown.Menu>
            </Dropdown>
            <Form.Control
              className="mt-3 mb-3"
              placeholder="Enter device name"
            />
            <Form.Control
              className="mt-3 mb-3"
              placeholder="Enter device price"
              type="number"
            />
            <Form.Control
              className="mt-3 mb-3"
              placeholder="Enter device image"
              type="file"
            />
            <hr />
            <Button variant="outline-dark" onClick={addInfo}>Add new description</Button>
            {
              info.map(i=>
              <Row key={i.number} className="mt-2 mb-2">
                <Col md={4}>
                  <Form.Control placeholder = "title" />
                </Col>
                <Col md={4}>
                  <Form.Control placeholder = "description" />
                </Col>
                <Col md={4}>
                    <Button onClick={()=>removeInfo(i.number)} variant='outline-danger'>Delete</Button>
                </Col>
              </Row> 
              )
            }
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={"outline-dark"} onClick={onHide}>
            Close
          </Button>
          <Button variant={"outline-dark"} onClick={onHide}>
            Add
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
