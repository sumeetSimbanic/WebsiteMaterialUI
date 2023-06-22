import {
  Drawer,
  ListItemText,
  List,
  ListItemButton,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
const DrawerComp = ({ links }) => {
  const [open, setOpen] = useState(false);
  return (
    <React.Fragment>
      <Drawer open={open} onClose={() => setOpen(false)}>
        <List>
          {links.map((item, index) => (
            <ListItemButton onClick={() => setOpen(false)} key={index}>
              <ListItemText>{item}</ListItemText>
            </ListItemButton>
          ))}
        </List>
      </Drawer>
      <IconButton onClick={() => setOpen(true)} sx={{ ml: "auto" }}>
        <MenuIcon color="white" />
      </IconButton>
    </React.Fragment>
  );
};

export default DrawerComp;
