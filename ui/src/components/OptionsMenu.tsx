import * as React from 'react';
import IconButton from '@mui/material/IconButton';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import styled from 'styled-components';
import { ListItemIcon, ListItemText } from '@mui/material';

export interface MenuOption {
    text: string;
    icon: React.ReactNode;
    onClick: Function
}

const ITEM_HEIGHT = 48;

interface Props {
    className?: string
    options: MenuOption[]
}
const OptionsMenu = ({ className, options }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (onClick: Function) => {
    setAnchorEl(null);
    onClick()
  };

  return (
    <div className={className}>
      <IconButton
        aria-label="more"
        id="long-button"
        aria-controls={open ? 'long-menu' : undefined}
        aria-expanded={open ? 'true' : undefined}
        aria-haspopup="true"
        onClick={handleMenuClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        MenuListProps={{
          'aria-labelledby': 'long-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem
            className="menuEntry"
            key={option.text}
            onClick={() => handleClose(option.onClick)}
          >
            <ListItemIcon>
              {option.icon}
            </ListItemIcon>
            <ListItemText>{option.text}</ListItemText>
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}

export default styled(OptionsMenu)(({ theme }) => `
  
`)