import React, {useState} from "react";
import {Modal, Button, Form} from "react-bootstrap";
import TextInput from "../components/TextInput.jsx";
import axios from 'axios';
export default function LoginModal() {
  const [show, setShow] = useState(true);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function validateForm() {
    return email.length > 0 && password.length > 0;
  }
  function handleSubmit(e) {
  e.preventDefault()
    const user = {
      email: email,
      password: password
    };
    axios.post('http://localhost:5000/login', user)
    .then((res) => {
                console.log(res.data)
            }).catch((error) => {
                console.log(error)
            });
    setEmail('')
    setPassword('')
  }
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
        <Form onSubmit={handleSubmit}>
          <Form.Group size="lg" controlId="email">
            <Form.Label>Email</Form.Label>
            <Form.Control
              bsPrefix="text-container"
              autoFocus
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </Form.Group>
          <Form.Group size="lg" controlId="password">
            <Form.Label>Password</Form.Label>
            <Form.Control
              bsPrefix="text-container"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </Form.Group>
          <Button block size="lg" type="submit" disabled={!validateForm()}>
            Login/Signup
          </Button>
        </Form>
        </Modal.Body>
        <Modal.Footer>

        </Modal.Footer>
      </Modal>
    </>
  );
}