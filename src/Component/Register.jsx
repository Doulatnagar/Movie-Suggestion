import React, { useState } from "react";
import {
  TextField,
  Button,
  Typography,
  Paper,
  Container,
  Box,
} from "@mui/material";
import { useNavigate } from "react-router-dom";

const checkspecial = (inputValue) => /^[A-Za-z\s]*$/.test(inputValue);

export const Register = () => {
  const [validation, setValidation] = useState("none");
  const [number, setNumber] = useState("none");

  const isRegister = JSON.parse(localStorage.getItem("credential"));

  // eslint-disable-next-line no-unused-expressions
  !isRegister && localStorage.setItem("credential", JSON.stringify([]));

  const handleBlue = (event) => {
    if (event.target.value.length !== 10) {
      setNumber("initial");
    }
  };

  const navigate = useNavigate();
  const [formvalue, setValue] = useState({
    firstname: "",
    email: "",
    number: "",
    password: "",
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValue((pre) => ({
      ...pre,
      [name]: value,
    }));
    if (value.includes(" ") || !checkspecial(value)) {
      if (name === "firstname") {
        setValue((pre) => ({
          ...pre,
          [name]: value.slice(0, -1),
        }));
      }
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (
      formvalue.firstname.length > 1 &&
      formvalue.email.length > 1 &&
      formvalue.password.length > 1 &&
      formvalue.number.length > 9
    ) {
      isRegister.push(formvalue);
      localStorage.setItem("credential", JSON.stringify(isRegister));
      setValue({
        firstname: "",
        email: "",
        number: "",
        password: "",
      });
    } else {
      setValidation("initial");
    }
  };

  return (
    <>
      <Container component="main" maxWidth="md">
        <Box
          sx={{
            border: `1px solid white`,
            padding: 5,
            marginTop: 2,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <Paper elevation={10} sx={{ padding: 5 }}>
            <Typography variant="h4" padding={3} textAlign="center">
              Registration form
            </Typography>
            <Typography
              variant="p"
              color={"red"}
              textAlign="center"
              display={validation}
            >
              Not Register
            </Typography>
            <Box component="form">
              <TextField
                required
                fullWidth
                label="First Name"
                onChange={handleChange}
                type="text"
                name="firstname"
                margin="normal"
                value={formvalue.firstname}
              />

              <TextField
                required
                fullWidth
                label="Email"
                onChange={handleChange}
                type="email"
                name="email"
                margin="normal"
                value={formvalue.email}
              />

              <TextField
                required
                fullWidth
                label="Number"
                onChange={handleChange}
                onBlur={handleBlue}
                type="number"
                name="number"
                margin="normal"
                InputProps={{ inputProps: { max: 9999999999 } }}
                value={formvalue.number}
              />
              <Typography
                variant="p"
                color={"red"}
                textAlign="center"
                display={number}
              >
                Only 10 digits Number
              </Typography>
              <TextField
                required
                fullWidth
                label="Password"
                onChange={handleChange}
                type="password"
                name="password"
                margin="normal"
                value={formvalue.password}
              />
              <Button type="submit" onClick={handleSubmit} variant="contained">
                Submit
              </Button>

              <Button
                variant="contained"
                onClick={() => navigate("/")}
                sx={{ ml: "10px" }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Box>
      </Container>
    </>
  );
};
