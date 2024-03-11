import React, { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Autocomplete, TextField } from "@mui/material";
import Box from "@mui/material/Box";
import { useNavigate } from "react-router-dom";
import { Body } from "./Body";

export const Header = () => {
  const navigate = useNavigate();
  const [searchable, setSearchable] = useState("");
  const handleChange = ((e, value) => {
    if (value) {
      setSearchable(value.label)
    } else {
      setSearchable(null)
    }
  });

  return (
    <>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" sx={{ p: "2px", backgroundColor: "blue" }}>
          <Toolbar sx={{ justifyContent: "space-between" }}>
            <Typography variant="h6">Movie-Suggestion</Typography>
            <Autocomplete
              freeSolo
              id="checkboxes-tags-demo"
              options={genes}
              onChange={handleChange}
              // getOptionLabel={(option) => option.title}
              style={{ width: 500 }}
              renderInput={(params) => (
                <TextField
                  {...params}
                  label="Movies"
                  placeholder="Movie Suggestion"
                />
              )}
            />
            <Button variant="outlined" onClick={() => navigate("/")}>
              Logout
            </Button>
          </Toolbar>
        </AppBar>
      </Box>
      <Body searchValue={searchable} />
    </>
  );
};
const genes = [
  { label: "Action" },
  { label: "Horror" },
  { label: "Romance" },
  { label: "Drama" },
];
