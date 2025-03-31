import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import * as formik from "formik";
import * as yup from "yup";
import { loginCustomer } from "../services/customerService";

function Login() {
  const { Formik } = formik;

  const schema = yup.object().shape({
    username: yup.string().required("Username is required"),
    password: yup
      .string()
      .required("Password is required")
      .min(4, "Password length should be at least 4 characters")
      .max(12, "Password cannot exceed 12 characters"),
  });

  return (
    <div
      className="content justify-content-center align-items-center"
      style={{ width: "70%", margin: "auto", paddingTop: "5rem" }}
    >
      <Formik
        validationSchema={schema}
        onSubmit={(values) => {
          console.log(values);
          // Perform login action here, e.g., call an API
          loginCustomer(values.username, values.password)
            .then((response) => {
              console.log("Login successful:", response.data);
              // Handle successful login, e.g., redirect or show a success message
            })
            .catch((error) => {
              console.error("Login failed:", error);
              // Handle login failure, e.g., show an error message
            });
        }}
        initialValues={{
          username: "",
          password: "",
        }}
      >
        {({ handleSubmit, handleChange, values, touched, errors }) => (
          <Form
            noValidate
            onSubmit={handleSubmit}
            className="w-50 mx-auto p-3 border border-2 rounded shadow-sm justify-content-center align-items-center"
          >
            <Form.Group controlId="validationFormikUsername2" className="mb-3">
              <Form.Label>Username</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="text"
                  placeholder="Username"
                  aria-describedby="inputGroupPrepend"
                  name="username"
                  value={values.username}
                  onChange={handleChange}
                  isInvalid={!!errors.username}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.username}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>

            <Form.Group className="mb-3" controlId="validationFormikPassword2">
              <Form.Label>Password</Form.Label>
              <InputGroup hasValidation>
                <Form.Control
                  type="password"
                  placeholder="Password"
                  aria-describedby="passwordHelpBlock"
                  name="password"
                  value={values.password}
                  onChange={handleChange}
                  isInvalid={!!errors.password}
                />
                <Form.Control.Feedback type="invalid" tooltip>
                  {errors.password}
                </Form.Control.Feedback>
              </InputGroup>
            </Form.Group>
            <div className="d-flex justify-content-center align-items-center">
              <Button
                variant="success"
                type="submit"
                className="w-100"
                size="lg"
              >
                Login
              </Button>
            </div>
          </Form>
        )}
      </Formik>
    </div>
  );
}

export default Login;
