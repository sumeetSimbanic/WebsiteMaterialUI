import React from "react";
import { Box, Typography } from "@mui/material";

const ContentItems = ({ title, description, img, swap }) => {
  return (
    <Box
      bgcolor={!swap && "#fff"}
      display="flex"
      padding={10}
      justifyContent="space-between"
      alignItems="center"
    >
      {swap ? (
        <>
          {""}
          <Box>
            <Typography color="#734950" padding={3} variant="h3">
              {title}
            </Typography>
            <Typography padding={3} variant="caption">
              {description}
            </Typography>
          </Box>
          <Box width="10%" style={{ marginRight: "5%" }}></Box>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width="50%"
            style={{
              boxShadow: "10px 10px 20px #ccc ",
              borderRadius: 20,
            }}
            height="300px"
          />
          {""}
        </>
      ) : (
        <>
          <img
            src={img}
            alt={title}
            loading="lazy"
            width="50%"
            style={{
              boxShadow: "10px 10px 20px #ccc ",
              borderRadius: 20,
            }}
            height="300px"
          />
          {""}
          <Box width="10%" style={{ marginLeft: "5%" }}></Box>
          <Box>
            <Typography color="#734950" padding={3} variant="h3">
              {title}
            </Typography>
            <Typography padding={3} variant="caption">
              {description}
            </Typography>
          </Box>
        </>
      )}
    </Box>
  );
};

export default ContentItems;
