import { Form, Formik, Field } from "formik";
import React from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

function LoginForm(props) {
  return (
    <div className="h-auto">
      <Formik>
        <Form className="container h-100 p-0 bg-white shadow-lg rounded-5 border">
          <h1 className="fw-bold text-white p-3 rounded-5 bg-primary">
            {" "}
            Sing up or Sign in{" "}
          </h1>
          <div className="m-2 mx-4 fs-5">
            <label className="float-start m-1">Username</label>
            <Field className="form-control" />
          </div>
          <div className="m-2 mx-4 fs-5">
            <label className="float-start m-1">Pass</label>
            <Field className="form-control" />
          </div>
          <Button className="mt-3 rounded-5 w-50">Sign up</Button>
          <div className="w-100 m-2 d-flex fw-light justify-content-between">
            <Link className="m-2 mx-3 text-decoration-none" to="/register">
              Sign in
            </Link>
            <Link className="m-2 mx-4 text-decoration-none" to="/password">
              Forgot password?
            </Link>
          </div>
        </Form>
      </Formik>
    </div>
  );
}

export default LoginForm;
