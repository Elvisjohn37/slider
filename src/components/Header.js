import React from "react";
import Button from "@mui/material/Button";

import "./Header.scss";
import SideBar from "./Sidebar";

const Header = () => {
  return (
    <div className="header">
      <div className="logo">Logo.</div>
      <div className="navigation">
        <Button className="login" variant="outlined">
          Login
        </Button>
        <SideBar />
      </div>
      <h1>Low rates. Fast approvals.</h1>
    </div>
  );
};

export default Header;
