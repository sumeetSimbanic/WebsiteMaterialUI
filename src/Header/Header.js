import React from "react";
import {
  AppBar,
  Box,
  Tabs,
  Toolbar,
  Tab,
  Button,
  Link,
  useMediaQuery,
  Typography,
  useTheme,
} from "@mui/material";
import GoogleIcon from "@mui/icons-material/Google";
import ApiIcon from "@mui/icons-material/Api";
import EmailIcon from "@mui/icons-material/Email";
import DrawerComp from "./DrawerComp";
import { CustomizedTypography } from "../Styles/styles";

const links = ["Product", "Solution", "Pricing", "Enterprice"];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  console.log(isMatch);
  return (
    <div>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: 0, position: "sticky" }}>
        {isMatch ? (
          <Box display="flex">
            <ApiIcon sx={{ color: "black", padding: 1 }} />
            <Typography
              sx={{ padding: 0.5, color: "black" }}
              variant="h6"
              fontFamily="fantasy"
            >
              CodeEnv
            </Typography>
            <DrawerComp links={links} />
          </Box>
        ) : (
          <Toolbar>
            <Box sx={{ display: "flex", width: "100%", alignItems: "center" }}>
              <ApiIcon sx={{ color: "black" }} />
              <Box>
                <Tabs>
                  {links.map((link, index) => (
                    <Tab
                      sx={{
                        fontWeight: "bold",
                      }}
                      key={index}
                      label={link}
                    />
                  ))}
                </Tabs>
              </Box>
              <Box display="flex" marginLeft={"auto"}>
                <Button sx={{ mr: 2 }} variant="outlined">
                  Talk to us
                </Button>
                <Button variant="contained">Try for free</Button>
              </Box>
            </Box>
          </Toolbar>
        )}

        <Box width="100%" height="100vh">
          <video width={"100%"} height="70%" autoPlay loop muted play>
            <source src="./video.mp4" type="video/mp4" />
          </video>
          <Box>
            <CustomizedTypography
              fontSize={{ lg: 30, md: 24, sm: 18, xs: 14 }}
              margin="auto"
              variant="h4"
              color="black"
              textAlign={"center"}
            >
              Build Your Software Hassle Free And With Top Notch Quality
            </CustomizedTypography>
          </Box>
          <Box
            width="100"
            display="flex"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
          >
            <Button endIcon={<EmailIcon />} variant="outlined" sx={{ mr: 3 }}>
              SignUp
            </Button>
            <Button
              endIcon={<GoogleIcon />}
              color="error"
              variant="contained"
              sx={{ mr: 3 }}
            >
              SignUp
            </Button>
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header;
