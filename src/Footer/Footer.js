import { Box, Button, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <Typography variant="h3" paddingTop={10} textAlign="center">
        Ready for Any Team Size
      </Typography>
      <Typography variant="div" textAlign="center" padding={4}>
        Optimized for Any Team Size
      </Typography>
      <Box display="flex" margin="auto" justifyContent={"center"} padding={5}>
        <Button sx={{ mr: 2 }} variant="contained">
          Try CodeFox For Free
        </Button>
        <Button sx={{ ml: 2 }} variant="outlined">
          Talk To Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
