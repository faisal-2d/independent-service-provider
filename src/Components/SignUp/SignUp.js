import React from "react";
import { Button, Form } from "react-bootstrap";
import { useAuthState, useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import auth from "../../firebase.init";
import Loading from "../Loading/Loading";
import Welcome from "../Welcome/Welcome";

const SignUp = () => {
  const [exisUuser] = useAuthState(auth);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  
  const handleFormSubmission = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    createUserWithEmailAndPassword(email, password);
    toast( "We sent email to you!");
  };
         

  if (loading) {
    return <Loading></Loading>;
  }

  return (
    <div >
      {exisUuser 
      ? <div>
        <Welcome></Welcome>
        <ToastContainer />
      </div>

      : <div className="w-25 mx-auto my-5">
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
          <Form.Control
            name="email"
            type="email"
            placeholder="Enter email"
            required
          />
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
            required
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
      
      }
    </div>
  );
};

export default SignUp;
