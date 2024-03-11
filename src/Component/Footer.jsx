import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";

export const Footer = () => (
  <Box
    sx={{
      width: "100%",
      height: "auto",
      backgroundColor: "blue",
      paddingTop: "1rem",
      paddingBottom: "1rem",
      bottom: 0,
      position: "fixed",
    }}
  >
    <Container maxWidth="lg">
      <Grid container>
        <Grid container item pt-3 xs={6}>
          <Typography color="#ffffff" variant="h5">
            Movie Suggestion
          </Typography>
        </Grid>
        <Grid item xs={6} pt-3 textAlign="right">
          <Typography color="#ffffff" variant="subtitle1">
            {`${new Date().getFullYear()}  Horror | Action | Romance | Drama`}
          </Typography>
        </Grid>
      </Grid>
    </Container>
  </Box>
);
