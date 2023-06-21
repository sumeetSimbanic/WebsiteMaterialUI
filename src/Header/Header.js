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
import ApiIcon from "@mui/icons-material/Api";
import DrawerComp from "./DrawerComp";

const links = ["Product", "Solution", "Pricing", "Enterprice"];

const Header = () => {
  const isMatch = useMediaQuery(useTheme().breakpoints.down("md"));
  console.log(isMatch);
  return (
    <div>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: 0, position: "sticky" }}>
        {isMatch ? (
          <Box display="flex">
            <ApiIcon sx={{ color: "black" }} />
            <Typography variant="h6" fontFamily="fantasy">
              CodeEnv
            </Typography>
            <DrawerComp />
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
            <Typography
              margin="auto"
              variant="h4"
              color="black"
              textAlign={"center"}
            >
              Build Your Software Hassle Free And With Top Notch Quality
            </Typography>
          </Box>
          <Box
            width="100"
            display="flex"
            justifyContent={"center"}
            margin="auto"
            marginTop={5}
          >
            <Button variant="outlined" sx={{ mr: 3 }}>
              SignUp With Email
            </Button>
            <Button variant="contained" sx={{ mr: 3 }}>
              SignUp With Google
            </Button>
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header;
