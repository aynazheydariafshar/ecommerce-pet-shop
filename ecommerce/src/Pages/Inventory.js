import ManagementLayout from 'layout/ManagementLayout';
import * as React from "react";
import { styled } from "@mui/material/styles";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell, { tableCellClasses } from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Button, Pagination, Stack } from "@mui/material";
import PaginationPage from "components/PaginationPage";
import { Box } from "@mui/system";
import EasyEdit from 'react-easy-edit';
import { DataContext } from 'Context/DataContext';
import axios from 'axios';


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

const Inventory = () => {

  //context data
  const productContext = React.useContext(DataContext);

  //check for api
  const [loadingtwo , setLoadingtwo] = React.useState(true);
  const [errortwo , setErrortwo] = React.useState(null);

  //edit state price
  const [editePrice , seteditePrice] = React.useState()

  // //pagination data
  let [page, setPage] = React.useState(1);
  const perPage = 10;

  const count = Math.ceil(productContext.data.length / perPage);
  const product = PaginationPage(productContext.data, perPage);

  const handleChange = (e, p) => {
    setPage(p);
    product.jump(p);
  };

  //update price on data
  const savePriceEdite = (value , row) => {
    setErrortwo(null);
    setLoadingtwo(false);
    axios.put(`http://localhost:3002/products/${row.id}` , {
      name : row.name,
      brand : row.brand,
      image: row.image,
      price : value,
      category : row.category,
      count : row.count,
      type : row.type,
      weight : row.weight,
      description : row.description,
    }).then(response => {
        productContext.getdata();
        setLoadingtwo(true);
    }).catch(error => {
        setLoadingtwo(true);
        setErrortwo('دوباره تلاش کنید')
    })
  }

  //update price on data
  const saveCountEdite = (value , row) => {
    setErrortwo(null);
    setLoadingtwo(false);
    axios.put(`http://localhost:3002/products/${row.id}` , {
      name : row.name,
      brand : row.brand,
      image: row.image,
      price : row.price,
      category : row.category,
      count : value,
      type : row.type,
      weight : row.weight,
      description : row.description,
    }).then(response => {
        productContext.getdata();
        setLoadingtwo(true);
    }).catch(error => {
        setLoadingtwo(true);
        setErrortwo('دوباره تلاش کنید')
    })
  }




  return <>
      <Box
        sx={{ display: "flex", flexDirection: "column", alignItems: "center" }}
      >
        <TableContainer dir="rtl" component={Paper} sx={{ padding: "30px" }}>
          <Table sx={{ minWidth: 700 }} aria-label="customized table">
            <TableHead>
              <TableRow>
                <StyledTableCell>#</StyledTableCell>
                <StyledTableCell align="right">نام کالا</StyledTableCell>
                <StyledTableCell align="right">قیمت</StyledTableCell>
                <StyledTableCell align="right">موجودی</StyledTableCell>
              </TableRow>
            </TableHead>
            <TableBody>
            {product.currentData()?.map((row , index) => (
                <StyledTableRow key={row.id}>
                  <StyledTableCell component="th" scope="row">
                    {index+1}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    {row.name}
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    <EasyEdit
                      type="number"
                      onSave={(value) => savePriceEdite(value , row)}
                      onCancel={() => {}}
                      saveButtonLabel="ذخیره"
                      cancelButtonLabel="خروج"
                      value={row.price}                      
                    />
                  </StyledTableCell>
                  <StyledTableCell align="right" component="th" scope="row">
                    <EasyEdit
                      type="number"
                      onSave={(value) => saveCountEdite(value , row)}
                      onCancel={() => {}}
                      saveButtonLabel="ذخیره"
                      cancelButtonLabel="خروج"
                      value= {row.count}
                    />
                  </StyledTableCell>
                </StyledTableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>

        <Stack className='pager' padding="30px">
          <Pagination
            size="large"
            count={count}
            color="secondary"
            onChange={handleChange}
            page={page}
          />
        </Stack>
      </Box>
    </>
};


export default ManagementLayout(Inventory);