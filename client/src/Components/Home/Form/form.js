import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as yup from "yup";
import { Button } from "react-bootstrap";

function FormPatient({ patientSchema }) {
  return (
    <Formik
      initialValues={{
        petName: "",
        ownerName: "",
        email: "",
        date: "",
        symptoms: "",
      }}
      validationSchema={patientSchema}
      onSubmit={(values, actions) => {}}
    >
      {({ errors, touched }) => (
        <Form className="form-control text-primary fw-bold fs-6">
          <div>
            <label className="form-label m-1 float-start">PET NAME</label>
            <br />
            <Field
              placeholder="Pet here"
              name="petName"
              id="petName"
              type="text"
              className="w-100"
              style={{ height: "35px" }}
            />
            <div className="text-danger">
              <ErrorMessage name="petName" />
            </div>
          </div>
          <div>
            <label className="form-label m-1 float-start">OWNER NAME</label>
            <br />
            <Field
              placeholder="Owner here"
              name="ownerName"
              id="ownerName"
              type="text"
              className="w-100"
              style={{ height: "35px" }}
            />
            <div className="text-danger">
              <ErrorMessage name="ownerName" />
            </div>
          </div>
          <div>
            <label className="form-label m-1 float-start">OWNER EMAIL</label>
            <br />
            <Field
              placeholder="Email"
              name="email"
              id="email"
              type="email"
              className="w-100"
              style={{ height: "35px" }}
            />
            <div className="text-danger">
              <ErrorMessage name="email" />
            </div>
          </div>
          <div>
            <label className="form-label m-1 float-start">DISCHARGE DATE</label>
            <br />
            <Field
              style={{ height: "35px" }}
              type="date"
              name="date"
              id="date"
              className="w-100"
            />
            <div className="text-danger">
              <ErrorMessage name="date" />
            </div>
          </div>
          <div>
            <label className="form-label m-1 float-start">SYMPTOMS</label>
            <br />
            <Field
              as="textarea"
              style={{ height: "35px" }}
              placeholder="Pet symptoms"
              name="symptoms"
              id="symptoms"
              className="w-100"
            />
            <div className="text-danger">
              <ErrorMessage name="symptoms" />
            </div>
          </div>
          <Button
            type="submit"
            className="w-100 mt-3 fw-bold rounded-5"
            variant={!errors.email ? "primary" : "secondary"}
          >
            {!errors.email ? "ADD PATIENT" : "COMPLETE FORM"}
          </Button>
        </Form>
      )}
    </Formik>
  );
}

export default FormPatient;
