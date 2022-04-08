import React from "react";
import { useState } from "react";
import { MenuItem, Menu, Button, Avatar, Grid, Typography } from "@mui/material";
import CloudIcon from '@mui/icons-material/Cloud';
import EmailIcon from '@mui/icons-material/Email';
import StarIcon from '@mui/icons-material/Star';
import SavedSearchIcon from '@mui/icons-material/SavedSearch';

const NavBar = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Grid className="whole_page_nav">
            <Grid className="nav_bar">
                <div>
                    <Button
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >
                        <Avatar/><Typography variant="p" color="white" textTransform='none' padding='1rem'>Howdy, Partner!</Typography>
                    </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}><CloudIcon/><Typography padding='0.5rem'>Upload</Typography></MenuItem>
                        <MenuItem onClick={handleClose}><EmailIcon/><Typography padding='0.5rem'>Messages</Typography></MenuItem>
                        <MenuItem onClick={handleClose}><StarIcon/><Typography padding='0.5rem'>Bookmarks</Typography></MenuItem>
                        <MenuItem onClick={handleClose}><SavedSearchIcon/><Typography padding='0.5rem'>Search</Typography></MenuItem>
                    </Menu>
                </div>
            </Grid>
            <Grid></Grid>
        </Grid>
    );
}

export default NavBar;