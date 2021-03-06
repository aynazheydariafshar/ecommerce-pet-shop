import Cart from "components/Cart";
import CustomerLayout from "layout/CustomerLayout";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Emptycart from "assets/images/emptycart.png";
import { Button, IconButton, Typography } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import { GrFormAdd, GrClose } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import PN from "persian-number";
import { Box } from "@mui/system";
import {
  addToCart,
  clearAllProduct,
  decreaseCount,
  getTotalOfPrice,
  removeFromCart,
} from "redux/cartSlice";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";

const CartProducts = () => {
  const navigate = useNavigate();

  //select cart from redux
  const cart = useSelector((state) => state.cart);

  //get state from redux
  const dispatch = useDispatch();

  //low count product
  const handlelowerCounter = (item) => {
    dispatch(decreaseCount(item));
  };

  //remove product from cart
  const handleRemoveProduct = (item) => {
    dispatch(removeFromCart(item));
  };

  //add product from cart
  const handleaddCounter = (item) => {
    dispatch(addToCart(item));
  };

  //clear all of products
  const handleclearAll = () => {
    dispatch(clearAllProduct());
    toast.error("تمام محصولات از سبد خرید شما حذف شد");
  };

  useEffect(() => {
    dispatch(getTotalOfPrice());
  }, [cart, dispatch]);

  return (
    <div>
      {cart.cartItems.length === 0 ? (
        <Cart width="75%" padding="10px">
          <Typography variant="h6" fontWeight="bold">
            سبد خرید شما در حال حاضر خالی است
          </Typography>
          <img src={Emptycart} alt="emptycart" width="400px" height="400px" />
        </Cart>
      ) : (
        <>
          {cart.cartItems?.map((item) => {
            return (
              <Cart mbottom="20px" width="75%" padding="10px">
                  <div
                    style={{
                      position: "relative",
                      display: "flex",
                      flexDirection: "column",
                      justifyContent: "space-around",
                      alignItems: "center",
                    }}
                  >
                    <IconButton
                      sx={{
                        position: "absolute",
                        top: 0,
                        fontSize: "30px",
                        opacity: 0.5,
                        left: 10,
                      }}
                      onClick={() => handleRemoveProduct(item)}
                    >
                      <GrClose />
                    </IconButton>
                    <Link className="link" to={`/products/${item.id}`}>
                    <CardMedia
                      component="img"
                      height="170"
                      image={`http://localhost:3002/files/${item.image}`}
                      alt={item.name}
                      sx={{ objectFit: "contain" }}
                    />
                     </Link>
                    <Box
                      key={item.id}
                      sx={{
                        display: "flex",
                        flexDirection: {
                          md: "row",
                          sm: "column",
                          xs: "column",
                        },
                        padding: "20px",
                        alignItems: "center",
                        marginLeft: "45px",
                      }}
                    >
                      <Typography padding="20px" variant="h6">
                        قیمت کل :
                        {PN.convertEnToPe(
                          PN.sliceNumber(item.price * item.cartQuantity)
                        )}
                        تومان
                      </Typography>
                      <Typography
                        sx={{
                          display: "flex",
                          borderRadius: "50px",
                          boxShadow:
                            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                        }}
                        padding="5px"
                        margin="20px"
                        variant="h6"
                        fontWeight="bold"
                      >
                        <IconButton
                          size="small"
                          sx={{ marginRight: "10px" }}
                          onClick={() => handleaddCounter(item)}
                        >
                          <GrFormAdd />
                        </IconButton>
                        <span>{PN.convertEnToPe(item.cartQuantity)}</span>
                        <IconButton
                          size="small"
                          sx={{ marginLeft: "10px" }}
                          onClick={() => handlelowerCounter(item)}
                        >
                          <BiMinus />
                        </IconButton>
                      </Typography>
                      <Typography padding="20px" variant="h6">
                        قیمت هر عدد :{" "}
                        {PN.convertEnToPe(PN.sliceNumber(item.price))}
                        تومان
                      </Typography>
                    </Box>
                  </div>
                </Cart>
            );
          })}
          <div
            style={{
              display: "flex",
              flexDirection: {
                lg: "row",
                md: "column",
                sm: "column",
                xs: "column",
              },
              justifyContent: "space-around",
              alignItems: "baseline",
              marginRight : '50px'
            }}
          >
            <Button
              onClick={() => navigate("/finalize")}
              variant="contained"
              color="success"
              sx={{
                marginBottom: "200px",
                marginLeft: "100px",
                marginTop: "20px",
                fontSize: "17px",
              }}
            >
              نهایی کردن سبد خرید
            </Button>
            <Button
              variant="contained"
              color="error"
              sx={{ marginTop: "20px", fontSize: "17px"}}
              onClick={handleclearAll}
            >
              حذف تمام محصولات{" "}
            </Button>
            <Typography variant="h5" fontWeight="bold" marginX="30px">
              جمع تمام محصولات :{" "}
              {PN.convertEnToPe(PN.sliceNumber(cart.cartTotalAmount))}
            </Typography>
          </div>
        </>
      )}
    </div>
  );
};

export default CustomerLayout(CartProducts);
