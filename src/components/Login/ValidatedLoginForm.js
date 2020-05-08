import React from "react";
import { Formik } from "formik";
import * as EmailValidator from "email-validator";
import * as Yup from "yup";
import { Card, Col,Row,Label, Input, Container, Button} from 'reactstrap';
const ValidatedLoginForm = () => (
  <Formik
    initialValues={{ email: "", password: "" }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }}
    //********Handling validation messages yourself*******/
    validate={values => {
      let errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (!EmailValidator.validate(values.email)) {
        errors.email = "Invalid email address";
      }

      const passwordRegex = /(?=.*[0-9])/;
      if (!values.password) {
        errors.password = "Required";
      } else if (values.password.length < 8) {
        errors.password = "Password must be 8 characters long.";
      } else if (!passwordRegex.test(values.password)) {
        errors.password = "Invalida password. Must contain one number";
      }

      return errors;
    }}
    //********Using Yum for validation********/

    validationSchema={Yup.object().shape({
      email: Yup.string()
        .email()
        .required("Required"),
      password: Yup.string()
        .required("No password provided.")
        .min(8, "Password is too short - should be 8 chars minimum.")
        .matches(/(?=.*[0-9])/, "Password must contain a number.")
    })}
  >
    {props => {
      const {
        values,
        touched,
        errors,
        isSubmitting,
        handleChange,
        handleBlur,
        handleSubmit
      } = props;
      return (
       < Container   >
        <Card >
       
        <form onSubmit={handleSubmit}>
          <Row><Col >
     
            <Col >
          <Label htmlFor="email"
          style={{ marginBottom:'5px', marginTop:'5px'}}><h5>Email</h5></Label>
          <Input
            name="email"
            type="text"
            placeholder="Enter your email"
            value={values.email}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.email && touched.email && "error"}
          />
          {errors.email && touched.email && (
            <div className="input-feedback">{errors.email}</div>
          )}</Col>
          
          <Col >
          
          <Label htmlFor="email" style={{ marginBottom:'5px', marginTop:'5px'}}>
            <h5>Password</h5>
            </Label>
          <Input 
            name="password"
            type="password"
            placeholder="Enter your password"
            value={values.password}
            onChange={handleChange}
            onBlur={handleBlur}
            className={errors.password && touched.password && "error"}
          />
          {errors.password && touched.password && (
            <div className="input-feedback">{errors.password}</div>
          )}
          </Col>
          <Col >
         <br></br>
          <Button style={{ marginBottom:'15px', marginTop:'10px'}}
              color="primary"type="submit" disabled={isSubmitting}>
            Login
          </Button>
          <br></br>
     
          </Col>
          </Col>
          </Row>
        </form>

        </Card>
         </Container>
      );
    }}
  </Formik>
  
);

export default ValidatedLoginForm;
