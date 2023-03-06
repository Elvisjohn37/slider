import React from "react";
import Drawer from "@mui/material/Drawer";
import Button from "@mui/material/Button";
import ListItem from "@mui/material/ListItem";
import List from "@mui/material/List";
import "./Sidebar.scss";
import MenuIcon from "@mui/icons-material/Menu";
import Divider from "@mui/material/Divider";
import CloseIcon from "@mui/icons-material/Close";

const SideBar = () => {
  const [isDrawerOpen, setIsDrawerOpen] = React.useState(false);
  return (
    <div className="sidebar">
      <MenuIcon
        className="toggle"
        onClick={() => setIsDrawerOpen((prevState) => !prevState)}
      />
      <Drawer
        className="drawer"
        open={isDrawerOpen}
        anchor="right"
        onClose={() => setIsDrawerOpen((prevState) => !prevState)}
      >
        <List>
          <ListItem className="menuItem">
            <Button variant="outlined" color="secondary">
              Login
            </Button>
            <CloseIcon
              className="backButton"
              onClick={() => setIsDrawerOpen((prevState) => !prevState)}
            />
          </ListItem>
          <ListItem className="menuItem">Freestyale</ListItem>
          <ListItem className="menuItem">Personal loans</ListItem>
          <ListItem className="menuItem">OneDept</ListItem>
          <ListItem className="menuItem">moneyme</ListItem>
          <Divider className="divider" />
          <ListItem className="menuItem">Investors</ListItem>
          <ListItem className="menuItem">About us</ListItem>
          <ListItem className="menuItem">Contact us</ListItem>
          <ListItem className="menuItem">MME Blog</ListItem>
          <Divider className="divider" />
        </List>
      </Drawer>
    </div>
  );
};

export default SideBar;
