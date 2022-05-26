import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';
import MoreIcon from '@mui/icons-material/MoreVert';
import Logo from 'assets/images/logo.png';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import LogoutIcon from '@mui/icons-material/Logout';
import HomeIcon from '@mui/icons-material/Home';
import {Link} from 'react-router-dom';
import { removeUserSession } from 'utils/Common';
import { useNavigate } from 'react-router-dom';

export default function NavbarManagment() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const navigate = useNavigate()

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

//logout func
const handleLogOut = () => {
    removeUserSession();
    navigate('/login');
  }

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
                <Link to='/' className='link'>
                    <Button className="btn-color"> خانه اصلی</Button>
                </Link>
            </Stack>
      </MenuItem>
      <MenuItem>
            <Stack direction="row" spacing={2}>
                <Button className="btn-color">کالا ها</Button>
            </Stack>  
      </MenuItem>
      <MenuItem>
            <Stack direction="row" spacing={2}>
                <Button className="btn-color">موجودی و قیمت ها</Button>
            </Stack>
      </MenuItem>
      <MenuItem>
            <Stack direction="row" spacing={2}>
                <Button className="btn-color">سفارش ها</Button>
            </Stack>
      </MenuItem>
      <MenuItem>
            <Stack direction="row" spacing={2}>
                <Button onClick={handleLogOut} className="btn-color"> خروج</Button>
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
                    <Link to='/'>
                        <img src={Logo} alt="logo" width='50px' height='50px'/>
                    </Link>
                </Toolbar>
                <Typography
                    variant="h5"
                    noWrap
                    component="div"
                    sx={{marginRight : {xs : '55px' , sm : '0px'} , fontWeight : 'bold'}}
                >
                Pet Store Dr Afshar 
                </Typography>
            </Box>
            <Box sx={{ flexGrow: 1 }} />
            <Box sx={{ display: { xs: 'none', md: 'flex'}  , marginRight : '15px' , alignItems : 'center'}}>
                <Link to='/orders' className='link'>
                  <Stack direction="row" spacing={2}>
                      <Button className="btn-color">سفارش ها</Button>
                  </Stack>  
                </Link>
                <Link to='/inventory' className='link'>
                  <Stack direction="row" spacing={2}>
                      <Button className="icon-navbar btn-color">موجودی و قیمت ها</Button>
                  </Stack>  
                </Link>
                <Link to='/management-productes' className='link'>
                  <Stack direction="row" spacing={2}>
                      <Button className="icon-navbar btn-color" sx={{mr : '70px'}}>کالاها</Button>
                  </Stack>   
                </Link>
                <IconButton size="large" color="inherit">
                    <LogoutIcon onClick={handleLogOut} className="icon-navbar"/>
                </IconButton> 
                <IconButton size="large" color="inherit">
                    <Link to='/' className="link">
                        <HomeIcon className="icon-navbar"/>
                    </Link>
                </IconButton> 
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
