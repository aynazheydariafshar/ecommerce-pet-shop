import * as React from "react";
import { styled, alpha} from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import Badge from '@mui/material/Badge';
import Logo from 'assets/images/logo.png';
import ShoppingBasketRoundedIcon from '@mui/icons-material/ShoppingBasketRounded';
import ManageAccountsRoundedIcon from '@mui/icons-material/ManageAccountsRounded';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 0,
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  backgroundColor : '#F5F0FF',
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  fontSize : '15px',
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("md")]: {
      width: "20ch",
    },
  },
}));

export default function Header() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };


  const menuId = "primary-search-account-menu";

  const mobileMenuId = "primary-search-account-menu-mobile";

  return (
    <Box sx={{ flexGrow: 1}}>
      <AppBar position="static">
          <Box sx={{display: "flex" , justifyContent: 'space-between' , backgroundColor : '#F8F9FD', color : 'black' , padding :{xs : '15px' , sm : '0px'}}}>
            <Box sx={{ display: "flex" , alignItems : 'center'}}>
              <IconButton
                size="large"
                aria-label="show 17 new notifications"
                color="inherit"
              >
                <Badge badgeContent={1} color="error">
                  <ShoppingBasketRoundedIcon  className="icon-navbar"/>
                </Badge>
              </IconButton>
              <IconButton
                size="large"
                edge="end"
                aria-label="account of current user"
                aria-controls={menuId}
                aria-haspopup="true"
                // onClick={handleProfileMenuOpen}
                color="inherit"
              >
                <ManageAccountsRoundedIcon className="icon-navbar"/>
              </IconButton>
            </Box>
            <Box sx={{ display: "flex" , alignItems : 'center' , ml : '120px'}}>
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
            <Box sx={{ display: "flex" , alignItems : 'center'}}>
              <Search>
                <SearchIconWrapper>
                  <SearchIcon />
                </SearchIconWrapper>
                <StyledInputBase
                  placeholder="...جتسجو"
                  inputProps={{ "aria-label": "search" }}
                />
              </Search>
              <IconButton
                size="large"
                edge="start"
                color="inherit"
                aria-label="open drawer"
              >
                <MenuIcon  className="icon-navbar"/>
              </IconButton>
            </Box>  
          </Box>
      </AppBar>
    </Box>
  );
}
