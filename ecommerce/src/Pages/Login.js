import { Button, Grid, InputAdornment, TextField } from "@mui/material";
import React, { useState } from "react";
import LoginImage from "assets/images/24237-Cat-Dog-CorgiCat-Dog-HD-Wallpaper.jpg";
import Logo from "assets/images/logo.png";
import PersonRoundedIcon from "@mui/icons-material/PersonRounded";
import KeyRoundedIcon from "@mui/icons-material/KeyRounded";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as yup from "yup";
import axios from "axios";
import { setUserSession } from "utils/Common";
import HomeIcon from "@mui/icons-material/Home";
import { toast } from "react-toastify";

const Login = (props) => {
  //check for api
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate();

  //validation
  const validationSchema = yup.object({
    username: yup.string().required("پر کردن این فیلد الزامی می باشد"),
    password: yup.string().required("پر کردن این فیلد الزامی می باشد"),
  });

  //formik
  const formik = useFormik({
    initialValues: {
      username: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      setError(null);
      setLoading(false);
      axios
        .post("http://localhost:3002/auth/login", {
          username: values.username,
          password: values.password,
        })
        .then((response) => {
          setLoading(true);
          setUserSession(response.data.token, response.data.user);
          navigate("/management-productes");
          toast.success("کاربر با موفقیت وارد شد", {
            position: "bottom-right",
          });
        })
        .catch((error) => {
          setLoading(true);
          if (error.response.status === 401 || error.response.status === 400) {
            toast.error("درخواست با کد وضعیت 400 ناموفق بود");
          } else {
            toast.error("نام کاربری یا رمز عبور اشتباه است");
          }
        });
    },
  });

  return (
    <div>
      <Grid container sx={{ minHeight: "100vh", overflowY: "hidden" }}>
        <Grid item xs={12} sm={6}>
          <img
            alt="animal"
            src={LoginImage}
            width="100%"
            height="100%"
            style={{ objectFit: "cover" }}
          />
        </Grid>
        <Grid
          container
          alignItems="center"
          direction="column"
          justifyContent="space-around"
          xs={12}
          sm={6}
          sx={{ my: { xs: "30px", sm: "0px" } }}
        >
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              maxWidth: 350,
              boxShadow:
                "rgba(0, 0, 0, 0.1) 0px 4px 6px -1px, rgba(0, 0, 0, 0.06) 0px 2px 4px -1px",
              minWidth: 300,
              padding: "25px",
            }}
          >
            <form onSubmit={formik.handleSubmit}>
              <Grid container justifyContent="center">
                <img src={Logo} alt="logo" width="50px" height="50px" />
              </Grid>
              <TextField
                fullWidth
                variant="standard"
                type="text"
                label="نام کاربری"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <PersonRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                id="username"
                name="username"
                value={formik.values.username}
                onChange={formik.handleChange}
                error={
                  formik.touched.username && Boolean(formik.errors.username)
                }
                helperText={formik.touched.username && formik.errors.username}
              />
              <TextField
                fullWidth
                variant="standard"
                type="password"
                label="رمز عبور"
                margin="normal"
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <KeyRoundedIcon />
                    </InputAdornment>
                  ),
                }}
                id="password"
                name="password"
                value={formik.values.password}
                onChange={formik.handleChange}
                error={
                  formik.touched.password && Boolean(formik.errors.password)
                }
                helperText={formik.touched.password && formik.errors.password}
              />
              <div>
                <Button
                  type="submit"
                  fullWidth
                  sx={{ my: "20px" }}
                  color="primary"
                  variant="contained"
                >
                  ورود
                </Button>
              </div>
              <div>
                <Link to="/">
                  <HomeIcon className="icon-navbar" color="action" />
                </Link>
              </div>
            </form>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
