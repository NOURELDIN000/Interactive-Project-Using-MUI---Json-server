import {
  Divider,
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  IconButton,
} from "@mui/material";
import React from "react";

import HomeIcon from "@mui/icons-material/Home";
import CreateIcon from "@mui/icons-material/Create";
import Person2Icon from "@mui/icons-material/Person2";
import SettingsIcon from "@mui/icons-material/Settings";
import LogoutIcon from "@mui/icons-material/Logout";
import { useLocation, useNavigate } from "react-router";
import { useTheme } from "@emotion/react";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import Brightness7Icon from "@mui/icons-material/Brightness7";

const Drawerr = ({
  drawerWidth,
  setMyMOde,
  noneORblock,
  drawerType,
  hideDrawer,
}) => {
  const theme = useTheme();
  const navigate = useNavigate();
  const location = useLocation();

  const myList = [
    { text: "Home", icon: <HomeIcon />, path: "/" },
    { text: "Create", icon: <CreateIcon />, path: "/create" },
    { text: "Profile", icon: <Person2Icon />, path: "/profile" },
    { text: "Settings", icon: <SettingsIcon/> , path: "/settings"}
  ];

  return (
    <Drawer
      sx={{
        display: { xs: noneORblock, sm: "block" },
        width: `${drawerWidth}px`,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: `${drawerWidth}px`,
          boxSizing: "border-box",
        },
      }}
      variant={drawerType}
      anchor="left"
      open={true}
      onClose={() => {
        hideDrawer();
      }}
    >
      <List>
        <ListItem
          sx={{ display: "flex", justifyContent: "center" }}
          disablePadding
        >
          <IconButton
            sx={{ mb: "14px" }}
            onClick={() => {
              localStorage.setItem(
                "currentValue",
                theme.palette.mode === "light" ? "dark" : "light"
              );

              setMyMOde(theme.palette.mode === "light" ? "dark" : "light");
            }}
          >
            {theme.palette.mode === "dark" ? (
              <Brightness7Icon sx={{ color: "orange" }} />
            ) : (
              <Brightness4Icon />
            )}
          </IconButton>
        </ListItem>

        <Divider />

  {myList.map((item)=>{
    return(
     <ListItem
     key={item.text}
     sx={{
       bgcolor:
         location.pathname === item.path ? theme.palette.favColor.main : null,
     }}
     disablePadding
   >
     <ListItemButton
       onClick={() => {
         navigate(item.path);
       }}
     >
       <ListItemIcon>
         {item.icon}
       </ListItemIcon>
       <ListItemText primary={item.text} />
     </ListItemButton>
   </ListItem>
  )})}



        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <LogoutIcon />
            </ListItemIcon>
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Drawer>
  );
};

export default Drawerr;

// testing