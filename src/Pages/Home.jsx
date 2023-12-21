import { Box, IconButton, Paper, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import CloseIcon from "@mui/icons-material/Close";

function Home() {
  const [mydata, setmydata] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3004/mydata")
      .then((response) => response.json())
      .then((data) => setmydata(data));
  }, [mydata]);

  console.log(mydata);
  let totalPrice = 0;
  return (
    <Box>
      {mydata.map((item) => {
        totalPrice += item.price;
        return (
          <Paper
            key={item.id}
            sx={{
              position: "relative",
              width: "366px",
              display: "flex",
              justifyContent: "space-between",
              mt: "22px",
              pt: "27px",
              pb: "7px",
            }}
          >
            <Typography sx={{ ml: "16px", fontSize: "1.3em" }} variant="h6">
              {item.title}
            </Typography>
            <Typography
              sx={{
                mr: "33px",
                fontWeight: 500,
                fontSize: "1.4em",
                opacity: "0.8",
              }}
              variant="h6"
            >
              {item.price}
            </Typography>
            <IconButton
              onClick={() => {
                fetch(`http://localhost:3004/mydata/${item.id}`, {
                  method: "DELETE",
                });
              }}
              sx={{ position: "absolute", top: "0", right: "0" }}
            >
              <CloseIcon sx={{ fontSize: "20px" }} />
            </IconButton>
          </Paper>
        );
      })}

      <Typography textAlign="center" mt="55px" variant="h6">
        👉 You spend ${totalPrice}
      </Typography>
    </Box>
  );
}

export default Home;
