import { Box } from "@mui/material";
import React from "react";
import ContentItems from "./ContentItems";

const contentArray = [
  {
    title: "Get Things Done",
    description:
      "An Editor is a professional who is the voice of a company, ensuring that all written materials are accurate and of high quality. ",
    img: "/images/1.jpg",
  },
  {
    title: "Productivity Is Briliant",
    description:
      "An Editor is a professional who is the voice of a company, ensuring that all written materials are accurate and of high quality. ",
    img: "/images/3.jpg",
  },
  {
    title: "Fast Development",
    description:
      "An Editor is a professional who is the voice of a company, ensuring that all written materials are accurate and of high quality. ",
    img: "/images/1.jpg",
  },
];

const Content = () => {
  return (
    <Box
      bgcolor="#fbf2f2"
      display="flex"
      justifyContent={"center"}
      flexDirection="column"
      width="100%"
      height="10%"
    >
      {contentArray.map((cont, index) => (
        <ContentItems
          title={cont.title}
          description={cont.description}
          img={cont.img}
          key={index}
          swap={index % 2 == 0}
        />
      ))}
    </Box>
  );
};

export default Content;
