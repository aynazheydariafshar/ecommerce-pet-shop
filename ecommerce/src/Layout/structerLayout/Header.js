import * as React from "react";
import { styled, alpha } from "@mui/material/styles";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import InputBase from "@mui/material/InputBase";
import SearchIcon from "@mui/icons-material/Search";
import Badge from "@mui/material/Badge";
import Logo from "assets/images/logo.png";
import ShoppingBasketRoundedIcon from "@mui/icons-material/ShoppingBasketRounded";
import ManageAccountsRoundedIcon from "@mui/icons-material/ManageAccountsRounded";
import { Link, useSearchParams } from "react-router-dom";
import { useSelector } from "react-redux";
import PN from "persian-number";
import useFetch from "hooks/useFetch";
import {MdClose} from 'react-icons/md';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginRight: theme.spacing(2),
  marginLeft: 20,
  border: "1px solid #eeeeee",
  width: "100%",
  [theme.breakpoints.up("sm")]: {
    marginLeft: theme.spacing(3),
    width: "auto",
  },
  backgroundColor: "#F5F0FF",
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
  fontSize: "15px",
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

  //select cart from redux
  const cart = useSelector((state) => state.cart);

  //  //data from products database
    const { data, loading, error } = useFetch("products");
    const [filterData, setfilterData] = React.useState([]);
    const [search, setSearch] = useSearchParams();

     //filter serach box
     const handleFilter = (e) => {
      const searchWord = e.target.value;
      setSearch({ name : searchWord});
      const newFilter = data.filter(item => {
          return item.name.toLowerCase().includes(searchWord.toLowerCase());
        });

      if(searchWord === ""){
          setfilterData([]);
      }else{
          setfilterData(newFilter);
      }
  }

  const handleCloseSearch = ()=> {
    setfilterData([]);
    setSearch("");
  }


  return (
    <Box sx={{ flexGrow: 1  }}>
      <AppBar position="static">
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            backgroundColor: "#F8F9FD",
            color: "black",
            padding: "12px",
          }}
        >
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              size="large"
              aria-label="show 17 new notifications"
              color="inherit"
            >
              <Link to="/cart" className="link">
                <Badge
                  badgeContent={
                    cart.cartItems.length !== 0
                      ? PN.convertEnToPe(cart.cartItems.length)
                      : PN.convertEnToPe(0)
                  }
                  color="error"
                >
                  <ShoppingBasketRoundedIcon className="icon-navbar" />
                </Badge>
              </Link>
            </IconButton>
            <IconButton sx={{ mt: "8px" }} color="inherit">
              <Link to="/management-productes" className="link">
                <ManageAccountsRoundedIcon className="icon-navbar" />
              </Link>
            </IconButton>
            <Search>
              <SearchIconWrapper>
                {filterData?.length === 0 ? <SearchIcon /> : <IconButton onClick={handleCloseSearch}><MdClose /></IconButton>}
              </SearchIconWrapper>
              <StyledInputBase
                onChange={handleFilter}
                placeholder="...جتسجو"
                inputProps={{ "aria-label": "search" }}
                value={search.get('name')}
                // search-div-select
              />
              {filterData?.length !== 0 && (
                <div className="search-data">
                  {filterData?.slice(0, 5).map((item) => {
                    return (<Box sx={{marginTop : '10px'}}>
                      <Link className="link search" to={`/products/${item.id}`}>
                        {item.name}
                      </Link>
                    </Box>
                    );
                  })}
                </div>
              )}
            </Search>
          </Box>
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{
                marginRight: { xs: "55px", sm: "0px" },
                fontWeight: "bold",
              }}
            >
              Pet Store <span style={{ color: "#9e64ff" }}>Dr Afshar</span>
            </Typography>
            <Toolbar
              sx={{
                display: { sm: "none", md: "block" },
                padding: "5px",
                mt: "10px",
              }}
            >
              <Link to="/">
                <img src={Logo} alt="logo" width="50px" height="50px" />
              </Link>
            </Toolbar>
          </Box>
        </Box>
      </AppBar>
    </Box>
  );
}
