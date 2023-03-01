import React from "react";
import { AppBar, Grid, Toolbar, Typography } from "@mui/material";
// import { Login, Logout } from "@mui/icons-material";

function Navbar() {
  return (
    <AppBar position="static" style={{ background: "#facf5a" }}>
      <Toolbar>
        <Grid item md={6} style={{ display: "flex" }}>
          <img
            src={`/Images/books_logo.jpg`}
            alt="background_image"
            style={{ width: "20%" }}
          />
        </Grid>
        <Typography
          variant="h4"
          component="div"
          sx={{ flexGrow: 1 }}
          style={{ color: "#277BC0" }}
          fontWeight={700}
        >
          Books Library App
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
