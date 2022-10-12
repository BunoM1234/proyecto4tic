import React from "react";
import MenuItem from "@material-ui/core/MenuItem";
import Button from "@material-ui/core/Button";
import Menu from "@material-ui/core/Menu";
import { HiMenuAlt3 } from "react-icons/hi";
import IconButton from '@mui/material/IconButton';

  
function MenuButton() {
    const [anchorEl, setAnchorEl] = React.useState(null);
  
    const handleClose = () => {
      setAnchorEl(null);
    };
    
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    return(
        <div
      style={{
        marginLeft: "40%",
      }}
    >
      <IconButton
        aria-controls="simple-menu"
        aria-haspopup="true"
        onClick={handleClick}
        variant='contained'
        backgroundColor='blue'
        size='large'
      >
        <HiMenuAlt3/>
      </IconButton>
      <Menu
        keepMounted
        anchorEl={anchorEl}
        onClose={handleClose}
        open={Boolean(anchorEl)}
      >
        <MenuItem onClick={handleClose}>My Account</MenuItem>
        <MenuItem onClick={handleClose}>Settings</MenuItem>
        <MenuItem onClick={handleClose}>Profile</MenuItem>
        <MenuItem onClick={handleClose}>Logout</MenuItem>
      </Menu>
    </div>
    );
};

    export default MenuButton;