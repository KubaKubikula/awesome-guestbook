import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import FavoriteIcon from "@mui/icons-material/Favorite";

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <div className="p-4 flex flex-row">
          <FavoriteIcon className="mx-3" />
          <h1>Guestbook</h1>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
