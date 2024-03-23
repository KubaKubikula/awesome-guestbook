import React from "react";

import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import FavoriteIcon from "@mui/icons-material/Favorite";
import Typography from "@mui/material/Typography";

const TopBar = () => {
  return (
    <AppBar position="static">
      <Toolbar disableGutters>
        <div className="p-4 flex flex-row">
          <Typography variant="h6">
            <FavoriteIcon className="mx-3" />
            Guestbook
          </Typography>
        </div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
