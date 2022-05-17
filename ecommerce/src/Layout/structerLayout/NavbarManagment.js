import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import Badge from '@mui/material/Badge';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import AccountCircle from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from 'assets/images/logo.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';


export default function NavbarManagment() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = 'primary-search-account-menu';
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMenuOpen}
      onClose={handleMenuClose}
    >
      <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
      <MenuItem onClick={handleMenuClose}>My account</MenuItem>
    </Menu>
  );

  const mobileMenuId = 'primary-search-account-menu-mobile';
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: 'top',
        horizontal: 'right',
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
      <MenuItem>
            <Stack direction="row" spacing={2}>
                <Button className="icon-navbar btn-color">کالا ها</Button>
            </Stack>  
      </MenuItem>
      <MenuItem>
            <Stack direction="row" spacing={2}>
                <Button className="icon-navbar btn-color">موجودی و قیمت ها</Button>
            </Stack>
      </MenuItem>
      <MenuItem onClick={handleProfileMenuOpen}>
            <Stack direction="row" spacing={2}>
                <Button className="icon-navbar btn-color">سفارش ها</Button>
            </Stack>
      </MenuItem>
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{backgroundColor : '#F8F9FD' , color : 'black'}}>
          <Box sx={{ display: "flex" , alignItems : 'center'}}>
            <Box sx={{ display: "flex" , alignItems : 'center'}}>
                <Toolbar sx={{ display: { xs: "none" , sm: 'block' } , padding : '5px' , mt : '10px' }}>
                    <img src={Logo} alt="logo" width='50px' height='50px'/>
                </Toolbar>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{marginRight : {xs : '55px' , sm : '0px'}}}
                >
                Dr Afshar 
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex'} }}>
                <Stack direction="row" spacing={2}>
                    <Button className="icon-navbar btn-color">سفارش ها</Button>
                </Stack>  
                <Stack direction="row" spacing={2}>
                    <Button className="icon-navbar btn-color">موجودی و قیمت ها</Button>
                </Stack>  
                <Stack direction="row" spacing={2}>
                    <Button className="icon-navbar btn-color">کالاها</Button>
                </Stack>    
            </Box>
            <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                <IconButton
                size="large"
                aria-label="show more"
                aria-controls={mobileMenuId}
                aria-haspopup="true"
                onClick={handleMobileMenuOpen}
                color="inherit"
                >
                <MoreIcon />
                </IconButton>
            </Box>
          </Box>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}
