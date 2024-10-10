import React from "react";
import { useNavigate } from "react-router-dom";
import { Form, Button, Container } from "react-bootstrap";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 50%;
  margin: 30px auto 0;
`;

const Login = ({ setAuthenticate }) => {
  const navigate = useNavigate();

  const loginUser = (e) => {
    e.preventDefault();
    if (setAuthenticate) {
      setAuthenticate(true); // 로그인 상태 설정
      navigate("/"); // 로그인 후 홈으로 이동
    } else {
      console.error("setAuthenticate prop is not passed!");
    }
  };
  return (
    <Container>
      <Form onSubmit={loginUser}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" placeholder="Enter email" />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control type="password" placeholder="Password" />
        </Form.Group>
        <Button variant="danger" type="submit">
          Login
        </Button>
      </Form>
    </Container>
  );
};
export default Login;
