import { Box, Button } from "@mui/material";
import React, { useState } from "react";

import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { useNavigate } from "react-router-dom";

const Copyright = (props) => (
  <Typography variant="body2" color="text.secondary" align="center" {...props}>
    {"Copyright © "}
    <Link color="inherit" target="_blank" href="https://copyright.gov.in/">
      Your Website
    </Link>
    {new Date().getFullYear()}
  </Typography>
);

export const LoginPage = () => {
  const navigate = useNavigate();

  const [value, setValue] = useState({
    email: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((pre) => ({
      ...pre,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const getCredential = JSON.parse(localStorage.getItem("credential"));
    let login;
    if (getCredential !== null) {
      login = getCredential.filter((val)=>val.email === value.email && val.password === value.password)
      // eslint-disable-next-line no-unused-expressions
      login.length >= 1 && navigate("/Home")
    } else {
      // eslint-disable-next-line no-alert
      alert("Email or password are incorrect !")
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          border: `1px solid blue`,
          boxShadow: "20px 20px 10px 0px",
          padding: 5,
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography variant="h5">Sign in</Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            onChange={handleChange}
            type="email"
            id="email"
            label="Email Address"
            name="email"
            value={value.email}
            autoFocus
          />
          <TextField
            margin="normal"
            required
            onChange={handleChange}
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            value={value.password}
          />
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={handleSubmit}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body1">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link onClick={() => navigate("/Registor")} variant="body2">
                Don't have an account? Sign Up
              </Link>
            </Grid>
          </Grid>
        </Box>
        <Copyright sx={{ mt: 8, mb: 4 }} />
      </Box>
    </Container>
  );
};
