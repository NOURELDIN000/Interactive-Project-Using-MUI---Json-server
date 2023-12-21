import { grey } from "@mui/material/colors";

const getDesignTokens = (mode => ({
    palette: {
        mode,
        ...(mode === "light"
          ? {
              // palette values for light mode
              nour: {
                main: "#647488",
              },
              favColor: {
                main: grey[300],
              },
            }
          : {
              // palette values for dark mode
              nour: {
                main: "teal",
              },
              favColor: {
                main: grey[800],
              },
            }),
      },
  }));

  export default getDesignTokens;


