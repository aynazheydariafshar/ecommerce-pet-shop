import * as React from 'react';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import { useFormik } from 'formik';
import {TextField } from '@mui/material';
import useCategory from 'hooks/useCategory';
import * as yup from 'yup';
import axios from 'axios';
import useFetch from 'hooks/useFetch';


const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};



export default function AddProductes({open , handleClose}) {

    //category
    const {category , loadingcategory , errorcategory} = useCategory();

    //check for api
    const [loadingtwo , setLoadingtwo] = React.useState(true);
    const [errortwo , setErrortwo] = React.useState(null);

    //validation
    const validationSchema = yup.object().shape({
    Name: yup
        .string()
        .required('پر کردن این فیلد الزامی می باشد'),
    image: yup
        .mixed()
        .test("required", "پر کردن این فیلد الزامی می باشد", (file) => {
            // return file && file.size <-- u can use this if you don't want to allow empty files to be uploaded;
            if (file) return true;
            return false;
        }),
    group : yup
    .string()
    .required('پر کردن این فیلد الزامی می باشد'),   
    subgroup : yup.string().when("group", {
        is:(group) => group !== 'محصولات پرندگان',
        then: yup.string().required("پر کردن این فیلد الزامی می باشد")
      })

    })

    // const postData = (values , codei) => {
    //     setErrortwo(null);
    //     setLoadingtwo(false);
    //     axios.post('http://localhost:3002/products' , {
    //         name : values.Name,
    //         group : values.group,
    //         subgroup : values.subgroup,
    //         image : codei
    //     }).then(response => {
    //         setLoadingtwo(true);
    //         setdata([...response.data]);
    //     }).catch(error => {
    //         setLoadingtwo(true);
    //         setErrortwo('دوباره تلاش کنید')
    //     })
    // }

    // const getImage = (codeimage) => {
    //     axios.post('http://localhost:3002/files') , {codeimage}
    // }

    const formik = useFormik({
        initialValues: {
          Name: '',
          group: '',
          subgroup: '',
          image : ''
        },
        validationSchema: validationSchema,
        onSubmit: (values) => {
            // e.preventDefault();
            // postData(values , getImage());
            alert(JSON.stringify(values, null, 2));
        },
      });
  return (
    <div>
      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
            <form onSubmit={formik.handleSubmit}>
                <Typography variant='h5' align='right'>
                    افزودن کالا
                </Typography>
                <TextField 
                    fullWidth 
                    variant="standard" 
                    type='text' 
                    label='نام کالا' 
                    margin='normal'
                    id="Name"
                    name="Name"
                    value={formik.values.Name}
                    onChange={formik.handleChange}
                    error={formik.touched.Name && Boolean(formik.errors.Name)}
                    helperText={formik.touched.Name && formik.errors.Name}
                />
                <TextField 
                    select
                    SelectProps={{
                    native: true,
                    }}
                    fullWidth 
                    variant="standard" 
                    type='text' 
                    label='گروه' 
                    margin='normal'
                    id="group"
                    name="group"
                    value={formik.values.group}
                    onChange={formik.handleChange}
                    error={formik.touched.group && Boolean(formik.errors.group)}
                    helperText={formik.touched.group && formik.errors.group}
                >
                    <option>انتخاب کنید</option>
                    <option value='محصولات گربه'>
                        محصولات گربه
                    </option>
                    <option value='محصولات سگ ها'>
                        محصولات سگ ها
                    </option>
                    <option value='محصولات پرندگان'>
                        محصولات پرندگان
                    </option>
                </TextField>   
                {formik.values.group !== 'محصولات پرندگان' &&
                <TextField 
                    select
                    SelectProps={{
                    native: true,
                    }}
                    fullWidth 
                    variant="standard" 
                    type='text' 
                    label='زیر گروه' 
                    margin='normal'
                    id="subgroup"
                    name="subgroup"
                    value={formik.values.subgroup}
                    onChange={formik.handleChange}
                    error={formik.touched.subgroup && Boolean(formik.errors.subgroup)}
                    helperText={formik.touched.subgroup && formik.errors.subgroup}
                >
                    <option>انتخاب کنید</option>
                    {category.map(el => {
                        if(formik.values.group ===  el.group){
                            return (
                                <>
                                {el.subgroup && <option key={el.id} value={el.subgroup}>{el.subgroup}</option>}
                                </>
                            ) 
                        }
                    }
                    )} 
                </TextField>} 
                <TextField
                    inputProps={{ accept: 'image/*' }} 
                    fullWidth 
                    variant="standard" 
                    type='file' 
                    label='عکس' 
                    margin='normal'
                    id="image"
                    name="image"
                    value={formik.values.image}
                    onChange={formik.handleChange}
                    error={formik.touched.image && Boolean(formik.errors.image)}
                    helperText={formik.touched.image && formik.errors.image}
                />   
                <Button
                    fullWidth 
                    type="submit"
                    color="success"
                    variant="contained"
                    sx={{marginY : '20px'}}
                >
                    افزودن
                </Button>
            </form>
        </Box>
      </Modal>
    </div>
  );
}
