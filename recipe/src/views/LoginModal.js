import React, {useState} from "react";
import {Modal, Button} from "react-bootstrap";
import TextInput from "../components/TextInput.jsx";

export default function LoginModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="primary" onClick={handleShow}>
        Launch demo modal
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Login / Signup to view your saved recipes</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Email:</p>
          <TextInput textName="email" description="Enter email address"/>
          <p>Password:</p>
          <TextInput textName="pass" description="Enter password"/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="primary" onClick={handleClose}>
            Signup / Login
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}
