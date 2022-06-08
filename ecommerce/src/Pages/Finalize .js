import Cart from 'components/Cart';
import CustomerLayout from 'layout/CustomerLayout';
import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import {Button, IconButton, InputAdornment, TextField } from '@mui/material';
import DatePicker, { Calendar, DateObject } from "react-multi-date-picker";
import persian from "react-date-object/calendars/persian";
import persian_fa from "react-date-object/locales/persian_fa";
import "react-multi-date-picker/styles/layouts/prime.css";
import {GrUserExpert} from 'react-icons/gr'

const Finalize  = () => {

    const [show , setShow] = useState(false);
    let [date, setDate] = useState(new DateObject());

    const handleCalender = () => {
        setShow(!show);
    }
   
     //validation
     const validationSchema = yup.object().shape({
        firstName: yup
            .string()
            .max(20, "این فیلد حداکثر 20 کارکتر می پذیرد")
            .required('پر کردن این فیلد الزامی می باشد'),
        lastName: yup
            .string()
            .max(40, "این فیلد حداکثر 40 کارکتر می پذیرد")
            .required('پر کردن این فیلد الزامی می باشد'),
        billingAddress: yup
            .string()
            .required('پر کردن این فیلد الزامی می باشد')
            .min(5, "این فیلد حداقل 5 کارکتر می پذیرد")
            .max(300, "این فیلد حداکثر 300 کارکتر می پذیرد"),
        phone: yup
            .string()
            .required('پر کردن این فیلد الزامی می باشد')
            .matches(
            /09(1[0-9]|3[1-9]|2[1-9])-?[0-9]{3}-?[0-9]{4}/,
            "لطفا شماره معتبر وارد کنید")
        .max(11, "لطفا شماره معتبر وارد کنید"), 
        delivery: yup
            .number()
            .required('پر کردن این فیلد الزامی می باشد'),
        })

    const formik = useFormik({
        initialValues: {
          firstName: '',
          lastName: '',
          billingAddress: '',
          phone : '',
          delivery : '',
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            alert(JSON.stringify(values, null, 2));
        },
      });     


    return <>
        <Cart width="75%" padding="15px">
            <form dir='rtl' onSubmit={formik.handleSubmit}>
                <Typography variant='h5' marginTop='30px' align='right' fontWeight='bold'>
                    <GrUserExpert marginX='10px'/>
                    ثبت اطلاعات شما
                </Typography>
                <Box sx={{display : 'flex'}}>
                    <TextField 
                        fullWidth
                        variant="standard" 
                        type='text' 
                        label='نام ' 
                        margin='normal'
                        id="firstName"
                        name="firstName"
                        value={formik.values.firstName}
                        onChange={formik.handleChange}
                        error={formik.touched.firstName && Boolean(formik.errors.firstName)}
                        helperText={formik.touched.firstName && formik.errors.firstName}
                    />
                    <TextField 
                        fullWidth
                        sx={{marginRight : '40px'}}
                        variant="standard" 
                        type='text' 
                        label='نام خانوادگی' 
                        margin='normal'
                        id="lastName"
                        name="lastName"
                        value={formik.values.lastName}
                        onChange={formik.handleChange}
                        error={formik.touched.lastName && Boolean(formik.errors.lastName)}
                        helperText={formik.touched.lastName && formik.errors.lastName}
                    />
                </Box>  
                <Box sx={{display : 'flex'}}>
                    {/* <TextField 
                        fullWidth
                        variant="standard" 
                        label='تاریخ تحویل' 
                        margin='normal'
                        id="delivery"
                        name="delivery"
                        value={date.format()}
                        onChange={(e) => {
                            formik.setFieldValue('delivery', e.target , false);
                            console.log(formik.values.delivery)
                        }}
                        error={formik.touched.delivery && Boolean(formik.errors.delivery)}
                        helperText={formik.touched.delivery && formik.errors.delivery}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment  position="start">
                                  <IconButton onClick={handleCalender}>
                                    <FaCalendar />
                                  </IconButton>
                              </InputAdornment>
                        ),}}
                        /> */}
                        <DatePicker        
                            style={{
                                textAlign:'left',
                                width: "100%",
                                height: "40px",
                                border : 0,
                                backgroundColor : 'transparent',
                                borderBottom : '1px solid #8C8D8F',
                                marginTop : '24px',
                                borderRadius : 0,
                                fontSize : '16px'
                            }}
                            fullWidth
                            variant="standard" 
                            margin='normal'
                            id="delivery"
                            name="delivery"
                            containerStyle={{
                                width: "100%",
                            }}
                            calendarPosition="bottom-center"
                            calendar={persian}
                            locale={persian_fa}
                            placeholder={"تاریخ تحویل"}
                            weekPicker={false}
                            onChange={(e) =>
                                formik.setFieldValue("delivery", e.unix * 1000, true)
                            }
                            value={formik.values.delivery}
                            minDate={new DateObject({ calendar: persian })}  
                        />
                    <TextField 
                        customInput={TextField}
                        fullWidth
                        sx={{marginRight : '40px' , position : 'relative'}}
                        variant="standard" 
                        label='شماره موبایل' 
                        type='text'
                        margin='normal'
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Box> 
                <Box sx={{color:'#D32F2F' , fontSize:'.8rem', position:'absolute' , top:370 }}>
                    {formik.touched.delivery && Boolean(formik.errors.delivery) && formik.touched.delivery && formik.errors.delivery}
                </Box>
                <TextField 
                    fullWidth
                    variant="standard" 
                    type='text' 
                    label='آدرس' 
                    margin='normal'
                    id="billingAddress"
                    name="billingAddress"
                    value={formik.values.billingAddress}
                    onChange={formik.handleChange}
                    error={formik.touched.billingAddress && Boolean(formik.errors.billingAddress)}
                    helperText={formik.touched.billingAddress && formik.errors.billingAddress}
                />
                <Button
                    type="submit"
                    color="success"
                    variant="contained"
                    sx={{marginY : '50px' , paddingX : '40px' , fontSize:'15px'}}
                >
                    پرداخت
                </Button>
            </form>
        </Cart>
    </>;
};

export default CustomerLayout(Finalize);