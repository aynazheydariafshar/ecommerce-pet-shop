import Cart from "components/Cart";
import CustomerLayout from "layout/CustomerLayout";
import React from "react";
import unsuccessful from "assets/images/Cat throwing a vase-amico.png";
import { Typography } from "@mui/material";

const Unsuccessful = () => {
  return (
    <Cart width="75%" padding="25px">
      <img src={unsuccessful} width="400px" height="400px" alt="unsuccessful" />
      <Typography fontWeight="bold" variant="h6" align="right">
        پرداخت موفقیت آمیز نبود، سفارش شما در انتظار پرداخت است
      </Typography>
    </Cart>
  );
};

export default CustomerLayout(Unsuccessful);
