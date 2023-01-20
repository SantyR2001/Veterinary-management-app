import React from "react";
import { Col, Row } from "react-bootstrap";
import LoginForm from "./loginForm";
import LoginTitle from "./loginTitle";

function Login(props) {
  return (
    <div className="h-100 d-flex justify-content-center bg-light">
      <Row className="container-fluid d-flex justify-content-around w-100">
        <Col
          sm={8}
          md={6}
          lg={5}
          xs={12}
          className="w-100 d-flex justify-content-center m-4 h-auto"
        >
          <LoginTitle />
        </Col>
        <Col sm={8} md={6} lg={5} xs={12} className="m-4 h-auto">
          <LoginForm />
        </Col>
      </Row>
    </div>
  );
}

export default Login;
