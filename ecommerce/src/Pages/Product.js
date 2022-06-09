import { Button, IconButton, Typography } from "@mui/material";
import { Box } from "@mui/system";
import useCategory from "hooks/useCategory";
import useFetch from "hooks/useFetch";
import CustomerLayout from "layout/CustomerLayout";
import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router";
import { MdOutlineAddCircleOutline } from "react-icons/md";
import { CgUnavailable } from "react-icons/cg";
import Cart from "components/Cart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, decreaseCount, removeFromCart } from "redux/cartSlice";
import PN from "persian-number";
import { GrFormAdd } from "react-icons/gr";
import { BiMinus } from "react-icons/bi";
import Spinner from "components/Spinner";
import {BiArrowBack} from "react-icons/bi"

const Product = () => {
  //select cart from redux
  const cart = useSelector((state) => state.cart);

  const navigate = useNavigate()

  //get state from redux
  const dispatch = useDispatch();

  //add params for every single product
  const dataParams = useParams();

  //get data from products
  const { data, loading, error } = useFetch("products");
  const [product, setProduct] = useState();

  //get data from category
  const { category, loadingcategory, errorcategory } = useCategory();

  //add product to card when click on button
  const handleAddToCard = (item) => {
    dispatch(addToCart(item));
  };

  //find single product with filter
  const filterData = useMemo(() => {
    return data.filter((item) => item.id === +dataParams.id);
  });

  //low count product
  const handlelowerCounter = (item) => {
    dispatch(decreaseCount(item));
  };

  //add product from cart
  const handleaddCounter = (item) => {
    dispatch(addToCart(item));
  };

  //find count product
  const findproduct = (item) => {
    return cart.cartItems.findIndex((el) => item.id === el.id);
  };

  useEffect(() => {
    setProduct(filterData);
  }, [data , dataParams]);

  return (
    <>
      {loading ? (
        <Box
          sx={{ display: "flex", justifyContent: "center", marginY: "150px" }}
        >
          <Spinner />
        </Box>
      ) : (
        <>
          <Button variant="contained" onClick={() => navigate(-1)} sx={{padding : '10px' , margin : '20px'}} color="warning"  startIcon={<BiArrowBack />}>بازگشت</Button>
          {product?.map((item) => {
            return (
              <>
                <Cart width="85%" padding={{sm : '75px' , xs : "200px"}} mbottom="150px">
                  <Box sx={{ textAlign: "right" }}>
                    <Typography
                      variant="h5"
                      sx={{ fontWeight: "bold", paddingY: "10px" }}
                      component="div"
                    >
                      {item.name}
                    </Typography>
                    <Typography color="#652AD2" paddingY="5px">
                      {category?.map((el) => {
                        if (item.category === el.id) {
                          return (
                            <>
                              <span
                                style={{ fontWeight: "bold" }}
                              >{`${el.group}`}</span>
                              {el.subgroup && (
                                <span
                                  style={{ fontWeight: "bold" }}
                                >{`>${el.subgroup}`}</span>
                              )}
                            </>
                          );
                        }
                      })}
                    </Typography>
                    <Typography
                      color="success.main"
                      variant="h6"
                      component="div"
                      sx={{ paddingY: "5px", fontWeight: "bold" }}
                    >
                      قیمت : {PN.convertEnToPe(PN.sliceNumber(item.price))}{" "}
                      تومان
                    </Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      sx={{ paddingY: "5px", fontWeight: "bold" }}
                    >
                      برند : {item.brand}
                    </Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      sx={{ paddingY: "5px", fontWeight: "bold" }}
                    >
                      گونه حیوان : {item.type}
                    </Typography>
                    <Typography
                      variant="h7"
                      component="div"
                      sx={{ paddingY: "5px", fontWeight: "bold" }}
                    >
                      وزن : {`${PN.convertEnToPe(item.weight)} گرم`}
                    </Typography>
                    {item.detailes && (
                      <Typography
                        variant="h7"
                        component="div"
                        sx={{ paddingY: "15px" }}
                      >
                        : سایر مشخصات
                        <ul style={{ listStyleType: "none" }}>
                          {item.detailes?.map((i) => (
                            <li style={{ marginRight: "30px" }}>{i}</li>
                          ))}
                        </ul>
                      </Typography>
                    )}
                    {item.count === 0 ? (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Typography
                          variant="h6"
                          component="div"
                          sx={{
                            float: "left",
                            paddingY: "15px",
                            fontWeight: "bold",
                            color: "red",
                          }}
                        >
                          ناموجود{" "}
                        </Typography>
                        <CgUnavailable color="red" fontSize="20px" />
                      </Box>
                    ) : (
                      <Box sx={{ display: "flex", alignItems: "center" }}>
                        <Button
                          color="secondary"
                          variant="contained"
                          sx={{ float: "left", marginTop: "20px" , marginLeft : '20px'}}
                          endIcon={<MdOutlineAddCircleOutline />}
                          onClick={() => handleAddToCard(item)}
                        >
                          افزودن به سبد خرید
                        </Button>
                        {cart.cartItems[findproduct(item)]?.cartQuantity >
                          0 && (
                          <Typography
                            sx={{
                              display: "flex",
                              borderRadius: "50px",
                              boxShadow:
                                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
                            }}
                            padding="5px"
                            marginX="50px"
                            marginTop="26px"
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
                            <span>
                              {PN.convertEnToPe(
                                cart.cartItems[findproduct(item)].cartQuantity
                              )}
                            </span>
                            <IconButton
                              size="small"
                              sx={{ marginLeft: "10px" }}
                              onClick={() => handlelowerCounter(item)}
                            >
                              <BiMinus />
                            </IconButton>
                          </Typography>
                        )}
                      </Box>
                    )}
                  </Box>
                  <Box padding="10px">
                    <img
                      src={`http://localhost:3002/files/${item.image}`}
                      width="300px"
                      height="300px"
                    />
                  </Box>
                </Cart>
                {item.description && (
                  <Typography
                    variant="h6"
                    component="div"
                    sx={{
                      padding: "35px",
                      marginX: "50px",
                      textAlign: "right",
                      marginBottom: "150px",
                    }}
                  >
                    : توضیحات
                    <div>{item.description} </div>
                  </Typography>
                )}
              </>
            );
          })}
        </>
      )}
    </>
  );
};

export default CustomerLayout(Product);
