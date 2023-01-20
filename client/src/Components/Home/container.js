import React, { useState } from "react";
import { Row, Col } from "react-bootstrap";
import FormPatient from "./Form/form";
import List from "./listPatients/List";

function Container(props) {
  const [patients, setPatients] = useState(undefined);
  return (
    <div style={{ height: 'calc(100% - 117px)' }} className="container-fluid bg-light">
      <Row className="h-100">
        <Col xs={12} md={5} className="my-3">
          <strong className="text-center fs-4"> Patient manager </strong>
          <p className="text-center fs-5 mt-2">
            {" "}
            Add your patients and{" "}
            <strong className="text-primary"> Manage them </strong>
          </p>
          <FormPatient />
        </Col>
        <Col xs={12} md={7} className="my-3">
          <strong className="text-center fs-4"> Patient list </strong>
          <p className="text-center fs-5 mt-2">
            {" "}
            Manage your{" "}
            <strong className="text-primary"> Patients and appointments </strong>
          </p>{" "}
          <List patients={patients} />{" "}
        </Col>
      </Row>
    </div>
  );
}

export default Container;
