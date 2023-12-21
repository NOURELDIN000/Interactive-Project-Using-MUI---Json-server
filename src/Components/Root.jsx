import React, { useMemo, useState } from "react";
import { Outlet } from "react-router-dom";

import Appbar from "./Appbar";
import Drawerr from "./Drawerr";
import { Box } from "@mui/material";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import getDesignTokens from "../Styles/myTheme";

const drawerWidth = 240;
const Root = () => {
  const [mode, setMyMOde] = useState(
    localStorage.getItem("currentValue") === null
      ? "dark"
      : localStorage.getItem("currentValue") === "light"
      ? "light"
      : "dark"
  );

  const [noneORblock, setnoneORblock] = useState("none");

  const [drawerType, setdrawerType] = useState("permanent");

  const showDrawer = () => {
    setnoneORblock("block");
    setdrawerType("Temporary");
  };

  const hideDrawer = () => {
    setdrawerType("permanent");
    setnoneORblock("none");
  };

  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Appbar
        drawerWidth={drawerWidth}
        setnoneORblock={setnoneORblock}
        setdrawerType={setdrawerType}
        showDrawer={showDrawer}
      />

      <Drawerr
        drawerWidth={drawerWidth}
        setMyMOde={setMyMOde}
        noneORblock={noneORblock}
        drawerType={drawerType}
        setdrawerType={setdrawerType}
        setnoneORblock={setnoneORblock}
        hideDrawer={hideDrawer}
      />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          ml: { xs: 0, sm: `${drawerWidth}px` },
          mt: "66px",
        }}
      >
        <Outlet />
      </Box>
    </ThemeProvider>
  );
};

export default Root;
