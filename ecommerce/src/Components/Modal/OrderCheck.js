import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import useCategory from "hooks/useCategory";
import { styled } from "@mui/material/styles";
import * as yup from "yup";
import axios from "axios";
import { DataContext } from "Context/DataContext";
import useFetch from "hooks/useFetch";
import { Table, Typography } from "@mui/material";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: "50%",
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));
  
  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    "&:nth-of-type(odd)": {
      backgroundColor: theme.palette.action.hover,
    },
    // hide last border
    "&:last-child td, &:last-child th": {
      border: 0,
    },
  }));

export default function OrderCheck({ open, handleClose, employee }) {
  //get token
  const token = localStorage.getItem("token");

  //data
  const { data, loading, error } = useFetch(`orders?token=${token}`);

  //show
  const [show, setShow] = React.useState(true);

  //context dat
  const productContext = React.useContext(DataContext)

  //data product
  const [product , setProduct] = React.useState()

  //check for api
  const [loadingtwo, setLoadingtwo] = React.useState(true);
  const [errortwo, setErrortwo] = React.useState(null);

  //update orderStatus on data
  const handleorderStatus = (row) => {
    setErrortwo(null);
    setLoadingtwo(false);
    axios
      .put(`http://localhost:3002/products/${row.id}`, {
        customerDetail: {
          firstName: row.customerDetail.firstName,
          lastName: row.customerDetail.lastName,
          phone: row.customerDetail.phone,
          billingAddress: row.customerDetail.billingAddress,
        },
        orderNumber: row.orderNumber,
        orderDate: row.orderDate,
        purchaseTotal: row.purchaseTotal,
        orderStatus: 1,
        delivery: row.delivery,
        deliveredAt: row.deliveredAt,
      })
      .then((response) => {
        productContext.getdata();
        setLoadingtwo(true);
      })
      .catch((error) => {
        setLoadingtwo(true);
        setErrortwo("دوباره تلاش کنید");
      });
  };

  const findProduct = (id) => {
      return productContext.data.filter(item => item.id === id);
  }
  
  React.useEffect(() => {
      console.log(findProduct(2,0))
  }, [])

  return (
    <>
      {show && (
        <div>
          <Modal
            keepMounted
            open={open}
            onClose={handleClose}
            aria-labelledby="keep-mounted-modal-title"
            aria-describedby="keep-mounted-modal-description"
          >
            <Box sx={style}>
                <Typography variant='h5' align='center' fontWeight='bold' marginBottom ='20px'>
                    جزییات سفارش
                </Typography>
                <Box sx={{display : 'flex' , justifyContent : 'space-around' , alignItems : 'center' , marginY : '12px'}}>
                    <Typography
                        textAlign="right"
                        gutterBottom
                        variant="h7"
                        component="div"
                    >
                        تلفن : {employee.customerDetail.phone}
                    </Typography>
                    <Typography
                        textAlign="right"
                        gutterBottom
                        variant="h7"
                        component="div"
                    >
                        نام مشتری :{" "}
                        {`${employee.customerDetail.firstName} ${employee.customerDetail.lastName}`}
                    </Typography>
                </Box>
                <Box sx={{display : 'flex' , justifyContent : 'space-around' , alignItems : 'center' , marginY : '12px' , marginRight : '5px'}}>
                    <Typography
                        textAlign="right"
                        gutterBottom
                        variant="h7"
                        component="div"
                    >
                        زمان سفارش : {new Date(employee.orderDate).toLocaleDateString('fa-IR')}
                    </Typography>
                    <Typography
                        textAlign="right"
                        gutterBottom
                        variant="h7"
                        component="div"
                    >
                        زمان تحویل : {new Date(employee.delivery).toLocaleDateString('fa-IR')}
                    </Typography>
                </Box>
              <Typography
                textAlign="right"
                marginBottom = '5px'
                gutterBottom
                variant="h7"
                component="div"
                marginRight='90px'
              >
                {employee.customerDetail.billingAddress} : آدرس
              </Typography>
              <TableContainer
                dir="rtl"
                component={Paper}
                sx={{ padding: "30px" }}
              >
                <Table sx={{ minWidth: 100 }} aria-label="customized table">
                  <TableHead>
                    <TableRow>
                      <StyledTableCell>#</StyledTableCell>
                      <StyledTableCell align="right">کالا</StyledTableCell>
                      <StyledTableCell align="right">قیمت</StyledTableCell>
                      <StyledTableCell align="right">تعداد</StyledTableCell>
                    </TableRow>
                  </TableHead>
                  <TableBody>
                    {employee.orderItems?.map((row, index) => (
                      <StyledTableRow key={row.id}>
                        <StyledTableCell component="th" scope="row">
                          {index + 1}
                        </StyledTableCell>
                                <StyledTableCell
                                align="right"
                                component="th"
                                scope="row"
                                >
                                    {findProduct(row.productId)[0]?.name}
                                </StyledTableCell>
                                <StyledTableCell
                                align="right"
                                component="th"
                                scope="row"
                                >
                                    {findProduct(row.productId)[0]?.price}
                                </StyledTableCell>
                         <StyledTableCell component="th" scope="row">
                          {row.quantity}
                        </StyledTableCell>
                      </StyledTableRow>
                    ))}
                  </TableBody>
                </Table>
              </TableContainer>
              {employee.orderStatus === 3 ?
                <Button
                  type="submit"
                  color="success"
                  variant="contained"
                  sx={{marginY : '10px' , paddingX : '40px' , fontSize:'15px'}}
                  >
                  تحویل شد
                </Button> :
                <Typography 
                    textAlign="center"
                    gutterBottom
                    variant="h7"
                    component="div"
                    marginTop='50px'
                >
                    زمان تحویل : 
                </Typography>
              }
            </Box>
          </Modal>
        </div>
      )}
    </>
  );
}
