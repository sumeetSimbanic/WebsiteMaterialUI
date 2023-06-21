import React from "react";
import { AppBar, Box, Tabs, Toolbar, Tab, Button, Link } from "@mui/material";
import ApiIcon from "@mui/icons-material/Api";

const links = ["Product", "Solution", "Pricing", "Enterprice"];
const Header = () => {
  return (
    <div>
      <AppBar sx={{ bgcolor: "transparent", boxShadow: 0 }}>
        <Toolbar>
          <Box sx={{ display: "sflex", width: "100%", alignItems: "center" }}>
            <ApiIcon sx={{ color: "black" }} />
            <Box>
              <Tabs component={Link}>
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
        <Box width="100%" height="100vh">
          <video width={"100%"} height="50%" autoPlay loop muted play>
            <source src="./video.mp4" type="video/mp4" />
          </video>
          <Box>
            <Typography
              margin="auto"
              variant="h4"
              color="black"
              textAlign={center}
            >
              Build Your Software Hassle Free And With Top Notch Quality
            </Typography>
          </Box>
        </Box>
      </AppBar>
    </div>
  );
};

export default Header;
