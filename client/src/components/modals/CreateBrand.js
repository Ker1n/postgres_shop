import React from "react";

import Modal from "react-bootstrap/Modal";
import { Button, Form} from "react-bootstrap";



export const CreateBrand = ({show, onHide}) => {
  return (
    <>
      <Modal size="lg"  show={show} onHide={onHide} centered>
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Add new brand
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Control placeholder={"Enter name of type "}/>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant={'outline-dark'} onClick={onHide}>Close</Button>
          <Button variant={'outline-dark'} onClick={onHide}>Add</Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};
