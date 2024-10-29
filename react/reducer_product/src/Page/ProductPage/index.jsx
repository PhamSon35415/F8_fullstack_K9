import * as React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

export default function ProductActionsMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <Button
                aria-controls={open ? "product-actions-menu" : undefined}
                aria-haspopup="true"
                onClick={handleClick}
                endIcon={<KeyboardArrowDownIcon />}
            >
                Product
            </Button>
            <Menu
                id="product-actions-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
            >
                <MenuItem onClick={handleClose}>All Product</MenuItem>
                <MenuItem onClick={handleClose}>Add Product</MenuItem>
                <MenuItem onClick={handleClose}>Delete Product</MenuItem>
            </Menu>
        </div>
    );
}
