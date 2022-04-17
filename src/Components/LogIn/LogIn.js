import React from "react";
import { Button, Form } from "react-bootstrap";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useNavigate, useLocation } from "react-router-dom";
import auth from "../../firebase.init";
import Spinner from 'react-bootstrap/Spinner'

const LogIn = () => {
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || "/";

    if (loading) {
        return (
            <div className="text-center my-5">
                <Spinner animation="border" variant="primary" />
            </div>
        );
      }


    if(user){
        navigate(from, { replace: true });        
    }

  const handleFormSubmission = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    signInWithEmailAndPassword(email, password)
  };

  return (
    <div className="w-25 mx-auto my-5">
      <h3 className="text-center text-primary">Please Log in</h3>
      <Form onSubmit={handleFormSubmission}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control name="email" type="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            name="password"
            type="password"
            placeholder="Password"
          />
        </Form.Group>
        <Button variant="primary" type="submit">
          Log in
        </Button>
      </Form>

      <p className="mt-3">
        New to Raju Tea Stall? <Link to="/signup">Sign Up</Link>
      </p>
    </div>
  );
};

export default LogIn;
