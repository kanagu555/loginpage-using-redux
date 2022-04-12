import React from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import { useRef } from "react";
import { useDispatch } from "react-redux";
import { LoginAction } from "../Redux/LoginAction";

const Login = () => {
  const username = useRef("");
  const dispatch = useDispatch();

  return (
    <Container component="main" maxWidth="xs">
      <Box>
        <TextField
          margin="normal"
          inputRef={username}
          fullWidth
          label="Username"
          autoFocus
        />
        <TextField margin="normal" fullWidth label="Password" />
        <Link to="/dashboard" style={{textDecoration: 'none'}}>
          <Button
            onClick={() => dispatch(LoginAction(username.current.value))}
            type="submit"
            variant="contained"
          >
            Login
          </Button>
        </Link>
      </Box>
    </Container>
  );
};

export default Login;
