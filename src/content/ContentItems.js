import React from "react";
import { Box, Typography, useMediaQuery, useTheme } from "@mui/material";
import { CustomizedTypography } from "../Styles/styles";

const ContentItems = ({ title, description, img, swap }) => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));

  return (
    <Box
      bgcolor={!swap && "#fff"}
      display="flex"
      flexDirection={isMatch ? "column" : "row"}
      padding={10}
      justifyContent="space-between"
      alignItems="center"
    >
      {swap ? (
        <>
          <ContentBox title={title} description={description} />
          <EmptyBox />
          <ContentImage img={img} isMatch={isMatch} />
        </>
      ) : (
        <>
          <ContentImage img={img} isMatch={isMatch} />
          <EmptyBox />
          <ContentBox title={title} description={description} />
        </>
      )}
    </Box>
  );
};

const ContentBox = ({ title, description }) => (
  <Box>
    <CustomizedTypography
      fontSize={{ lg: 32, md: 28, sm: 24, xs: 20 }}
      fontWeight={"bold"}
      color="#734950"
      padding={3}
      variant="h3"
    >
      {title}
    </CustomizedTypography>
    <CustomizedTypography
      fontSize={{ lg: 24, md: 20, sm: 16, xs: 14 }}
      padding={3}
      variant="caption"
    >
      {description}
    </CustomizedTypography>
  </Box>
);

const ContentImage = ({ img, isMatch, title }) => (
  <img
    src={img}
    alt={title}
    loading="lazy"
    width={isMatch ? "100%" : "50%"}
    style={{
      boxShadow: "10px 10px 20px #ccc ",
      borderRadius: 20,
    }}
    height="300px"
  />
);

const EmptyBox = ({ marginRight, marginLeft }) => (
  <Box
    width="10%"
    style={{
      marginRight: marginRight ? "5%" : 0,
      marginLeft: marginLeft ? "5%" : 0,
    }}
  ></Box>
);

export default ContentItems;
