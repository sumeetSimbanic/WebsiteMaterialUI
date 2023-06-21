import {
  Drawer,
  ListItemText,
  List,
  ListItemButton,
  IconButton,
} from "@mui/material";
import React from "react";
import MenuIcon from "@mui/icons-material/Menu";
const sampleList = ["products", "service"];
const DrawerComp = () => {
  return (
    <React.Fragment>
      <Drawer open={true}>
        <List>
          {sampleList.map((item) => (
            <ListItemButton>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton>
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
