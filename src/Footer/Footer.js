import { Box, Button, Typography } from "@mui/material";
import React from "react";
import { CustomizedTypography } from "../Styles/styles";

const Footer = () => {
  return (
    <Box display="flex" flexDirection="column">
      <CustomizedTypography
        fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
        variant="h3"
        fontWeight="bold"
        paddingTop={10}
        textAlign="center"
      >
        Ready for Any Team Size
      </CustomizedTypography>
      <CustomizedTypography
        fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
        variant="div"
        textAlign="center"
        padding={4}
      >
        Optimized for Any Team Size
      </CustomizedTypography>
      <Box display="flex" margin="auto" justifyContent={"center"} padding={5}>
        <Button
          sx={{ mr: 2, fontSize: { lg: 18, md: 17, sm: 12, xs: 8 } }}
          variant="contained"
        >
          Try CodeFox For Free
        </Button>
        <Button
          sx={{ ml: 2, fontSize: { lg: 18, md: 17, sm: 12, xs: 8 } }}
          variant="outlined"
        >
          Talk To Sales
        </Button>
      </Box>
    </Box>
  );
};

export default Footer;
