import { Box, Button, InputAdornment, TextField, styled } from "@mui/material";
import React, { useState } from "react";

import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import { purple } from "@mui/material/colors";
import { useNavigate } from "react-router";

const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(purple[500]),
  backgroundColor: theme.palette.nour.main,
  "&:hover": {
    backgroundColor: theme.palette.nour.main,
    scale: "0.99",
  },
}));

function Create() {
  const [title, settitle] = useState("");
  const [price, setprice] = useState(0);
  const navigate = useNavigate();

  return (
    <div>
      <Box sx={{ width: "380px" }} component="form">
        <TextField
          onChange={(e) => {
            settitle(e.target.value);
          }}
          fullWidth
          label="Transaction Title"
          id="standard-start-adornment"
          sx={{ mt: "22px" }}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          }}
          variant="filled"
        />
        <TextField
          onChange={(e) => {
            setprice(Number(e.target.value));
          }}
          fullWidth
          label="Amount"
          id="standard-start-adornment"
          sx={{ mt: "22px" }}
          InputProps={{
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          }}
          variant="filled"
        />
        <ColorButton
          onClick={() => {
            fetch("http://localhost:3004/mydata", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({title, price}),
            }).then(navigate("/"))
          }}
          sx={{ mt: "22px" }}
          variant="contained"
        >
          Submit <ChevronRightIcon />
        </ColorButton>
      </Box>
    </div>
  );
}

export default Create;
