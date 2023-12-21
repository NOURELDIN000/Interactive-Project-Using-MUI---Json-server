import React from "react";
import {
  Toolbar,
  AppBar,
  Avatar,
  Link,
  Typography,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
const Appbar = ({ drawerWidth, showDrawer }) => {
  return (
    <AppBar
      sx={{
        width: { sm: `calc(100% - ${drawerWidth}px)` },
        ml: { xs: 0, sm: `${drawerWidth}px` },
      }}
      position="static"
    >
      <Toolbar>
        <IconButton
          sx={{ mr: "9px", display: { sm: "none" } }}
          onClick={() => {
            showDrawer();
          }}
        >
          <MenuIcon />
        </IconButton>

        <Link
          sx={{
            flexGrow: 1,
            textDecoration: "none",
            "&:hover": { fontSize: "16.5px" },
          }}
          color="inherit"
          href="/"
        >
          My expenses
        </Link>

        <Typography mr={2} variant="body1" color="inherit">
          Nour Eldin
        </Typography>

        <Avatar alt="Remy Sharp" src="nour2.jpg" />
      </Toolbar>
    </AppBar>
  );
};

export default Appbar;

