import React from "react";
import { Button, Form } from "react-bootstrap";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";

const SignUp = () => {

  const [
    createUserWithEmailAndPassword,
    user,
    loading,
    error,
  ] = useCreateUserWithEmailAndPassword(auth);

  const navigate = useNavigate();

  if(user){
    navigate('/home');
  }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
  };

  return (
    <div className="w-25 mx-auto my-5">
      <h3 className="text-center text-primary">Please Sign Up</h3>
      <Form onSubmit={handleFormSubmission}>
        <Form.Group className="mb-3" controlId="name">
          <Form.Label>Full Name</Form.Label>
          <Form.Control
            name="name"
            type="text"
            placeholder="Shahariar Haque Mim"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="email">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>

        <Form.Group className="mb-3" controlId="password">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>        
        <Button variant="primary" type="submit">
          Sign up
        </Button>
      </Form>

      <p className="mt-3">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
};

export default SignUp;
