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
import {FaCalendar} from 'react-icons/fa'

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
            .required('پر کردن این فیلد الزامی می باشد'),
        lastName: yup
            .string()
            .required('پر کردن این فیلد الزامی می باشد'),
        billingAddress: yup
            .string()
            .required('پر کردن این فیلد الزامی می باشد'),
        phone: yup
            .number()
            .required('پر کردن این فیلد الزامی می باشد'),
        delivery: yup
            .string()
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
            
        },
      });     


    return <>
        <Cart width="75%" padding="15px">
            <form dir='rtl' onSubmit={formik.handleSubmit}>
                <Typography variant='h5' align='right' fontWeight='bold'>
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
                    <TextField 
                        fullWidth
                        variant="standard" 
                        label='تاریخ تحویل' 
                        margin='normal'
                        id="delivery"
                        name="delivery"
                        value={date.format()}
                        onChange={formik.handleChange}
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
                        />
                    <TextField 
                        sx={{marginRight : '40px'}}
                        fullWidth
                        variant="standard" 
                        type='number' 
                        label='شماره موبایل ' 
                        margin='normal'
                        id="phone"
                        name="phone"
                        value={formik.values.phone}
                        onChange={formik.handleChange}
                        error={formik.touched.phone && Boolean(formik.errors.phone)}
                        helperText={formik.touched.phone && formik.errors.phone}
                    />
                </Box> 
                {show &&  <Calendar  value={date} onChange={setDate} calendar={persian}locale={persian_fa}/>}
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