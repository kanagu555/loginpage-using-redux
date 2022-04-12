import React from "react";
import { useSelector } from "react-redux";
import Container from "@mui/material/Container";
import { Link } from "react-router-dom";
import Button from '@mui/material/Button';


const Dashboard = () => {
  const loginName = useSelector((state) => state.userName);
  
  return (
    <Container component="main" maxWidth="xs">
      <h1>Dashboard</h1>
      <h2>Welcome:  {loginName}</h2>
      <Link to="/" style={{textDecoration: 'none'}}><Button variant="contained">Back to Login</Button></Link>
    </Container>
  );
};

export default Dashboard;
